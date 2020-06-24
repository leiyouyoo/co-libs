"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const config_1 = require("@schematics/angular/utility/config");
const find_module_1 = require("@schematics/angular/utility/find-module");
const axios_1 = require("axios");
const lodash_1 = require("lodash");
const ts = require("typescript");
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
let serveEntityList = [];
let selectedEntityList = [];
let serviceList = [];
let serveSelectedEntityList = [];
function buildCOSwagger(options) {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        // cconst data = await getSwaggerData(options)();
        console.log('loading....');
        const workspace = config_1.getWorkspace(tree);
        if (!options.project) {
            throw new schematics_1.SchematicsException("Option (project) is required.");
        }
        const projectName = options.project;
        const project = workspace.projects[projectName];
        options.path = `${project.sourceRoot}/app/service/${options.name}`;
        const data = yield getSwaggerData(options)();
        let response = [addToNgModuleProviders(options), ...data];
        // 导出模板
        var html = "";
        for (var msg of serviceList) {
            msg = core_1.strings.dasherize(msg);
            msg += ".service";
            html += `export * from './${msg}';\r\n`;
        }
        var index_ts = schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./index_files"), [
            schematics_1.template(Object.assign(Object.assign(Object.assign({}, core_1.strings), { "if-flat": (s) => (options.flat ? "" : s) }), {
                name: options.name,
                serviceList: html,
                entity: selectedEntityList,
            })),
            schematics_1.move(options.path),
        ]), schematics_1.MergeStrategy.Default);
        response.push(index_ts);
        console.log('Success');
        return schematics_1.chain(response);
    });
}
exports.buildCOSwagger = buildCOSwagger;
function getSwaggerData(options) {
    // 获取接口数据
    return () => __awaiter(this, void 0, void 0, function* () {
        const res = yield axios_1.default.get(options.url);
        // 赋值 实体值
        serveEntityList = res.data.definitions;
        // 定义导出目录
        serviceList = [];
        // 把Object 转 Array
        const arr = [];
        // tslint:disable-next-line: forin
        for (const a in res.data.paths) {
            arr.push({
                url: a,
                api: res.data.paths[a],
                type: Object.keys(res.data.paths[a])[0],
            });
        }
        // 根据服务位置来分组
        const group = lodash_1.groupBy(arr, (item) => item.api[Object.keys(item.api)[0]].tags[0]);
        // 定义生成Tree函数
        const chainArr = [];
        // 循环分组处理数据
        // tslint:disable-next-line: forin
        let i = 0;
        for (const na in group) {
            serveSelectedEntityList = [];
            i++;
            // 重构实体结构
            const groupArr = setSwaggerRequest(group[na]);
            group[na] = {};
            group[na].arr = groupArr;
            serviceList.push(`${na}`);
            let newServeSelectedEntityList = [];
            groupArr.forEach((e) => {
                if (serveSelectedEntityList.includes(e.reqEntity) &&
                    !newServeSelectedEntityList.includes(e.reqEntity)) {
                    newServeSelectedEntityList.push(e.reqEntity);
                }
                if (serveSelectedEntityList.includes(e.resEntity) &&
                    !newServeSelectedEntityList.includes(e.resEntity)) {
                    newServeSelectedEntityList.push(e.resEntity);
                }
            });
            chainArr.push(schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./files"), [
                schematics_1.template(Object.assign(Object.assign(Object.assign({}, core_1.strings), { "if-flat": (s) => (options.flat ? "" : s) }), {
                    name: na,
                    pageName: options.name,
                    serveSelectedEntityList: newServeSelectedEntityList,
                    data: group[na].arr,
                })),
                schematics_1.move(options.path),
            ]), schematics_1.MergeStrategy.Default));
        }
        // 导出服务
        return chainArr;
    });
}
// reqList 分组后的列表
function setSwaggerRequest(reqList) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    for (const detail of reqList) {
        // api接口内容详情
        const reqDetail = detail.api[detail.type];
        detail.reqJson = {};
        // 配置参数位置
        for (const parmDetail of reqDetail.parameters) {
            // 先处理类型
            if ((parmDetail === null || parmDetail === void 0 ? void 0 : parmDetail.type) === "integer") {
                parmDetail.type = "number";
            }
            else if ((parmDetail === null || parmDetail === void 0 ? void 0 : parmDetail.type) === "array") {
                if ((_b = (_a = parmDetail.items) === null || _a === void 0 ? void 0 : _a.schema) === null || _b === void 0 ? void 0 : _b.$ref) {
                    // 设置方法内部实体名称
                    const name = setEntityName((_d = (_c = parmDetail.items) === null || _c === void 0 ? void 0 : _c.schema) === null || _d === void 0 ? void 0 : _d.$ref);
                    bindEntity((_f = (_e = parmDetail.items) === null || _e === void 0 ? void 0 : _e.schema) === null || _f === void 0 ? void 0 : _f.$ref);
                    parmDetail.type = name + "[]";
                }
                else {
                    parmDetail.type = "any[]";
                }
            }
            // 绑定实体
            if ((_g = parmDetail === null || parmDetail === void 0 ? void 0 : parmDetail.schema) === null || _g === void 0 ? void 0 : _g.$ref) {
                // 找寻该实体,并加入处理
                const name = setEntityName((_h = parmDetail.schema) === null || _h === void 0 ? void 0 : _h.$ref);
                detail.reqEntity = name;
                parmDetail.type = name;
                bindEntity(parmDetail.schema.$ref);
            }
            // 首字母小写
            parmDetail.name = parmDetail.name.replace(/^\S/, (s) => s.toLowerCase());
            // 处理非必填
            if (!parmDetail.required) {
                parmDetail.name += "?";
            }
            detail.reqJson[parmDetail.name] = parmDetail.type;
        }
        // 获取返回实体
        detail.resEntity = "any";
        if ((_j = reqDetail.responses[200].schema) === null || _j === void 0 ? void 0 : _j.$ref) {
            // 如果实体存在就处理
            const entity_name = reqDetail.responses[200].schema.$ref.replace("#/definitions/", "");
            if (serveEntityList[entity_name]) {
                // set entity
                const entityName = setResponseName(reqDetail.responses[200].schema.$ref);
                detail.resEntity = entityName;
            }
        }
    }
    return reqList;
}
function setResponseName(ref) {
    // tslint:disable-next-line: one-variable-per-declaration
    let entityName, entityValue;
    if (ref.includes("`")) {
        // 生成实体xxx<xxx>
        entityName = ref.split("`")[0];
        entityValue = ref.split("`")[1];
        // tslint:disable-next-line: one-variable-per-declaration
        let name = "", zname = "";
        if (entityValue) {
            zname = entityValue.substring(0, entityValue.indexOf(","));
            name = zname.substring(zname.lastIndexOf(".") + 1);
            bindEntity(zname.substring(zname.lastIndexOf("[") + 1));
        }
        entityName = entityName.substring(entityName.lastIndexOf(".") + 1);
        return `${entityName}<${name ? name : "T"}>`;
    }
    else {
        bindEntity(ref);
        entityName = ref.substring(ref.lastIndexOf(".") + 1);
        return entityName;
    }
}
function bindEntity(ref) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const entity = serveEntityList[ref.replace("#/definitions/", "")];
    const entityName = setEntityName(ref, true);
    if (entity) {
        // tslint:disable-next-line: forin
        for (const key in entity.properties) {
            const parmDetail = entity.properties[key];
            if ((parmDetail === null || parmDetail === void 0 ? void 0 : parmDetail.type) === "integer") {
                parmDetail.type = "number";
            }
            else if ((parmDetail === null || parmDetail === void 0 ? void 0 : parmDetail.type) === "array") {
                if ((_b = (_a = parmDetail.items) === null || _a === void 0 ? void 0 : _a.schema) === null || _b === void 0 ? void 0 : _b.$ref) {
                    // 设置方法内部实体名称
                    const name = setEntityName((_d = (_c = parmDetail.items) === null || _c === void 0 ? void 0 : _c.schema) === null || _d === void 0 ? void 0 : _d.$ref);
                    bindEntity((_f = (_e = parmDetail.items) === null || _e === void 0 ? void 0 : _e.schema) === null || _f === void 0 ? void 0 : _f.$ref);
                    parmDetail.type = name + "[]";
                }
                else {
                    parmDetail.type = "any[]";
                }
            }
            // 绑定实体
            if ((_g = parmDetail === null || parmDetail === void 0 ? void 0 : parmDetail.schema) === null || _g === void 0 ? void 0 : _g.$ref) {
                // 找寻该实体,并加入处理
                const name = setEntityName((_h = parmDetail.schema) === null || _h === void 0 ? void 0 : _h.$ref);
                parmDetail.type = name;
                bindEntity(parmDetail.schema.$ref);
            }
            if (parmDetail === null || parmDetail === void 0 ? void 0 : parmDetail.$ref) {
                // 找寻该实体,并加入处理
                const name = setEntityName(parmDetail.$ref);
                parmDetail.type = name;
                bindEntity(parmDetail.$ref);
            }
            // 处理非必填
            if (!parmDetail.required) {
                parmDetail.name += "?";
            }
            // set required
            if (((_j = entity.required) === null || _j === void 0 ? void 0 : _j.includes(key)) && !key.includes("?")) {
                const keyValue = entity.properties[key];
                delete entity.properties[key];
                entity.properties[key + "?"] = keyValue;
            }
        }
    }
    if (!selectedEntityList.some((e) => e.name === entityName)) {
        selectedEntityList.push({
            name: entityName,
            value: entity,
        });
    }
    if (!serveSelectedEntityList.some((e) => e === entityName)) {
        serveSelectedEntityList.push(entityName);
    }
}
function setEntityName(ref, isEntity = false) {
    // tslint:disable-next-line: one-variable-per-declaration
    let entityName, entityValue;
    if (ref.includes("`")) {
        // 生成实体xxx<xxx>
        entityName = ref.split("`")[0];
        entityValue = ref.split("`")[1];
        // tslint:disable-next-line: one-variable-per-declaration
        let name = "", zname = "";
        if (entityValue) {
            zname = entityValue.substring(0, entityValue.indexOf(","));
            name = zname.substring(zname.lastIndexOf(".") + 1);
        }
        const hasEntity = zname.substring(zname.lastIndexOf("[") + 1);
        const entity = serveEntityList[hasEntity.replace("#/definitions/", "")];
        entityName = entityName.substring(entityName.lastIndexOf(".") + 1);
        if (!entity && ref.includes("[")) {
            // 该请求来自实体
            if (isEntity) {
                return `${entityName}`;
            }
            return `${entityName}[]`;
        }
        else {
            return `${entityName}<${name ? name : "T"}>`;
        }
    }
    else {
        entityName = ref.substring(ref.lastIndexOf(".") + 1);
        return entityName;
    }
}
function addToNgModuleProviders(options) {
    return (host) => {
        if (!options.module) {
            return host;
        }
        const modulePath = `${options.path}/${options.module}`;
        const moduleSource = readIntoSourceFile(host, modulePath);
        const servicePath = `${options.path}/` +
            (options.flat ? "" : core_1.strings.dasherize(options.name) + "/") +
            core_1.strings.dasherize(options.name) +
            ".service";
        const relativePath = find_module_1.buildRelativePath(modulePath, servicePath);
        const classifiedName = core_1.strings.classify(`${options.name}Service`);
        const providersChanges = ast_utils_1.addProviderToModule(moduleSource, modulePath, classifiedName, relativePath);
        const providersRecorder = host.beginUpdate(modulePath);
        for (const change of providersChanges) {
            if (change instanceof change_1.InsertChange) {
                providersRecorder.insertLeft(change.pos, change.toAdd);
            }
        }
        host.commitUpdate(providersRecorder);
        return host;
    };
}
function readIntoSourceFile(host, modulePath) {
    const text = host.read(modulePath);
    if (text === null) {
        throw new schematics_1.SchematicsException(`File ${modulePath} does not exist.`);
    }
    const sourceText = text.toString("utf-8");
    return ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
}
//# sourceMappingURL=index.js.map