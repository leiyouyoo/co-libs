---
order: 100
title: 更新日志
type: Other
---

NG-ALAIN 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

* 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
* 次版本号：每月发布一个带有新特性的向下兼容的版本。
* 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

## [9.3.2](https://github.com/ng-alain/delon/compare/9.3.1...9.3.2) (2020-06-01)

### Scaffold

* 修复若干暗黑主题示例页样式不正确 ([#1682](https://github.com/ng-alain/ng-alain/pull/1682/files), [#1685](https://github.com/ng-alain/ng-alain/pull/1685/files))

### Bug Fixes

* **abc:page-header:** 修复复用路由下无法注销 `event` 订阅问题 ([#933](https://github.com/ng-alain/delon/issues/933)) ([0080efd](https://github.com/ng-alain/delon/commit/0080efdfe32e2fa23900562c11c386e3d76bd31b))
* **cli:** 修复 `ng-update` 若干细节 ([#934](https://github.com/ng-alain/delon/issues/934)) ([8f26c71](https://github.com/ng-alain/delon/commit/8f26c71e085715c569185c72bfa6b3a777047f9c))
* **form:** 同步 `select`、`tree-select` 两个小部件的新属性 ([#935](https://github.com/ng-alain/delon/issues/935)) ([aa6de23](https://github.com/ng-alain/delon/commit/aa6de23b98ec40a886fa5acbdbc7629ff5453499))
* **form:** 修复暗黑主题可选颜色 ([#941](https://github.com/ng-alain/delon/issues/941)) ([50d1617](https://github.com/ng-alain/delon/commit/50d161782db78872f504b35570704cf4e1739a7a)), closes [#939](https://github.com/ng-alain/delon/issues/939)


