---
order: 3
title: 粒度控制
type: Documents
---

## 写在前面

很多时候需要对某个按钮进行权限控制，`@co/acl` 提供一个 `acl` 指令，可以利用角色或权限点对某个按钮、表格、列表等元素进行权限控制。

## 原理

`[co-acl]` 默认会在目标元素上增加一个 `acl__hide` 样式，利用 `display: none` 来隐藏未授权元素，它是一个简单、又高效的方式。

以此相对应的 `*coAclIf` 是一个结构型指令，它类似 `ngIf` 在未授权时会不渲染该元素。**注：** 为了保持简洁它并不支持 `co-acl-ability` 权限点配置。


## 示例

### 角色

按钮必须拥有 admin 角色显示。

```html
<button [coAcl]="'r:admin'"></button>
<button *coAclIf="'r:admin'"></button>
```

按钮必须拥有 user 或 manage 角色显示。

```html
<button [coAcl]="['r:user', 'r:manage']"></button>
<button *coAclIf="['r:user', 'r:manage']"></button>
```

按钮必须拥有 user 和 manage 角色显示。

```html
<button [coAcl]="{ role: ['r:user', 'r:manage'], mode: 'allOf' }"></button>
<button *coAclIf="{ role: ['r:user', 'r:manage'], mode: 'allOf' }"></button>
```

当拥有 user 角色显示文本框，未授权显示文本。

```html
<input nz-input *coAclIf="'r:user'; else unauthorized">
<ng-template #unauthorized>{{user}}</ng-template>
```

使用 `except` 反向控制，当未拥有 user 角色时显示。

```html
<ng-template [coAclIf]="r:role" co-except>
  <input nz-input>
</ng-template>
```


### 权限点

按钮必须拥有 crm.customer.edit 权限点显示。

```html
<button [coAcl]="a:crm.customer.edit"></button>
```

acl 权限点可使用以下写法。

```html
<button co-acl [co-acl-ability]="'a:crm.customer.edit'"></button>
```

使用 `mode: 'allOf'` 表示必须同时拥有。

- `oneOf` 表示只须满足角色或权限点数组中的一项算有效（默认）
- `allOf` 表示必须满足所有角色或权限点数组算有效

按钮必须拥有 `crm.customer` 和 `crm.customer` 权限点时显示。

```html
<button [coAcl]="{ abilities: ['a:crm.customer.edit','a:crm.customer.print'], mode: 'allOf' }"></button>
```

**字符串型权限点**

检查权限是通过 `can` 方法，通过[全局配置](/docs/global-config) `acl.preCan` 方法，可以利用该方法来实现一个字符串区分权限点。

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  acl: {
    preCan: (roleOrAbility) => {
      const str = roleOrAbility.toString();
      return str.startsWith('a:') ? { abilities: [ str ] } : null;
    }
  }
};
```

因此，当传递一个带有 `a:` 开头的字符串会被认为这是一个权限点，例如：

```html
<button acl="a:platform.user.edit"></button>
```



### 职务

按钮必须拥有 j:总经理 职务时显示。

```html
<button co-acl="j:总经理"></button>
```

co-acl 职务权限控制可使用以下写法。

```html
<button [co-acl]="'j:总经理'"></button>
```

使用 `mode: 'allOf'` 表示必须同时拥有。

- `oneOf` 表示只须满足角色或权限点数组中的一项算有效（默认）
- `allOf` 表示必须满足所有角色或权限点数组算有效

按钮必须拥有 职务`总经理` 和 所在部门是 `深圳公司` 时显示。

```html
<button [coAcl]="{ jobs: ['j:总经理'],organizationUnits:['o:深圳公司'], mode: 'allOf' }"></button>
```

**字符串型权限点**

检查权限是通过 `can` 方法，通过[全局配置](/docs/global-config) `acl.preCan` 方法，可以利用该方法来实现一个字符串区分职务权限。

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  acl: {
    preCan: (roleOrAbility) => {
      const str = roleOrAbility.toString();
      return str.startsWith('j.') ? { organizationUnits: [ str ] } : null;
    }
  }
};
```

因此，当传递一个带有 `j:` 开头的字符串会被认为这是一个职务权限，例如：

```html
<button acl="j:总经理"></button>
```



### 职位

按钮必须拥有 p:深圳公司总经理 职位权限显示。

```html
<button co-acl="p:深圳公司总经理"></button>
```

co-acl 职位权限可使用以下写法。

```html
<button [co-acl]="'p:深圳公司总经理'"></button>
```

使用 `mode: 'allOf'` 表示必须同时拥有。

- `oneOf` 表示只须满足职位数组中的一项算有效（默认）
- `allOf` 表示必须满足所有算有效

按钮必须拥有 职位`深圳公司总经理` 和 角色`USER` 权限点时显示。

```html
<button [coAcl]="{ positions: ['p:深圳公司总经理'],roles: ['r:USER'], mode: 'allOf' }"></button>
```


**字符串型权限点**

检查权限是通过 `can` 方法，通过[全局配置](/docs/global-config) `acl.preCan` 方法，可以利用该方法来实现一个字符串区分角色或权限点。

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  acl: {
    preCan: (permissions) => {
      const str = permissions.toString();
      return str.startsWith('p:') ? { ability: [ str ] } : null;
    }
  }
};
```

因此，当传递一个带有 `p:` 开头的字符串会被认为这是一个职位权限点，例如：

```html
<button acl="p:深圳公司总经理"></button>
```




### 组织结构

用户必须在组织结构 o:深圳公司 下才显示。

```html
<button co-acl="o:深圳公司"></button>
```

co-acl 组织权限可使用以下写法。

```html
<button [co-acl]="'o:深圳公司'"></button>
```

使用 `mode: 'allOf'` 表示必须同时拥有。

- `oneOf` 表示只须满足职位数组中的一项算有效（默认）
- `allOf` 表示必须满足所有算有效

按钮必须在组织`深圳公司`下 和 角色`USER` 时显示。

```html
<button [coAcl]="{ organizationUnits: ['o:深圳公司'],roles: ['r:USER'], mode: 'allOf' }"></button>
```


**字符串型权限点**

检查权限是通过 `can` 方法，通过[全局配置](/docs/global-config) `acl.preCan` 方法，可以利用该方法来实现一个字符串区分组织权限。

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  acl: {
    preCan: (permissions) => {
      const str = permissions.toString();
      return str.startsWith('o:') ? { ability: [ str ] } : null;
    }
  }
};
```

因此，当传递一个带有 `o:` 开头的字符串会被认为这是一个组织权限点，例如：

```html
<button acl="o:深圳公司"></button>
```


## API

### *coAclIf

参数      | 说明            | 类型     | 默认值
----------|----------------|----------|-------
`[coAclIf]`  | `can` 方法参数体   | `ACLCanType` | -
`[coAclIfThen]` | 已授权时显示模板 | `TemplateRef<void> | null` | -
`[coAclIfElse]` | 未授权时显示模板 | `TemplateRef<void> | null` | -
`[coExcept]` | 未授权时显示 | `boolean` | `false`
