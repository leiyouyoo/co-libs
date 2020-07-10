import { strings } from '@angular-devkit/core';
import {
  apply,
  chain,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
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
const selectedEntityList: any = [];
let serviceList: any = [];
let serveSelectedEntityList: any = [];
export function buildCOSwagger(options: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    // cconst data = await getSwaggerData(options)();
    console.log('loading....');
    const workspace = getWorkspace(tree);
    if (!options.project) {
      throw new SchematicsException('Option (project) is required.');
    }
    const projectName = options.project as string;
    const project = workspace.projects[projectName];
    options.path = `${project.sourceRoot}/app/service/${options.name}`;

    const data = await getSwaggerData(options)();
    const response = [addToNgModuleProviders(options), ...data];
    // 导出模板
    let html = '';
    for (let msg of serviceList) {
      msg = strings.dasherize(msg);
      msg += '.service';
      html += `export * from './${msg}';\r\n`;
    }
    const index_ts = mergeWith(
      apply(url('./index_files'), [
        template({
          ...strings,
          'if-flat': (s: string) => (options.flat ? '' : s),
          ...{
            name: options.name,
            serviceList: html,
            entity: selectedEntityList,
          },
        }),
        move(options.path as string),
      ]),
      MergeStrategy.Default,
    );
    response.push(index_ts);
    return chain(response);
  };
}

function getSwaggerData(options): () => Promise<any[]> {
  // 获取接口数据
  return async () => {
    const res: any = await axios.get(options.url);
    // 赋值 实体值
    serveEntityList = res.data.definitions;
    // 定义导出目录
    serviceList = [];

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
    let i = 0;
    // tslint:disable-next-line: forin
    for (const na in group) {
      serveSelectedEntityList = [];
      i++;
      // 重构实体结构
      const groupArr = setSwaggerRequest(group[na]);
      group[na] = {};
      group[na].arr = groupArr;
      serviceList.push(`${na}`);

      const newServeSelectedEntityList: any = [];
      groupArr.forEach(e => {
        serveSelectedEntityList.forEach(z => {
          if (e.reqEntity?.includes(z) || e.resEntity?.includes(z)) {
            if (!newServeSelectedEntityList.includes(z)) {
              newServeSelectedEntityList.push(z);
            }
          }
        });
      });

      chainArr.push(
        mergeWith(
          apply(url('./files'), [
            template({
              ...strings,
              'if-flat': (s: string) => (options.flat ? '' : s),
              ...{
                name: na,
                pageName: options.name,
                serveSelectedEntityList: newServeSelectedEntityList,
                data: group[na].arr,
              },
            }),
            move(options.path as string),
          ]),
          MergeStrategy.Default,
        ),
      );
    }
    // 导出服务
    return chainArr;
  };
}

