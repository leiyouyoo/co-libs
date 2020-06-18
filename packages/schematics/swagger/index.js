'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
const schematics_1 = require('@angular-devkit/schematics');
const ts = require('typescript');
const core_1 = require('@angular-devkit/core');
const config_1 = require('@schematics/angular/utility/config');
const find_module_1 = require('@schematics/angular/utility/find-module');
const ast_utils_1 = require('@schematics/angular/utility/ast-utils');
const change_1 = require('@schematics/angular/utility/change');
const lodash_1 = require('lodash');
const axios_1 = require('axios');
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
var serveEntityList = [];
var selectedEntityList = [];
function buildCOSwagger(options) {
  return (tree, context) =>
    __awaiter(this, void 0, void 0, function* () {
      // let data = await getSwaggerData(options)();
      const workspace = config_1.getWorkspace(tree);
      if (!options.project) {
        throw new schematics_1.SchematicsException('Option (project) is required.');
      }
      const projectName = options.project;
      const project = workspace.projects[projectName];
      const projectType = 'service';
      options.name = `${options.name}_service`;
      options.path = `${project.sourceRoot}/app/${projectType}/${options.name}`;
      let data = yield getSwaggerData(options)();
      return schematics_1.chain([addToNgModuleProviders(options), ...data]);
    });
}
exports.buildCOSwagger = buildCOSwagger;
function getSwaggerData(options) {
  // 获取接口数据
  return () =>
    __awaiter(this, void 0, void 0, function* () {
      let res = yield axios_1.default.get(options.url);
      // 赋值 实体值
      serveEntityList = res.data.definitions;
      // 把Object 转 Array
      let arr = [];
      for (var a in res.data.paths) {
        arr.push({
          url: a,
          api: res.data.paths[a],
          type: Object.keys(res.data.paths[a])[0],
        });
      }
      // 根据服务位置来分组
      let group = lodash_1.groupBy(arr, item => item.api[Object.keys(item.api)[0]].tags[0]);
      // 定义生成Tree函数
      let chainArr = [];
      // 循环分组处理数据
      for (var na in group) {
        // 清空实体全局变量
        selectedEntityList = [];
        // 重构实体结构
        let arr = group[na];
        group[na] = {};
        group[na].arr = setSwaggerRequest(arr);
        group[na].entity = selectedEntityList;
        chainArr.push(
          schematics_1.mergeWith(
            schematics_1.apply(schematics_1.url('./files'), [
              schematics_1.template(
                Object.assign(Object.assign(Object.assign({}, core_1.strings), { 'if-flat': s => (options.flat ? '' : s) }), {
                  name: na,
                  data: group[na].arr,
                  entity: group[na].entity,
                }),
              ),
              schematics_1.move(options.path),
            ]),
            schematics_1.MergeStrategy.Default,
          ),
        );
      }
      return chainArr;
    });
}
function setSwaggerRequest(reqList) {
  for (var detail of reqList) {
    // 请求方式
    var reqType = detail.type;
    var reqDetail = detail.api[reqType];
    detail.reqJson = {};
    // 配置参数位置
    for (var parmDetail of reqDetail.parameters) {
      // 处理模板显示数据
      if (parmDetail.type && parmDetail.type == 'integer') {
        parmDetail.type = 'number';
      } else if (parmDetail.type && parmDetail.type == 'array') {
        if (parmDetail.items && parmDetail.items.schema && parmDetail.items.schema.$ref) {
          var name = setEntityName(parmDetail.items.schema.$ref);
          parmDetail.type = name + '[]';
        } else {
          parmDetail.type = 'any[]';
        }
      }
      // 处理相应实体
      if (parmDetail.schema && parmDetail.schema.$ref) {
        bindSwaggerEntityParam(parmDetail.schema);
        detail.reqEntity = setEntityName(parmDetail.schema.$ref);
      } else {
        var type = parmDetail.type;
        if (type === 'integer') {
          type = 'number';
        } else if (type === 'array') {
          type = 'number[]';
        }
        detail.reqJson[parmDetail.name] = type;
      }
    }
    // 获取返回实体
    detail.resEntity = 'any';
    if (reqDetail.responses[200].schema && reqDetail.responses[200].schema.$ref) {
      // 如果实体存在就处理
      var name = reqDetail.responses[200].schema.$ref.replace('#/definitions/', '');
      if (serveEntityList[name]) {
        var entityName = setEntityName(reqDetail.responses[200].schema.$ref);
        detail.resEntity = entityName;
        bindSwaggerEntityParam(reqDetail.responses[200].schema);
      } else {
        detail.resEntity = 'any';
      }
    }
  }
  return reqList;
}
//将使用的实体加入到数组
function bindSwaggerEntityParam(schema) {
  schema = setEntityType(schema);
  if (schema.$ref) {
    // 从全局查找该实体
    var entityName = setEntityName(schema.$ref);
    // 如果不存在就加入
    if (!hasEntity(entityName)) {
      var entity = serveEntityList[schema.$ref.replace('#/definitions/', '')];
      selectedEntityList.push({
        name: entityName,
        value: entity,
      });
      // 遍历字段，查看是否还有实体
      for (var zentity in entity.properties) {
        // 处理实体内部参数
        bindSwaggerEntityParam(entity.properties[zentity]);
      }
    }
  }
}
// 将后台类型转化
function setEntityType(schema) {
  if (schema.type && schema.type == 'integer') {
    schema.type = 'number';
  } else if (schema.type && (schema.type == 'array' || schema.type.includes('[]'))) {
    if (schema.items && schema.items.$ref) {
      bindSwaggerEntityParam(schema.items);
      // 处理类型
      var name = setEntityName(schema.items.$ref);
      schema.type = `${name}[]`;
    } else {
      schema.type = 'any[]';
    }
  }
  return schema;
}
// 处理实体名字
function setEntityName(ref) {
  var entityName;
  if (ref.includes('`')) {
    entityName = ref.split('`')[0];
    entityName = entityName.substring(entityName.lastIndexOf('.') + 1);
  } else {
    entityName = ref.substring(ref.lastIndexOf('.') + 1);
  }
  return entityName;
}
// 是否存在该实体
function hasEntity(entityName) {
  return selectedEntityList.some(e => e.name == entityName);
}
function addToNgModuleProviders(options) {
  return host => {
    if (!options.module) {
      return host;
    }
    const modulePath = `${options.path}/${options.module}`;
    const moduleSource = readIntoSourceFile(host, modulePath);
    const servicePath =
      `${options.path}/` +
      (options.flat ? '' : core_1.strings.dasherize(options.name) + '/') +
      core_1.strings.dasherize(options.name) +
      '.service';
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
  const sourceText = text.toString('utf-8');
  return ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
}
//# sourceMappingURL=index.js.map
