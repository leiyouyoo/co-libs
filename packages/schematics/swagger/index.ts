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
import { getWorkspace } from '@schematics/angular/utility/config';
import axios from 'axios';
import { groupBy } from 'lodash';
import { idText } from 'typescript';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.

let serveEntityList: any = [];
const selectedEntityList: any = [];
let serviceList: any = [];
let serveSelectedEntityList: any = [];
let entityTitle = '';
export function buildCOSwagger(options: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    console.log('loading....');
    entityTitle = options.url.substring(options.url.indexOf('swagger/') + 8, options.url.lastIndexOf('/'));
    const workspace = getWorkspace(tree);
    if (!options.project) {
      throw new SchematicsException('Option (project) is required.');
    }

    const projectName = options.project as string;
    const project = workspace.projects[projectName];

    // 路由
    let requireUrl = process.cwd();
    if (!options.path) {
      if (requireUrl.includes('apps')) {
        requireUrl = requireUrl.substring(requireUrl.lastIndexOf('apps'));
        options.path = requireUrl;
        console.log('生成路径' + options.path);
      } else {
        options.path = `${project.sourceRoot}/`;
      }
    }

    [`${options.path}/index.ts`, `${options.path}/public_api.ts`, `${options.path}/${options.name}.types.ts`]
      .filter(p => tree.exists(p))
      .forEach(p => tree.delete(p));

    // 导出模板
    let html = '';
    for (let msg of serviceList) {
      msg = strings.dasherize(msg);
      msg += '.service';
      html += `export * from './${msg}';\r\n`;
    }

    const response = await getSwaggerData(options, tree)();

    const index_ts = mergeWith(
      apply(url('./index_files'), [
        template({
          ...strings,
          'if-flat': (s: string) => (options.flat ? '' : s),
          ...{
            entityTitle,
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

function getSwaggerData(options, tree: Tree): () => Promise<any[]> {
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
    let i = 0;
    // tslint:disable-next-line: forin
    for (const na in group) {
      if (options.entity && options.entity !== na) {
        continue;
      }

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

      const name = strings.dasherize(na);
      const path = `${options.path}/${name}.service.ts`;

      if (tree.exists(path)) {
        tree.delete(path);
      }

      chainArr.push(
        mergeWith(
          apply(url('./files'), [
            template({
              ...strings,
              'if-flat': (s: string) => (options.flat ? '' : s),
              ...{
                name: na,
                pageName: options.name,
                entityTitle,
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
        parmDetail.type = entityTitle + name;
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
        detail.resEntity = entityTitle + entityName;
      }
    }
  }

  return reqList;
}

function setResponseName(ref) {
  // tslint:disable-next-line: one-variable-per-declaration
  let entityName: string, entityValue: string;
  if (ref.includes('`')) {
    // 泛型,生成实体xxx<xxx>
    entityName = ref.split('`')[0];
    entityValue = ref.split('`')[1];
    // tslint:disable-next-line: one-variable-per-declaration
    let name: string = '',
      zname: string = '';

    // 处理泛型中某实体
    zname = entityValue.substring(0, entityValue.indexOf(','));
    name = zname.includes('+') ? zname.substring(zname.lastIndexOf('+') + 1) : zname.substring(zname.lastIndexOf('.') + 1);
    bindEntity(zname.substring(zname.lastIndexOf('[') + 1));

    // 处理泛型实体
    entityName = entityName.includes('+')
      ? entityName.substring(entityName.lastIndexOf('+') + 1)
      : entityName.substring(entityName.lastIndexOf('.') + 1);
    setGeneric(ref, `${entityName}`, true);
    return `${entityName}<${name ? entityTitle + name : 'any'}>`;
  } else {
    bindEntity(ref);
    entityName = ref.includes('+') ? ref.substring(ref.lastIndexOf('+') + 1) : ref.substring(ref.lastIndexOf('.') + 1);
    return entityName;
  }
}

function setGeneric(ref, genericName = '', isGeneric = false, isT = false) {
  const entity = serveEntityList[ref.replace('#/definitions/', '')];
  if (isGeneric && entity) {
    // tslint:disable-next-line: forin
    for (const key in entity.properties) {
      const parmDetail = entity.properties[key];
      parmDetail.type = 'any';
      if (parmDetail?.type === 'integer') {
        parmDetail.type = 'number';
      } else if (parmDetail?.type === 'array') {
        parmDetail.type = 'any[]';
      }
    }

    if (!selectedEntityList.some(e => e.name === genericName || e.name === genericName + '<T>')) {
      selectedEntityList.push({
        name: genericName,
        value: entity,
      });
    } else {
      let className = genericName;
      if (isT) {
        className = className + '<T>';
        const data: any = selectedEntityList.find(e => e.name === genericName);
        if (data) {
          data.name = className;
          data.value = entity;
        }
      }
    }

    if (!serveSelectedEntityList.some(e => e === genericName)) {
      serveSelectedEntityList.push(genericName);
    }
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
        parmDetail.type = entityTitle + name;
        bindEntity(parmDetail.schema.$ref);
      }

      if (parmDetail?.$ref) {
        // 找寻该实体,并加入处理
        const name = setEntityName(parmDetail.$ref);
        parmDetail.type = entityTitle + name;
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

  // 用于生成实体文件
  if (!selectedEntityList.some(e => e.name === entityName || e.name === entityName + '<T>')) {
    selectedEntityList.push({
      name: entityName,
      value: entity,
    });
  }

  // 用于引用
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
    const entityRef = zname.substring(zname.lastIndexOf('[') + 1);
    const entity = serveEntityList[entityRef.replace('#/definitions/', '')];
    if (entityRef && isEntity) {
      setGeneric(entityRef, `${name}`, true);
    }

    entityName = entityName.includes('+')
      ? entityName.substring(entityName.lastIndexOf('+') + 1)
      : entityName.substring(entityName.lastIndexOf('.') + 1);
    setGeneric(ref, `${entityName}`, true, true);

    if (!entity && ref.includes('[')) {
      // 该请求来自实体
      if (isEntity) {
        return `${entityName}`;
      }
      return `${entityName}<any>`;
    } else {
      if (entityRef && isEntity) {
        return `${entityName}`;
      }
      return `${entityName}<${name ? entityTitle + name : 'any'}>`;
    }
  } else {
    entityName = ref.includes('+') ? ref.substring(ref.lastIndexOf('+') + 1) : ref.substring(ref.lastIndexOf('.') + 1);
    return entityName;
  }
}