// reqList 分组后的列表
function setSwaggerRequest(reqList: any) {
  for (const detail of reqList) {
    // api接口内容详情
    detail.newType = detail.type;
    const reqDetail = detail.api[detail.type];
    if (detail.type === 'post' && reqDetail.parameters) {
      if (reqDetail.parameters[0] && reqDetail.parameters[0].in && reqDetail.parameters[0].in === 'formData') {
        detail.newType = 'form';
      }
    }

    detail.reqJson = {};

    // 配置参数位置
    for (const parmDetail of reqDetail.parameters) {
      // 先处理类型
      if (parmDetail?.type === 'integer') {
        parmDetail.type = 'number';
      } else if (parmDetail?.type === 'array') {
        if (parmDetail.items?.schema?.$ref) {
          // 设置方法内部实体名称
          const name = setEntityName(parmDetail.items?.schema?.$ref);
          bindEntity(parmDetail.items?.schema?.$ref);
          parmDetail.type = name + '[]';
        } else {
          parmDetail.type = 'any[]';
        }
      } else if (parmDetail?.type === 'file') {
        parmDetail.type = 'File';
      }

      // 绑定实体
      if (parmDetail?.schema?.$ref) {
        // 找寻该实体,并加入处理
        const name = setEntityName(parmDetail.schema?.$ref);
        detail.reqEntity = name;
        parmDetail.type = name;
        bindEntity(parmDetail.schema.$ref);
      }

      // 首字母小写
      parmDetail.name = parmDetail.name.replace(/^\S/, s => s.toLowerCase());

      // 处理非必填
      if (!parmDetail.required) {
        parmDetail.name += '?';
      }
      detail.reqJson[parmDetail.name] = parmDetail.type;
    }

    // 获取返回实体
    detail.resEntity = 'any';
    if (reqDetail.responses[200].schema?.$ref) {
      // 如果实体存在就处理
      const entity_name = reqDetail.responses[200].schema.$ref.replace('#/definitions/', '');
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
  let entityName: string, entityValue: string;
  if (ref.includes('`')) {
    // 生成实体xxx<xxx>
    entityName = ref.split('`')[0];
    entityValue = ref.split('`')[1];
    // tslint:disable-next-line: one-variable-per-declaration
    let name: string = '',
      zname: string = '';
    if (entityValue) {
      zname = entityValue.substring(0, entityValue.indexOf(','));
      name = zname.includes('+') ? zname.substring(zname.lastIndexOf('+') + 1) : zname.substring(zname.lastIndexOf('.') + 1);
      bindEntity(zname.substring(zname.lastIndexOf('[') + 1));
    }

    entityName = entityName.includes('+')
      ? entityName.substring(entityName.lastIndexOf('+') + 1)
      : entityName.substring(entityName.lastIndexOf('.') + 1);
    return `${entityName}<${name ? name : 'T'}>`;
  } else {
    bindEntity(ref);
    entityName = ref.includes('+') ? ref.substring(ref.lastIndexOf('+') + 1) : ref.substring(ref.lastIndexOf('.') + 1);
    return entityName;
  }
}

function bindEntity(ref) {
  const entity = serveEntityList[ref.replace('#/definitions/', '')];
  const entityName = setEntityName(ref, true);

  if (entity) {
    const required = entity.required;
    // tslint:disable-next-line: forin
    for (const key in entity.properties) {
      const parmDetail = entity.properties[key];
      if (parmDetail?.type === 'integer') {
        parmDetail.type = 'number';
      } else if (parmDetail?.type === 'array') {
        if (parmDetail.items?.schema?.$ref) {
          // 设置方法内部实体名称
          const name = setEntityName(parmDetail.items?.schema?.$ref);
          bindEntity(parmDetail.items?.schema?.$ref);
          parmDetail.type = name + '[]';
        } else {
          parmDetail.type = 'any[]';
        }
      }

      // 绑定实体
      if (parmDetail?.schema?.$ref) {
        // 找寻该实体,并加入处理
        const name = setEntityName(parmDetail.schema?.$ref);
        parmDetail.type = name;
        bindEntity(parmDetail.schema.$ref);
      }

      if (parmDetail?.$ref) {
        // 找寻该实体,并加入处理
        const name = setEntityName(parmDetail.$ref);
        parmDetail.type = name;
        bindEntity(parmDetail.$ref);
      }

      // 处理非必填
      if (!parmDetail.required) {
        parmDetail.name += '?';
      }

      // set required
      if (!key.includes('?') && !required?.some(e => e === key)) {
        const keyValue = entity.properties[key];
        delete entity.properties[key];
        entity.properties[key + '?'] = keyValue;
      }
    }
  }

  if (!selectedEntityList.some(e => e.name === entityName)) {
    selectedEntityList.push({
      name: entityName,
      value: entity,
    });
  }

  if (!serveSelectedEntityList.some(e => e === entityName)) {
    serveSelectedEntityList.push(entityName);
  }
}

function setEntityName(ref, isEntity = false) {
  // tslint:disable-next-line: one-variable-per-declaration
  let entityName: string, entityValue: string;
  if (ref.includes('`')) {
    // 生成实体xxx<xxx>
    entityName = ref.split('`')[0];
    entityValue = ref.split('`')[1];
    // tslint:disable-next-line: one-variable-per-declaration
    let name: string = '',
      zname: string = '';
    if (entityValue) {
      zname = entityValue.substring(0, entityValue.indexOf(','));
      name = zname.includes('+') ? zname.substring(zname.lastIndexOf('+') + 1) : zname.substring(zname.lastIndexOf('.') + 1);
    }
    const hasEntity = zname.substring(zname.lastIndexOf('[') + 1);
    const entity = serveEntityList[hasEntity.replace('#/definitions/', '')];
    entityName = entityName.includes('+')
      ? entityName.substring(entityName.lastIndexOf('+') + 1)
      : entityName.substring(entityName.lastIndexOf('.') + 1);

    if (!entity && ref.includes('[')) {
      // 该请求来自实体
      if (isEntity) {
        return `${entityName}`;
      }
      return `${entityName}[]`;
    } else {
      return `${entityName}<${name ? name : 'T'}>`;
    }
  } else {
    entityName = ref.includes('+') ? ref.substring(ref.lastIndexOf('+') + 1) : ref.substring(ref.lastIndexOf('.') + 1);
    return entityName;
  }
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
