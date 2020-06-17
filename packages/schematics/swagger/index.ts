// tslint:disable-next-line: ordered-imports
import { strings } from '@angular-devkit/core';
import {
  apply,
  chain,
  MergeStrategy,
  mergeWith,
  // tslint:disable-next-line: ordered-imports
  move,
  Rule,
  SchematicsException,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
// tslint:disable-next-line: ordered-imports
import { addProviderToModule } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import { getWorkspace } from '@schematics/angular/utility/config';
import { buildRelativePath } from '@schematics/angular/utility/find-module';
import axios from 'axios';
import { groupBy } from 'lodash';
import * as ts from 'typescript';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.

let serveEntityList: any = [];
let selectedEntityList: any = [];

export function buildCOSwagger(options: any): Rule {
  return async (tree: Tree) => {
    // let data = await getSwaggerData(options)();
    const workspace = getWorkspace(tree);
    if (!options.project) {
      throw new SchematicsException('Option (project) is required.');
    }
    const projectName = options.project as string;
    const project = workspace.projects[projectName];
    const projectType = 'service';

    options.name = `${options.name}_service`;
    options.path = `${project.sourceRoot}/app/${projectType}/${options.name}`;

    const data = await getSwaggerData(options)();
    return chain([addToNgModuleProviders(options), ...data]);
  };
}

function getSwaggerData(options: any): () => Promise<any[]> {
  // 获取接口数据
  return async () => {
    const res: any = await axios.get(options.url);
    // 赋值 实体值
    serveEntityList = res.data.definitions;

    // 把Object 转 Array
    const arr: any = [];
    // tslint:disable-next-line: forin
    for (const a in res.data.paths) {
      arr.push({
        url: a,
        api: res.data.paths[a],
        type: Object.keys(res.data.paths[a])[0],
      });
    }

    // 根据服务位置来分组
    const group: any = groupBy(arr, item => item.api[Object.keys(item.api)[0]].tags[0]);

    // 定义生成Tree函数
    const chainArr: any[] = [];

    // 循环分组处理数据
    // tslint:disable-next-line: forin
    for (const na in group) {
      // 清空实体全局变量
      selectedEntityList = [];

      // 重构实体结构
      // tslint:disable-next-line: prefer-const
      let myarr = group[na];
      group[na] = {};
      group[na].arr = setSwaggerRequest(myarr);
      group[na].entity = selectedEntityList;

      chainArr.push(
        mergeWith(
          apply(url('./files'), [
            template({
              ...strings,
              'if-flat': (s: string) => (options.flat ? '' : s),
              ...{
                name: na,
                data: group[na].arr,
                entity: group[na].entity,
              },
            }),
            move(options.path as string),
          ]),
          MergeStrategy.Default,
        ),
      );
    }
    return chainArr;
  };
}

function setSwaggerRequest(reqList: any) {
  for (const detail of reqList) {
    // 请求方式
    const reqType = detail.type;
    const reqDetail = detail.api[reqType];
    detail.reqJson = {};

    // 配置参数位置
    for (const parmDetail of reqDetail.parameters) {
      // 处理模板显示数据
      if (parmDetail.type && parmDetail.type === 'integer') {
        parmDetail.type = 'number';
      } else if (parmDetail.type && parmDetail.type === 'array') {
        if (parmDetail.items && parmDetail.items.schema && parmDetail.items.schema.$ref) {
          const name = setEntityName(parmDetail.items.schema.$ref);
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
        let type = parmDetail.type;
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
      const name = reqDetail.responses[200].schema.$ref.replace('#/definitions/', '');
      if (serveEntityList[name]) {
        detail.resEntity = setEntityName(reqDetail.responses[200].schema.$ref);
        bindSwaggerEntityParam(reqDetail.responses[200].schema);
      } else {
        detail.resEntity = 'any';
      }
    }
  }

  return reqList;
}

// 将使用的实体加入到数组
function bindSwaggerEntityParam(schema: any) {
  schema = setEntityType(schema);
  if (schema.$ref) {
    // 从全局查找该实体
    const entityName = setEntityName(schema.$ref);

    // 如果不存在就加入
    if (!hasEntity(entityName)) {
      const entity = serveEntityList[schema.$ref.replace('#/definitions/', '')];

      selectedEntityList.push({
        name: entityName,
        value: entity,
      });

      // 遍历字段，查看是否还有实体
      // tslint:disable-next-line: forin
      for (const zentity in entity.properties) {
        // 处理实体内部参数
        bindSwaggerEntityParam(entity.properties[zentity]);
      }
    }
  }
}

// 将后台类型转化
function setEntityType(schema: any) {
  if (schema.type && schema.type === 'integer') {
    schema.type = 'number';
  } else if (schema.type && (schema.type === 'array' || schema.type.includes('[]'))) {
    if (schema.items && schema.items.$ref) {
      bindSwaggerEntityParam(schema.items);
      // 处理类型
      const name = setEntityName(schema.items.$ref);
      schema.type = `${name}[]`;
    } else {
      schema.type = 'any[]';
    }
  }
  return schema;
}

// 处理实体名字
function setEntityName(ref: any) {
  let entityName;
  if (ref.includes('`')) {
    entityName = ref.split('`')[0];
    entityName = entityName.substring(entityName.lastIndexOf('.') + 1);
  } else {
    entityName = ref.substring(ref.lastIndexOf('.') + 1);
  }
  return entityName;
}

// 是否存在该实体
function hasEntity(entityName: any) {
  return selectedEntityList.some((e: any) => e.name === entityName);
}

function addToNgModuleProviders(options: any): Rule {
  return (host: Tree) => {
    if (!options.module) {
      return host;
    }

    const modulePath = `${options.path}/${options.module}`;
    const moduleSource = readIntoSourceFile(host, modulePath);

    const servicePath =
      `${options.path}/` + (options.flat ? '' : strings.dasherize(options.name) + '/') + strings.dasherize(options.name) + '.service';

    const relativePath = buildRelativePath(modulePath, servicePath);
    const classifiedName = strings.classify(`${options.name}Service`);
    const providersChanges = addProviderToModule(moduleSource, modulePath, classifiedName, relativePath);

    const providersRecorder = host.beginUpdate(modulePath);
    for (const change of providersChanges) {
      if (change instanceof InsertChange) {
        providersRecorder.insertLeft(change.pos, change.toAdd);
      }
    }
    host.commitUpdate(providersRecorder);

    return host;
  };
}

function readIntoSourceFile(host: Tree, modulePath: string): ts.SourceFile {
  const text = host.read(modulePath);
  if (text === null) {
    throw new SchematicsException(`File ${modulePath} does not exist.`);
  }
  const sourceText = text.toString('utf-8');

  return ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
}
