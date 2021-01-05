import { strings } from '@angular-devkit/core';

import { apply, chain, MergeStrategy, mergeWith, move, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import axios from 'axios';
import { groupBy } from 'lodash';
import { cloneDeep } from 'lodash';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.

// 生成文件名
let fileName = '';

// 用于头部引用 import { FCMBatchCreateAttachmentInput } ../types
let itemExportEntityName: any = [];

// 用于生成请求方法
let itemExportEntity: any = [];

// 用于.types.ts文件导出的文件名
let exportFileNameList: any = [];

// 用于 .types.ts生成的实体
let exportAllTypeEntity: any = [];

// 服务器返回的数据
let serviceResData: any = [];

export function buildCOSwagger(options: any): Rule {
  return async (tree: Tree) => {
    console.log('生成服务启动,生成中...');
    // 路由
    let filePath = process.cwd();
    if (!options.path) {
      console.log('当前路径' + filePath);
      if (filePath.includes('apps')) {
        filePath = filePath.substring(filePath.lastIndexOf('apps'));
        options.path = filePath;
      } else if (filePath.includes('packages\\cds')) {
        filePath = filePath.substring(filePath.lastIndexOf('packages'));
        options.path = filePath;
      } else {
        options.path = `src\\app\\services\\${options.name}`;
      }
    }

    options.path = options.path.toLowerCase();
    console.log('生成路径' + options.path);

    // 根路径文件名
    fileName = options.name;
    // 接口数据获取并解析
    const response = await getSwaggerData(options, tree)();
    console.log('数据解析完毕');
    [`${options.path}/index.ts`, `${options.path}/public_api.ts`, `${options.path}/${fileName.toLowerCase()}.types.ts`]
      .filter(p => tree.exists(p))
      .forEach(p => tree.delete(p));

    // 导出模板

    let html = '';
    for (let data of exportFileNameList) {
      data = strings.dasherize(data);
      data += '.service';
      html += `export * from './${data}';\r\n`;
    }
    console.log('导出模板');
    const index_ts = mergeWith(
      apply(url('./index_files'), [
        template({
          ...strings,
          ...{
            name: fileName,
            fileName: fileName,
            serviceList: html,
            entity: exportAllTypeEntity,
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
    serviceResData = res.data;
    exportAllTypeEntity = [];
    // 存实体
    saveEntity(res.data.definitions || serviceResData?.components.schemas);

    // 接口分组
    let apiGroup = setApiGroup();

    // 定义生成Tree函数
    const chainArr: any[] = [];

    // tslint:disable-next-line: forin
    for (const apiItemName in apiGroup) {
      exportFileNameList.push(strings.dasherize(apiItemName));
      itemExportEntity = [];
      itemExportEntityName = [];
      setSwaggerRequest(apiGroup[apiItemName]);

      // 查询更改并替换
      const path = `${options.path}/${strings.dasherize(apiItemName)}.service.ts`;
      if (tree.exists(path)) {
        tree.delete(path);
      }

      // 给导出加上前缀
      itemExportEntityName.map(e => {
        e = fileName + e;
      });

      for (var inx in itemExportEntityName) {
        itemExportEntityName[inx] = fileName + itemExportEntityName[inx];
      }

      chainArr.push(
        mergeWith(
          apply(url('./files'), [
            template({
              ...strings,
              ...{
                name: apiItemName,
                baseName: apiItemName,
                fileName: fileName,
                itemExportEntityName: itemExportEntityName,
                entityList: itemExportEntity,
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

function setApiGroup() {
  // 把Object 转 Array
  const apiArr: any = [];
  // tslint:disable-next-line: forin
  for (const a in serviceResData.paths) {
    apiArr.push({
      url: a,
      api: serviceResData.paths[a],
      type: Object.keys(serviceResData.paths[a])[0],
    });
  }

  // 根据服务位置来分组
  return groupBy(apiArr, item => item.api[Object.keys(item.api)[0]].tags[0]);
}

// reqList 分组后的列表
function setSwaggerRequest(reqList: any) {
  for (const detail of reqList) {
    // api接口内容详情
    let entity: any = {};
    entity.type = detail.type;
    entity.api = detail.api;
    const reqDetail = detail.api[detail.type];
    if (!reqDetail.parameters) {
      reqDetail.parameters = [];
    }

    if (detail.type === 'post' && reqDetail.parameters) {
      if (reqDetail.parameters[0]?.in === 'formData') {
        entity.type = 'form';
      }
    }

    entity.reqJson = {};

    // 配置参数位置
    for (const parmDetail of reqDetail.parameters) {
      // 先处理类型
      if (parmDetail?.type === 'integer') {
        parmDetail.type = 'number';
      } else if (parmDetail?.type === 'array') {
        if (parmDetail.items?.schema?.$ref) {
          // 设置方法内部实体名称
          const name = setEntityName(parmDetail.items?.schema?.$ref);
          parmDetail.type = name + '[]';
        } else {
          parmDetail.type = 'any[]';
        }
      } else if (parmDetail?.type === 'file') {
        parmDetail.type = 'File';
      } else if (parmDetail?.type === 'boolean') {
        parmDetail.type = 'boolean';
      }

      // 绑定实体
      if (parmDetail?.schema?.$ref) {
        // 找寻该实体,并加入处理
        const name = setEntityName(parmDetail.schema.$ref, true, true);
        entity.reqEntity = name;
        bindEntity(parmDetail?.schema?.$ref);
        parmDetail.type = fileName + name;
      }

      if (parmDetail?.$ref) {
        // 找寻该实体,并加入处理
        const name = setEntityName(parmDetail.$ref, true, true);
        entity.reqEntity = name;
        bindEntity(parmDetail?.$ref);
        parmDetail.type = fileName + name;
      }

      // 首字母小写
      parmDetail.name = parmDetail?.name?.replace(/^\S/, s => s.toLowerCase());

      // 处理非必填
      if (!parmDetail.required) {
        parmDetail.name += '?';
      }

      entity.reqJson[parmDetail.name] = parmDetail.type;
      entity.name = parmDetail.name;
    }

    // 获取返回实体
    entity.resEntity = 'any';
    if (reqDetail.responses[200].schema?.$ref) {
      // 如果实体存在就处理
      const name = setEntityName(reqDetail.responses[200].schema.$ref, true);
      entity.resEntity = fileName + name;
    }
    entity.url = detail.url;
    itemExportEntity.push(entity);
  }
  return reqList;
}

function saveEntity(definitions) {
  exportAllTypeEntity = [];

  for (const definition in definitions) {
    let typeEntity: any = {};
    let entityName = definition;
    let isT = false;
    if (entityName.includes('`')) {
      isT = true;
      let inx = entityName.substring(entityName.indexOf('`') + 1, entityName.indexOf('`') + 2);
      entityName = definition.split('`')[0] + inx + '<T>';
    }
    typeEntity.name = entityName.includes('+')
      ? entityName.substring(entityName.lastIndexOf('+') + 1)
      : entityName.substring(entityName.lastIndexOf('.') + 1);

    // 找到该实体
    let properties = cloneDeep(definitions[definition].properties);
    for (const proper in properties) {
      // 先处理类型
      let properItem: any = properties[proper];
      if (properItem?.type === 'integer') {
        properItem.type = 'number';
      } else if (properItem?.type === 'array') {
        if (properItem.items?.$ref) {
          // 设置方法内部实体名称
          const name = setEntityName(properItem.items.$ref);
          let childIsT = false;
          if (properItem.items.$ref.includes('`')) {
            childIsT = true;
          }
          bindEntity(properItem.items.$ref, true, childIsT);
          if (isT) {
            properItem.type = 'T[]';
          } else if (childIsT) {
            properItem.type = fileName + name + '<any>[]';
          } else {
            properItem.type = fileName + name + '[]';
          }
        } else {
          properItem.type = 'any[]';
        }
      } else if (properItem?.type === 'file') {
        properItem.type = 'File';
      } else if (properItem?.type === 'boolean') {
        properItem.type = 'boolean';
      }

      // 绑定实体
      else if (properItem?.schema?.$ref) {
        // 找寻该实体,并加入处理
        const name = setEntityName(properItem.schema.$ref, true, true);
        bindEntity(properItem?.schema?.$ref);
        properItem.type = fileName + name;
      } else if (properItem?.$ref) {
        // 找寻该实体,并加入处理
        const name = setEntityName(properItem.$ref, true, true);
        bindEntity(properItem?.$ref);
        properItem.type = fileName + name;
      }
    }

    typeEntity.description = definitions[definition].description;
    typeEntity.properties = properties;

    if (!exportAllTypeEntity?.some(e => e.name === typeEntity.name)) {
      exportAllTypeEntity.push(typeEntity);
    }
  }
}

function setEntityName(ref, res = false, showAny = false) {
  let firstName: string, thenName: string;

  if (ref.includes('`')) {
    let inx = ref.substring(ref.indexOf('`') + 1, ref.indexOf('`') + 2);
    firstName = ref.split('`')[0];
    thenName = ref.split('`')[1];
    firstName = firstName.substring(firstName.lastIndexOf('.') + 1);
    firstName = firstName + inx;
    thenName = thenName.substring(0, thenName.indexOf(','));
    thenName = thenName.substring(thenName.lastIndexOf('.') + 1);

    if (res && showAny) {
      return `${firstName}<any>`;
    }

    if (res) {
      if (!itemExportEntityName.includes(firstName)) {
        itemExportEntityName.push(firstName);
      }

      if (!itemExportEntityName.includes(thenName)) {
        itemExportEntityName.push(thenName);
      }

      return `${firstName}<${fileName + thenName}>`;
    }
    return firstName;
  } else {
    firstName = ref.includes('+') ? ref.substring(ref.lastIndexOf('+') + 1) : ref.substring(ref.lastIndexOf('.') + 1);

    if (res) {
      if (!itemExportEntityName.includes(firstName)) {
        itemExportEntityName.push(firstName);
      }
    }

    return firstName;
  }
}

function bindEntity(ref, addFileTypes = false, isT = false) {
  let entityName = setEntityName(ref);

  const entity =
    (serviceResData.definitions && serviceResData.definitions[ref?.replace('#/definitions/', '')]) || serviceResData?.components.schemas;
  if (entity) {
    entity.name = entityName;
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
          bindEntity(parmDetail.items?.schema?.$ref, addFileTypes);

          if (addFileTypes && isT) {
            parmDetail.type = 'T[]';
          } else {
            parmDetail.type = fileName + name + '[]';
          }
        } else {
          parmDetail.type = 'any[]';
        }
      }

      // 绑定实体
      if (parmDetail?.schema?.$ref) {
        // 找寻该实体,并加入处理
        const name = setEntityName(parmDetail.schema?.$ref);
        parmDetail.type = fileName + name;
        bindEntity(parmDetail.schema.$ref, addFileTypes);
      }

      if (parmDetail?.$ref) {
        // 找寻该实体,并加入处理
        const name = setEntityName(parmDetail.$ref);
        parmDetail.type = fileName + name;
        bindEntity(parmDetail.$ref, addFileTypes);
      }

      // 处理非必填
      if (!parmDetail.required) {
        if (parmDetail.name) {
          parmDetail.name += '?';
        }
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
  if (isT) {
    entity.name += '<T>';
  }

  if (!exportAllTypeEntity.some(e => e.name === entityName) && addFileTypes) {
    exportAllTypeEntity.push(entity);
  }

  let firstName: string, thenName: string;
  if (ref.includes('`')) {
    let inx = ref.substring(ref.indexOf('`') + 1, ref.indexOf('`') + 2);
    firstName = ref.split('`')[0];
    thenName = ref.split('`')[1];
    firstName = firstName.substring(firstName.lastIndexOf('.') + 1);
    firstName = firstName + inx;
    thenName = thenName.substring(0, thenName.indexOf(','));
    thenName = thenName.substring(thenName.lastIndexOf('.') + 1);

    if (!itemExportEntityName.some(e => e === firstName)) {
      itemExportEntityName.push(firstName);
    }

    if (!itemExportEntityName.some(e => e === thenName)) {
      if (exportAllTypeEntity.some(z => z.name === 'thenName')) {
        itemExportEntityName.push(thenName);
      }
    }
  } else {
    firstName = ref.includes('+') ? ref.substring(ref.lastIndexOf('+') + 1) : ref.substring(ref.lastIndexOf('.') + 1);
    if (!itemExportEntityName.some(e => e === firstName)) {
      itemExportEntityName.push(firstName);
    }
  }
}
