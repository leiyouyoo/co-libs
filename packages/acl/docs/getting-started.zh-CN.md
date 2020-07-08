---
order: 1
title: 开始使用
type: Documents
---

ACL 全称叫访问控制列表（Access Control List），是一种非常简单的基于角色权限控制方式。一个完全独立 `@co/acl` 模块。

## 如何运行

内部实际是一个 `ACLService` 它提供一套基于用户身份权限服务类。为了更好的编码体验 co-libs 有多处组件或模块也依赖于它，例如：`st`、`MenuService` 等，并且这些会以 `acl` 属性的形式表现。因此，当遇到 `acl` 属性都表示 [can](#ACLCanType) 方法的**参数值**。

## 如何使用

安装 `@co/acl` 依赖包：

```bash
yarn add @co/acl
```

导入 `DelonACLModule` 模块：

```typescript
import { DelonACLModule } from '@co/acl';

@NgModule({
  imports: [
    DelonACLModule.forRoot()
  ]
})
export class AppModule { }
```

## API

### 参数

| 参数 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[guard_url]` | `string` | 路由守卫失败后跳转 | `/403` | ✅ |
| `[preCan]` | `(roleOrAbility: ACLCanType) => ACLType` | `can` 执行前回调 | - | ✅ |

> 可以通过[全局配置](/docs/global-config)覆盖它们。

### ACLService

| 方法 | 说明 |
|----|----|
| `[change]` | 监听ACL变更通知 |
| `[data]` | 获取所有ACL数据 |
| `setFull(val: boolean)` | 标识当前用户为全量，即不受限 |
| `set(value: ACLType)` | 设置当前用户角色或权限能力（会先清除所有） |
| `setRoles(roles: string[])` | 设置当前用户角色（会先清除所有） |
| `setAbilities(abilities: (number | string)[])` | 设置当前用户权限能力（会先清除所有） |
| `setJobs(jobs: (string)[])` | 设置当前用户职务（会先清除所有） |
| `setPositions(positions: (string)[])` | 设置当前用户职位（会先清除所有） |
| `setOrganizationUnits(organizationUnits: (string)[])` | 设置当前用户所在组织（会先清除所有） |
| `add(value: ACLType)` | 为当前用户增加角色或权限能力 |
| `attachRoles(roles: string[])` | 为当前用户附加角色 |
| `attachJobs(jobs: string[])` | 为当前用户附加职务 |
| `attachPositions(positions: string[])` | 为当前用户附加职位 |
| `attachOrganizationUnits(organizationUnits: string[])` | 为当前用户附加组织 |
| `attachAbilities(abilities: (string)[])` | 为当前用户附加权限 |
| `removeRoles(roles: string[])` | 为当前用户移除角色 |
| `removeAbilities(abilities: (string)[])` | 为当前用户移除权限 |
| `removeJobs(jobs: (string)[])` | 为当前用户移除职务 |
| `removePositions(positions: (string)[])` | 为当前用户移除职位 |
| `removeOrganizationUnits(organizationUnits: (string)[])` | 为当前用户移除组织 |
| `can(roleOrAbility: ACLCanType)` | 当前用户是否有对应角色 |
| `canAbility(ability: ACLCanType)` | 当前用户是否有对应权限点 |

### ACLCanType

```ts
type ACLCanType = number | number[] | string | string[] | ACLType
```

### ACLType

| 属性 | 类型 | 说明 | 默认 |
|----|----|----|----|
| `[roles]` | `string[]` | 角色 | - |
| `[jobs]` | `string[]` | 职务 | - |
| `[positions]` | `string[]` | 职位 | - |
| `[organizationUnits]` | `string[]` | 组织结构 | - |
| `[abilities]` | `string[]` | 权限点 | - |
| `[mode]` | `allOf, oneOf` | `allOf` 表示必须满足所有权限数组算有效<br>`oneOf` 表示只须满足权限数组中的一项算有效 | `oneOf` |
| `[except]` | `boolean` | 是否取反，即结果为 `true` 时表示未授权 | `false` |
