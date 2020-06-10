---
order: 91
title:
  en-US: Angular Style Guide
  zh-CN: Angular开发规范指南
type: Styleguide
---


# 风格指南

如果你正在寻找关于 Angular 语法、约定和应用组织结构的官方指南，那你就来对了。
本风格指南介绍了提倡的约定，更重要的是，解释了为什么。

{@a toc}

## 风格指南的用词

每个指导原则都会描述好的或者坏的做法，所有指导原则都用同样的风格描述。

指导原则中使用的词汇用来表明推荐的程度。

<div class="s-rule do">

**坚持**意味着总是应该遵循的约定。
说*"总是"*可能显得有点绝对，应该*"总是"*遵循的指导原则非常少，不过，只有遇到极不寻常的情况才能打破*坚持*的原则。

</div>

<div class="s-rule consider">
**考虑**表示通常应该遵循的指导原则。
如果你能完全理解指导原则背后的含义，并且有很好的理由违反它，那就改吧。但是请保持一致。
</div>

<div class="s-rule avoid">

**避免**表示你绝对不应该做的事。需要*避免*的代码范例会有明显的红色标题。

</div>

<div class="s-why">

**为何？**会给出随后的建议的理由。

</div>

## 文件结构约定

在一些代码例子中，有的文件有一个或多个相似名字的配套文件。（例如 hero.component.ts 和 hero.component.html）。

本指南将会使用像 `hero.component.ts|html|css|spec` 的简写来表示上面描述的多个文件，目的是保持本指南的简洁性，增加描述文件结构时的可读性。
{@a single-responsibility}


## 单一职责


对所有的组件、服务等等应用<a href="https://wikipedia.org/wiki/Single_responsibility_principle" target="_blank"><i>单一职责原则</i> (SRP)</a>。这样可以让应用更干净、更易读、更易维护、更易测试。

{@a 01-01}


### 单一规则


#### 风格 01-01

<div class="s-rule do">

**坚持**每个文件只定义一样东西（例如服务或组件）。

</div>

<div class="s-rule consider">

**考虑**把文件大小限制在 400 行代码以内。

</div>

<div class="s-why">

**为何？**单组件文件非常容易阅读、维护，并能防止在版本控制系统里与团队冲突。

</div>

<div class="s-why">

**为何？**单组件文件可以防止一些隐蔽的程序缺陷，当把多个组件合写在同一个文件中时，可能造成共享变量、创建意外的闭包，或者与依赖之间产生意外耦合等情况。

</div>

<div class="s-why-last">

**为何？**单独的组件通常是该文件默认的导出，可以用路由器实现按需加载。

</div>

最关键的是，可以让代码更加可复用、更容易阅读，减少出错的可能性。


下面的*负面*例子定义了 `AppComponent`，它来引导应用程序，定义了 `Hero` 模型对象，并从服务器加载了英雄 ... 所有都在同一个文件。 *不要这么做*。

<code-example path="styleguide/src/01-01/app/heroes/hero.component.avoid.ts" header="app/heroes/hero.component.ts">

</code-example>

最好将组件及其支撑部件重新分配到独立的文件。

<code-tabs>

  <code-pane header="main.ts" path="styleguide/src/01-01/main.ts">

  </code-pane>

  <code-pane header="app/app.module.ts" path="styleguide/src/01-01/app/app.module.ts">

  </code-pane>

  <code-pane header="app/app.component.ts" path="styleguide/src/01-01/app/app.component.ts">

  </code-pane>

  <code-pane header="app/heroes/heroes.component.ts" path="styleguide/src/01-01/app/heroes/heroes.component.ts">

  </code-pane>

  <code-pane header="app/heroes/shared/hero.service.ts" path="styleguide/src/01-01/app/heroes/shared/hero.service.ts">

  </code-pane>

  <code-pane header="app/heroes/shared/hero.model.ts" path="styleguide/src/01-01/app/heroes/shared/hero.model.ts">

  </code-pane>

  <code-pane header="app/heroes/shared/mock-heroes.ts" path="styleguide/src/01-01/app/heroes/shared/mock-heroes.ts">

  </code-pane>

</code-tabs>


随着应用程序的成长，本法则会变得越来越重要。

<a href="#toc">回到顶部</a>

{@a 01-02}


### 小函数


#### 风格 01-02

<div class="s-rule do">

**坚持**定义简单函数

</div>

<div class="s-rule consider">

**考虑**限制在 75 行之内。

</div>

<div class="s-why">

**为何？**简单函数更易于测试，特别是当它们只做一件事，只为一个目的服务时。

</div>

<div class="s-why">

**为何？**简单函数促进代码重用。

</div>

<div class="s-why">

**为何？**简单函数更易于阅读。

</div>

<div class="s-why">

**为何？**简单函数更易于维护。

</div>

<div class="s-why-last">

**为何？**小函数可避免易在大函数中产生的隐蔽性错误，例如与外界共享变量、创建意外的闭包或与依赖之间产生意外耦合等。

</div>

<a href="#toc">回到顶部</a>

## Naming

## 命名


命名约定对可维护性和可读性非常重要。本指南为文件名和符号名推荐了一套命名约定。

{@a 02-01}

### 总体命名原则


#### 风格 02-01

<div class="s-rule do">

**坚持**所有符号使用一致的命名规则。

</div>

<div class="s-rule do">

**坚持**遵循同一个模式来描述符号的特性和类型。推荐的模式为 `feature.type.ts`。

</div>

<div class="s-why">

**为何？**命名约定提供了一致的方式来查找内容，让你一眼就能找到。
项目的一致性是至关重要的。团队内的一致性也很重要。整个公司的一致性会提供惊人的效率。

</div>

<div class="s-why">


**为何？**命名约定帮助你更快得找到想找的代码，也更容易理解它。

</div>

<div class="s-why-last">

**为何？**目录名和文件名应该清楚的传递它们的意图。
例如，`app/heroes/hero-list.component.ts` 包含了一个用来管理英雄列表的组件。

</div>


<a href="#toc">回到顶部</a>

{@a 02-02}


### 使用点和横杠来分隔文件名

#### Style 02-02

#### 风格 02-02

<div class="s-rule do">


**坚持** 在描述性名字中，用横杠来分隔单词。

</div>

<div class="s-rule do">

**坚持**使用点来分隔描述性名字和类型。

</div>

<div class="s-rule do">

**坚持**遵循先描述组件特性，再描述它的类型的模式，对所有组件使用一致的类型命名规则。推荐的模式为 `feature.type.ts`。

</div>

<div class="s-rule do">


**坚持**使用惯用的后缀来描述类型，包括 `*.service`、`*.component`、`*.pipe`、`.module`、`.directive`。
必要时可以创建更多类型名，但必须注意，不要创建太多。

</div>

<div class="s-why">

**为何？**类型名字提供一致的方式来快速的识别文件中有什么。

</div>

<div class="s-why">

**为何？** 类型名可以让你轻松利用编辑器或者 IDE 的模糊搜索功能找到特定文件类型。

</div>

<div class="s-why">

**为何？** 像 `.service` 这样的没有简写过的类型名字，描述清楚，毫不含糊。
像 `.srv`, `.svc`, 和 `.serv` 这样的简写可能令人困惑。

</div>

<div class="s-why-last">

**为何？**为自动化任务提供模式匹配。

</div>

<a href="#toc">回到顶部</a>

{@a 02-03}


### 符号名与文件名

#### 风格 02-03

<div class="s-rule do">

**坚持**为所有东西使用一致的命名约定，以它们所代表的东西命名。

</div>

<div class="s-rule do">

**坚持**使用大写驼峰命名法来命名类。符号名匹配它所在的文件名。

</div>

<div class="s-rule do">

**坚持**在符号名后面追加约定的类型后缀（例如 `Component`、`Directive`、`Module`、`Pipe`、`Service`）。

</div>

<div class="s-rule do">

**坚持**在符号名后面追加约定的类型后缀（例如 `.component.ts`、`.directive.ts`、`.module.ts`、`.pipe.ts`、`.service.ts`）。

</div>

<div class="s-rule do">

**坚持**在文件名后面追加约定的类型后缀（例如 `.component.ts`、`.directive.ts`、`.module.ts`、`.pipe.ts`、`.service.ts`）。

</div>

<div class="s-why">


**为何？**遵循一致的约定可以快速识别和引用不同类型的资产。

</div>

<table width="100%">

  <col width="50%">

  </col>

  <col width="50%">

  </col>

  <tr>

    <th>

      符号名

    </th>

    <th>

      文件名

    </th>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @Component({ ... })
        export class AppComponent { }
      </code-example>

    </td>

    <td>

      app.component.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @Component({ ... })
        export class HeroesComponent { }
      </code-example>

    </td>

    <td>

      heroes.component.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @Component({ ... })
        export class HeroListComponent { }
      </code-example>

    </td>

    <td>

      hero-list.component.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @Component({ ... })
        export class HeroDetailComponent { }
      </code-example>

    </td>

    <td>

      hero-detail.component.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @Directive({ ... })
        export class ValidationDirective { }
      </code-example>

    </td>

    <td>

      validation.directive.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @NgModule({ ... })
        export class AppModule
      </code-example>

    </td>

    <td>

      app.module.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @Pipe({ name: 'initCaps' })
        export class InitCapsPipe implements PipeTransform { }
      </code-example>

    </td>

    <td>

      init-caps.pipe.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @Injectable()
        export class UserProfileService { }
      </code-example>

    </td>

    <td>

      user-profile.service.ts

    </td>

  </tr>

</table>

<a href="#toc">回到顶部</a>

{@a 02-04}


### 服务名

#### 风格 02-04

<div class="s-rule do">

**坚持**使用一致的规则命名服务，以它们的特性来命名。

</div>

<div class="s-rule do">

**坚持**为服务的类名加上 `Service` 后缀。
例如，获取数据或英雄列表的服务应该命名为 `DataService` 或 `HeroService`。

有些词汇显然就是服务，比如那些以“-er”后缀结尾的。比如把记日志的服务命名为 `Logger` 就比 `LoggerService` 更好些。需要在你的项目中决定这种特例是否可以接受。
但无论如何，都要尽量保持一致。

</div>

<div class="s-why">

**为何？**提供一致的方式来快速识别和引用服务。

</div>

<div class="s-why">

**为何？**像 `Logger` 这样的清楚的服务名不需要后缀。

</div>

<div class="s-why-last">

**为何？**像 `Credit` 这样的，服务名是名词，需要一个后缀。当不能明显分辨它是服务还是其它东西时，应该添加后缀。

</div>

<table width="100%">

  <col width="50%">

  </col>

  <col width="50%">

  </col>

  <tr>

    <th>

      符号名

    </th>

    <th>

      文件名

    </th>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @Injectable()
        export class HeroDataService { }
      </code-example>

    </td>

    <td>

      hero-data.service.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @Injectable()
        export class CreditService { }
      </code-example>

    </td>

    <td>

      credit.service.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @Injectable()
        export class Logger { }
      </code-example>

    </td>

    <td>

      logger.service.ts

    </td>

  </tr>

</table>

<a href="#toc">回到顶部</a>

{@a 02-05}

### 引导


#### 风格 02-05

<div class="s-rule do">

**坚持**把应用的引导程序和平台相关的逻辑放到名为 `main.ts` 的文件里。

</div>

<div class="s-rule do">

**坚持**在引导逻辑中包含错误处理代码。

</div>

<div class="s-rule avoid">

**避免**把应用逻辑放在 `main.ts` 中，而应放在组件或服务里。

</div>

<div class="s-why">

**为何？**应用的启动逻辑遵循一致的约定。

</div>

<div class="s-why-last">

**为何？**这是从其它技术平台借鉴的常用约定。

</div>


<code-example path="styleguide/src/02-05/main.ts" header="main.ts">

</code-example>

<a href="#toc">回到顶部</a>

{@a 05-02}

### 组件选择器


#### 风格 05-02

<div class="s-rule do">

**坚持**使用*中线命名法（dashed-case）*或叫*烤串命名法（kebab-case）*来命名组件的元素选择器。

</div>

<div class="s-why-last">

**为何？**让元素名和[自定义元素](https://www.w3.org/TR/custom-elements/)规范保持一致。

</div>

<code-example path="styleguide/src/05-02/app/heroes/shared/hero-button/hero-button.component.avoid.ts" region="example" header="app/heroes/shared/hero-button/hero-button.component.ts">

</code-example>

<code-tabs>

  <code-pane header="app/heroes/shared/hero-button/hero-button.component.ts" path="styleguide/src/05-02/app/heroes/shared/hero-button/hero-button.component.ts" region="example">

  </code-pane>

  <code-pane header="app/app.component.html" path="styleguide/src/05-02/app/app.component.html">

  </code-pane>

</code-tabs>

<a href="#toc">回到顶部</a>

### 为组件添加自定义前缀

#### 风格 02-07

<div class="s-rule do">

**坚持**使用带连字符的小写元素选择器值（例如 `admin-users`）。

</div>

<div class="s-rule do">

**坚持**为组件选择器添加自定义前缀。
例如，`toh` 前缀表示 **T**our **o**f **H**eroes（英雄指南），而前缀 `admin 表示管理特性区。

</div>

<div class="s-rule do">

**坚持**使用前缀来识别特性区或者应用程序本身。

</div>

<div class="s-why">

**为何？**防止与其它应用中的组件和原生 HTML 元素发生命名冲突。

</div>

<div class="s-why">

**为何？**更容易在其它应用中推广和共享组件。

</div>

<div class="s-why-last">

**为何？**组件在 DOM 中更容易被区分出来。

</div>

<code-example path="styleguide/src/02-07/app/heroes/hero.component.avoid.ts" region="example" header="app/heroes/hero.component.ts">

</code-example>

<code-example path="styleguide/src/02-07/app/users/users.component.avoid.ts" region="example" header="app/users/users.component.ts">

</code-example>

<code-example path="styleguide/src/02-07/app/heroes/hero.component.ts" region="example" header="app/heroes/hero.component.ts">

</code-example>

<code-example path="styleguide/src/02-07/app/users/users.component.ts" region="example" header="app/users/users.component.ts">

</code-example>

<a href="#toc">回到顶部</a>

{@a 02-06}

### 指令选择器

#### 风格 02-06


<div class="s-rule do">

**坚持**使用小驼峰形式命名指令的选择器。

</div>

<div class="s-why">

**为何？**可以让指令中的属性名与视图中绑定的属性名保持一致。

</div>

<div class="s-why-last">

**为何？** Angular 的 HTML 解析器是大小写敏感的，可以识别小驼峰形式。

</div>


<a href="#toc">回到顶部</a>

{@a 02-08}

### 为指令添加自定义前缀

#### 风格 02-08

<div class="s-rule do">

**坚持**为指令的选择器添加自定义前缀（例如前缀 `toh` 来自 **T**our **o**f **H**eroes）。

</div>

<div class="s-rule do">

**坚持**用小驼峰形式拼写非元素选择器，除非该选择器用于匹配原生 HTML 属性。

</div>

<div class="s-why">

**为何？**防止名字冲突。

</div>

<div class="s-why-last">

**为何？**指令更加容易被识别。

</div>

<code-example path="styleguide/src/02-08/app/shared/validate.directive.avoid.ts" region="example" header="app/shared/validate.directive.ts">

</code-example>

<code-example path="styleguide/src/02-08/app/shared/validate.directive.ts" region="example" header="app/shared/validate.directive.ts">

</code-example>

<a href="#toc">回到顶部</a>

{@a 02-09}

### 管道名

#### 风格 02-09

<div class="s-rule do">

**坚持**为所有管道使用一致的命名约定，用它们的特性来命名。
管道类名应该使用 [UpperCamelCase](guide/glossary#case-types)（类名的通用约定），而相应的 `name` 字符串应该使用 *lowerCamelCase*。
`name` 字符串中不应该使用中线（“中线格式”或“烤串格式”）。

</div>

<div class="s-why-last">

**为何？**提供一致的方式快速识别和引用管道。

</div>

<table width="100%">

  <col width="50%">

  </col>

  <col width="50%">

  </col>

  <tr>

    <th>

      符号名

    </th>

    <th>

      文件名

    </th>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @Pipe({ name: 'ellipsis' })
        export class EllipsisPipe implements PipeTransform { }
      </code-example>

    </td>

    <td>

      ellipsis.pipe.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @Pipe({ name: 'initCaps' })
        export class InitCapsPipe implements PipeTransform { }
      </code-example>

    </td>

    <td>

      init-caps.pipe.ts

    </td>

  </tr>

</table>

<a href="#toc">回到顶部</a>

{@a 02-10}


### 单元测试文件名


#### 风格 02-10

<div class="s-rule do">

**坚持**测试规格文件名与被测试组件文件名相同。

</div>

<div class="s-rule do">

**坚持**测试规格文件名添加 `.spec` 后缀。

</div>

<div class="s-why">

**为何？**提供一致的方式来快速识别测试。

</div>

<div class="s-why-last">

**为何？**提供一个与 [karma](http://karma-runner.github.io/) 或者其它测试运行器相配的命名模式。

</div>

<table width="100%">

  <col width="50%">

  </col>

  <col width="50%">

  </col>

  <tr>

    <th>

      测试类型

    </th>

    <th>

      文件名

    </th>

  </tr>

  <tr style=top>

    <td>

      组件

    </td>

    <td>

      heroes.component.spec.ts

      hero-list.component.spec.ts

      hero-detail.component.spec.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      服务

    </td>

    <td>

      logger.service.spec.ts

      hero.service.spec.ts

      filter-text.service.spec.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      管道

    </td>

    <td>

      ellipsis.pipe.spec.ts

      init-caps.pipe.spec.ts

    </td>

  </tr>

</table>

<a href="#toc">回到顶部</a>

{@a 02-11}


### *端到端*（E2E）测试的文件名

#### 风格 02-11

<div class="s-rule do">

**坚持**端到端测试规格文件和它们所测试的特性同名，添加 `.e2e-spec` 后缀。

</div>

<div class="s-why">

**为何？**提供一致的方式快速识别端到端测试文件。

</div>

<div class="s-why-last">


**为何？**提供一个与测试运行器和构建自动化匹配的模式。

</div>

<table width="100%">

  <col width="50%">

  </col>

  <col width="50%">

  </col>

  <tr>

    <th>

      测试类型

    </th>

    <th>

      文件名

    </th>

  </tr>

  <tr style=top>

    <td>

      端到端测试

    </td>

    <td>

      app.e2e-spec.ts

      heroes.e2e-spec.ts

    </td>

  </tr>

</table>


<a href="#toc">回到顶部</a>

{@a 02-12}


### Angular *NgModule* 命名


#### 风格 02-12

<div class="s-rule do">

**坚持**为符号名添加 `Module` 后缀

</div>

<div class="s-rule do">


**坚持**为文件名添加 `.module.ts` 扩展名。

</div>

<div class="s-rule do">

**坚持**用特性名和所在目录命名模块。

</div>

<div class="s-why">

**为何？**提供一致的方式来快速标识和引用模块。

</div>

<div class="s-why">

**为何？**大驼峰命名法是一种命名约定，用来标识可用构造函数实例化的对象。

</div>

<div class="s-why-last">

**为何？**很容易就能看出这个模块是同名特性的根模块。

</div>

<div class="s-rule do">

**坚持**为 *RoutingModule* 类名添加 `RoutingModule` 后缀。

</div>

<div class="s-rule do">

**坚持**为 *RoutingModule* 的文件名添加 `-routing.module.ts` 后缀。

</div>

<div class="s-why-last">

**为何？**`RoutingModule` 是一种专门用来配置 Angular 路由器的模块。
“类名和文件名保持一致”的约定使这些模块易于发现和验证。

</div>

<table width="100%">

  <col width="50%">

  </col>

  <col width="50%">

  </col>

  <tr>

    <th>

      符号名

    </th>

    <th>

      文件名

    </th>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @NgModule({ ... })
        export class AppModule { }
      </code-example>

    </td>

    <td>

      app.module.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @NgModule({ ... })
        export class HeroesModule { }
      </code-example>

    </td>

    <td>

      heroes.module.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @NgModule({ ... })
        export class VillainsModule { }
      </code-example>

    </td>

    <td>

      villains.module.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @NgModule({ ... })
        export class AppRoutingModule { }
      </code-example>

    </td>

    <td>

      app-routing.module.ts

    </td>

  </tr>

  <tr style=top>

    <td>

      <code-example hideCopy class="no-box">
        @NgModule({ ... })
        export class HeroesRoutingModule { }
      </code-example>

    </td>

    <td>

      heroes-routing.module.ts

    </td>

  </tr>

</table>


<a href="#toc">回到顶部</a>

## 应用程序结构与 NgModule

准备一个近期实施方案和一个长期的愿景。从零开始，但要考虑应用程序接下来的路往哪儿走。


所有应用程序的源代码都放到名叫 `src` 的目录里。
所有特性区都在自己的文件夹中，带有它们自己的 NgModule。


所有内容都遵循每个文件一个特性的原则。每个组件、服务和管道都在自己的文件里。
所有第三方程序包保存到其它目录里，而不是 `src` 目录。
你不会修改它们，所以不希望它们弄乱你的应用程序。
使用本指南介绍的文件命名约定。


<a href="#toc">回到顶部</a>

{@a 04-01}

### _LIFT_


#### 风格 04-01

<div class="s-rule do">

**坚持**组织应用的结构，力求：快速定位 (`L`ocate) 代码、一眼识别 (`I`dentify) 代码、 尽量保持扁平结构 (`F`lattest) 和尝试 (`T`ry) 遵循 DRY (Do Not Repeat Yourself, 不重复自己) 原则。

</div>

<div class="s-rule do">


**坚持**四项基本原则定义文件结构，上面的原则是按重要顺序排列的。

</div>

<div class="s-why-last">

**为何？**LIFT 提供了一致的结构，它具有扩展性强、模块化的特性。因为容易快速锁定代码，提高了开发者的效率。
另外，检查应用结构是否合理的方法是问问自己：我能快速打开与此特性有关的所有文件并开始工作吗？

</div>


<a href="#toc">回到顶部</a>

{@a 04-02}


### 定位


####  风格 04-02

<div class="s-rule do">

**坚持**直观、简单和快速地定位代码。

</div>

<div class="s-why-last">

**为何？**
要想高效的工作，就必须能迅速找到文件，特别是当不知道（或不记得）文件*名*时。
把相关的文件一起放在一个直观的位置可以节省时间。
富有描述性的目录结构会让你和后面的维护者眼前一亮。

</div>


<a href="#toc">回到顶部</a>

{@a 04-03}


### 识别


#### 风格 04-03

<div class="s-rule do">

**坚持**命名文件到这个程度：看到名字立刻知道它包含了什么，代表了什么。

</div>

<div class="s-rule do">

**坚持**文件名要具有说明性，确保文件中只包含一个组件。

</div>

<div class="s-rule avoid">

**避免**创建包含多个组件、服务或者混合体的文件。

</div>

<div class="s-why-last">

**为何？**花费更少的时间来查找和琢磨代码，就会变得更有效率。
较长的文件名远胜于*较短却容易混淆的*缩写名。

</div>

<div class="alert is-helpful">

当你有一组小型、紧密相关的特性时，违反*一物一文件*的规则可能会更好，
这种情况下单一文件可能会比多个文件更容易发现和理解。注意这个例外。

</div>


<a href="#toc">回到顶部</a>

{@a 04-04}


### 扁平


#### 风格 04-04

<div class="s-rule do">

**坚持**尽可能保持扁平的目录结构。

</div>

<div class="s-rule consider">

**考虑**当同一目录下达到 7 个或更多个文件时创建子目录。

</div>

<div class="s-rule consider">

**考虑**配置 IDE，以隐藏无关的文件，例如生成出来的 `.js` 文件和 `.js.map` 文件等。

</div>

<div class="s-why-last">

**为何？**没人想要在超过七层的目录中查找文件。扁平的结构有利于搜索。

另一方面，<a href="https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two" target="_blank">心理学家们相信</a>，
当关注的事物超过 9 个时，人类就会开始感到吃力。
所以，当一个文件夹中的文件有 10 个或更多个文件时，可能就是创建子目录的时候了。

还是根据你自己的舒适度而定吧。
除非创建新文件夹能有显著的价值，否则尽量使用扁平结构。

</div>

<a href="#toc">回到顶部</a>

{@a 04-05}

### *T-DRY*（尽量不重复自己）


#### 风格 04-05

<div class="s-rule do">

**坚持** DRY（Don't Repeat Yourself，不重复自己）。

</div>

<div class="s-rule avoid">

**避免**过度 DRY，以致牺牲了阅读性。

</div>

<div class="s-why-last">

**为何？**虽然 DRY 很重要，但如果要以牺牲 LIFT 的其它原则为代价，那就不值得了。
这也就是为什么它被称为 *T-DRY*。
例如，把组件命名为 `hero-view.component.html` 是多余的，因为带有 `.html` 扩展名的文件显然就是一个视图 (view)。
但如果它不那么显著，或不符合常规，就把它写出来。

</div>

<a href="#toc">回到顶部</a>

{@a 04-06}


### 总体结构的指导原则


#### 风格 04-06

<div class="s-rule do">

**坚持**从零开始，但要考虑应用程序接下来的路往哪儿走。

</div>

<div class="s-rule do">

**坚持**有一个近期实施方案和一个长期的愿景。

</div>

<div class="s-rule do">

**坚持**把所有源代码都放到名为 `src` 的目录里。

</div>

<div class="s-rule consider">

**坚持**如果组件具有多个伴生文件 (`.ts`、`.html`、`.css` 和 `.spec`)，就为它创建一个文件夹。

</div>

<div class="s-why">

**为何？** 在早期阶段能够帮助保持应用的结构小巧且易于维护，这样当应用增长时就容易进化了。

</div>

<div class="s-why-last">

**为何?** 组件通常有四个文件 (`*.html`、 `*.css`、 `*.ts` 和 `*.spec.ts`)，它们很容易把一个目录弄乱。

</div>

{@a file-tree}

下面是符合规范的目录和文件结构

<div class='filetree'>

  <div class='file'>

    &lt;project root&gt;

  </div>

  <div class='children'>

    <div class='file'>

      src

    </div>

    <div class='children'>

      <div class='file'>

        app

      </div>

      <div class='children'>

        <div class='file'>

          core

        </div>

        <div class='children'>

          <div class='file'>

            exception.service.ts|spec.ts

          </div>

          <div class='file'>

            user-profile.service.ts|spec.ts

          </div>

        </div>

        <div class='file'>

          heroes

        </div>

        <div class='children'>

          <div class='file'>

            hero

          </div>

          <div class='children'>

            <div class='file'>

              hero.component.ts|html|css|spec.ts

            </div>

          </div>

          <div class='file'>

            hero-list

          </div>

          <div class='children'>

            <div class='file'>

              hero-list.component.ts|html|css|spec.ts

            </div>

          </div>

          <div class='file'>

            shared

          </div>

          <div class='children'>

            <div class='file'>

              hero-button.component.ts|html|css|spec.ts

            </div>

            <div class='file'>

              hero.model.ts

            </div>

            <div class='file'>

              hero.service.ts|spec.ts

            </div>

          </div>

          <div class='file'>

            heroes.component.ts|html|css|spec.ts

          </div>

          <div class='file'>

            heroes.module.ts

          </div>

          <div class='file'>

            heroes-routing.module.ts

          </div>

        </div>

        <div class='file'>

          shared

        </div>

        <div class='children'>

          <div class='file'>

            shared.module.ts

          </div>

          <div class='file'>

            init-caps.pipe.ts|spec.ts

          </div>

          <div class='file'>

            filter-text.component.ts|spec.ts
          </div>

          <div class='file'>

            filter-text.service.ts|spec.ts
          </div>

        </div>

        <div class='file'>

          villains

        </div>

        <div class='children'>

          <div class='file'>

            villain

          </div>

          <div class='children'>

            <div class='file'>

              ...

            </div>

          </div>

          <div class='file'>

            villain-list

          </div>

          <div class='children'>

            <div class='file'>

              ...

            </div>

          </div>

          <div class='file'>

            shared

          </div>

          <div class='children'>

            <div class='file'>

              ...

            </div>

          </div>

          <div class='file'>

            villains.component.ts|html|css|spec.ts

          </div>

          <div class='file'>

            villains.module.ts

          </div>

          <div class='file'>

            villains-routing.module.ts

          </div>

        </div>

        <div class='file'>

          app.component.ts|html|css|spec.ts

        </div>

        <div class='file'>

          app.module.ts

        </div>

        <div class='file'>

          app-routing.module.ts

        </div>

      </div>

      <div class='file'>

        main.ts

      </div>

      <div class='file'>

        index.html

      </div>

      <div class='file'>

        ...

      </div>

    </div>

    <div class='file'>

      node_modules/...

    </div>

    <div class='file'>

      ...

    </div>

  </div>

</div>

<div class="alert is-helpful">

把组件放在专用目录中的方式广受欢迎，对于小型应用，还可以保持组件扁平化（而不是放在专用目录中）。
这样会把四个文件放在现有目录中，也会减少目录的嵌套。无论你如何选择，请保持一致。

</div>


<a href="#toc">回到顶部</a>

{@a 04-07}

### 按特性组织的目录结构

#### 风格 04-07

<div class="s-rule do">

**坚持**根据特性区命名目录。

</div>

<div class="s-why">

**为何？**开发人员可以快速定位代码，扫一眼就能知道每个文件代表什么，目录尽可能保持扁平，既没有重复也没有多余的名字。

</div>

<div class="s-why">

**为何？** LIFT 原则中包含了所有这些。

</div>

<div class="s-why">

**为何？**遵循 LIFT 原则精心组织内容，避免应用变得杂乱无章。

</div>

<div class="s-why">


**为何？**当有很多文件时（例如 10 个以上），在专用目录型结构中定位它们会比在扁平结构中更容易。

</div>

<div class="s-rule do">

**坚持**为每个特性区创建一个 NgModule。

</div>

<div class="s-why">

**为何？** NgModule 使惰性加载可路由的特性变得更容易。

</div>

<div class="s-why-last">

**为何？** NgModule 隔离、测试和复用特性更容易。

</div>

<div>

  欲知详情，参见<a href="#file-tree">目录和文件结构的范例</a>
  
</div>


<a href="#toc">回到顶部</a>

{@a 04-08}


### 应用的*根模块*

#### 风格 04-08

<div class="s-rule do">

**坚持**在应用的根目录创建一个 NgModule（例如 `/src/app`）。

</div>

<div class="s-why">

**为何？**每个应用都至少需要一个根 NgModule。

</div>

<div class="s-rule consider">

**考虑**把根模块命名为 `app.module.ts`。

</div>

<div class="s-why-last">

**为何？**能让定位和识别根模块变得更容易。

</div>

<code-example path="styleguide/src/04-08/app/app.module.ts" region="example" header="app/app.module.ts">

</code-example>

<a href="#toc">回到顶部</a>

{@a 04-09}


### 特性模块


#### 风格 04-09

<div class="s-rule do">

**坚持**为应用中每个明显的特性创建一个 NgModule。

</div>

<div class="s-rule do">

**坚持**把特性模块放在与特性区同名的目录中（例如 `app/heroes`）。

</div>

<div class="s-rule do">


**坚持**特性模块的文件名应该能反映出特性区的名字和目录（例如 `app/heroes/heroes.module.ts`）。

</div>

<div class="s-rule do">

**坚持**特性模块的符号名应该能反映出特性区、目录和文件名（例如在 `app/heroes/heroes.module.ts` 中定义 `HeroesModule`）。

</div>

<div class="s-why">

**为何？**特性模块可以对其它模块暴露或隐藏自己的实现。

</div>

<div class="s-why">

**为何？**特性模块标记出组成该特性分区的相关组件集合。

</div>

<div class="s-why">

**为何？**方便路由到特性模块 —— 无论是用主动加载还是惰性加载的方式。

</div>

<div class="s-why">

**为何？**特性模块在特定的功能和其它应用特性之间定义了清晰的边界。

</div>

<div class="s-why">

**为何？**特性模块帮助澄清开发职责，以便于把这些职责指派给不同的项目组。

</div>

<div class="s-why-last">

**为何？**特性模块易于隔离，以便测试。

</div>


<a href="#toc">回到顶部</a>

{@a 04-10}


### 共享特性模块


#### 风格 04-10

<div class="s-rule do">

**坚持**在 `shared` 目录中创建名叫 `SharedModule` 的特性模块（例如在 `app/shared/shared.module.ts` 中定义 `SharedModule`）。

</div>

<div class="s-rule do">

**坚持**在共享模块中声明那些可能被特性模块引用的可复用组件、指令和管道。

</div>

<div class="s-rule consider">

**考虑**把可能在整个应用中到处引用的模块命名为 SharedModule

</div>

<div class="s-rule avoid">

**考虑** *不要*在共享模块中提供服务。服务通常是单例的，应该在整个应用或一个特定的特性模块中只有一份。
不过也有例外，比如，在下面的范例代码中，注意 `SharedModule` 提供了 `FilterTextService`。这里可以这么做，因为该服务是无状态的，也就是说，该服务的消费者不会受到这些新实例的影响。

</div>

<div class="s-rule do">

**坚持**在 `SharedModule` 中导入所有模块都需要的资产（例如 `CommonModule` 和 `FormsModule`）。

</div>

<div class="s-why">

**为何？** `SharedModule` 中包含的组件、指令和管道可能需要来自其它公共模块的特性（例如来自 `CommonModule` 中的 `ngFor` 指令）。

</div>

<div class="s-rule do">

**坚持**在 `SharedModule` 中声明所有组件、指令和管道。

</div>

<div class="s-rule do">

**坚持**从 `SharedModule` 中导出其它特性模块所需的全部符号。

</div>

<div class="s-why">

**为何？** `SharedModule` 的存在，能让常用的组件、指令和管道在很多其它模块的组件模板中都自动可用。

</div>

<div class="s-rule avoid">

**避免**在 `SharedModule` 中指定应用级的单例服务提供者。如果是刻意要得到多个服务单例也行，不过还是要小心。

</div>

<div class="s-why">

**为何？**惰性加载的特性模块如果导入了这个共享模块，会创建一份自己的服务副本，这可能会导致意料之外的后果。

</div>

<div class="s-why-last">

**为何？**对于单例服务，你不希望每个模块都有自己的实例。
而如果 `SharedModule` 提供了一个服务，那就有可能发生这种情况。

</div>

<div class='filetree'>

  <div class='file'>

    src

  </div>

  <div class='children'>

    <div class='file'>

      app

    </div>

    <div class='children'>

      <div class='file'>

        shared

      </div>

      <div class='children'>

        <div class='file'>

          shared.module.ts

        </div>

        <div class='file'>

          init-caps.pipe.ts|spec.ts

        </div>

        <div class='file'>

          filter-text.component.ts|spec.ts
        </div>

        <div class='file'>

          filter-text.service.ts|spec.ts
        </div>

      </div>

      <div class='file'>

        app.component.ts|html|css|spec.ts

      </div>

      <div class='file'>

        app.module.ts

      </div>

      <div class='file'>

        app-routing.module.ts

      </div>

    </div>

    <div class='file'>

      main.ts

    </div>

    <div class='file'>

      index.html

    </div>

  </div>

  <div class='file'>

    ...

  </div>

</div>

<code-tabs>

  <code-pane header="app/shared/shared.module.ts" path="styleguide/src/04-10/app/shared/shared.module.ts">

  </code-pane>

  <code-pane header="app/shared/init-caps.pipe.ts" path="styleguide/src/04-10/app/shared/init-caps.pipe.ts">

  </code-pane>

  <code-pane header="app/shared/filter-text/filter-text.component.ts" path="styleguide/src/04-10/app/shared/filter-text/filter-text.component.ts">

  </code-pane>

  <code-pane header="app/shared/filter-text/filter-text.service.ts" path="styleguide/src/04-10/app/shared/filter-text/filter-text.service.ts">

  </code-pane>

  <code-pane header="app/heroes/heroes.component.ts" path="styleguide/src/04-10/app/heroes/heroes.component.ts">

  </code-pane>

  <code-pane header="app/heroes/heroes.component.html" path="styleguide/src/04-10/app/heroes/heroes.component.html">

  </code-pane>

</code-tabs>



<a href="#toc">回到顶部</a>

{@a 04-11}


### 惰性加载文件夹


#### 风格 04-11

某些边界清晰的应用特性或工作流可以做成*惰性加载*或*按需加载*的，而不用总是随着应用启动。

<div class="s-rule do">


**坚持**把惰性加载特性下的内容放进*惰性加载目录*中。
典型的*惰性加载目录*包含*路由组件*及其子组件以及与它们有关的那些资产和模块。

</div>

<div class="s-why-last">


**为何？**这种目录让标识和隔离这些特性内容变得更轻松。

</div>


<a href="#toc">回到顶部</a>

{@a 04-12}


### 永远不要直接导入惰性加载的目录


#### 样式 04-14

<div class="s-rule avoid">


**避免**让兄弟模块和父模块直接导入*惰性加载特性*中的模块。

</div>

<div class="s-why-last">

**为何？**直接导入并使用此模块会立即加载它，而原本的设计意图是按需加载它。

</div>

<a href="#toc">回到顶部</a>


## 组件

{@a 05-03}


### 把组件当做元素


#### 风格 05-03

<div class="s-rule do">


**考虑**给组件一个*元素*选择器，而不是*属性*或*类*选择器。

</div>

<div class="s-why">

**为何？**组件有很多包含 HTML 以及可选 Angular 模板语法的模板。
它们显示内容。开发人员会把组件像原生 HTML 元素和 WebComponents 一样放进页面中。

</div>

<div class="s-why-last">

**为何？**查看组件模板的 HTML 时，更容易识别一个符号是组件还是指令。

</div>

<div class="alert is-helpful">

少数情况下，你要为组件使用属性选择器，比如你要加强某个内置元素时。
比如，[Material Design 组件库](https://material.angular.cn/components/button/overview)就会对 `<button mat-button>` 使用这项技术。不过，你不应该在自定义组件上使用这项技术。

</div>

<code-example path="styleguide/src/05-03/app/heroes/shared/hero-button/hero-button.component.avoid.ts" region="example" header="app/heroes/hero-button/hero-button.component.ts">

</code-example>

<code-example path="styleguide/src/05-03/app/app.component.avoid.html" header="app/app.component.html">

</code-example>

<code-tabs>

  <code-pane header="app/heroes/shared/hero-button/hero-button.component.ts" path="styleguide/src/05-03/app/heroes/shared/hero-button/hero-button.component.ts" region="example">

  </code-pane>

  <code-pane header="app/app.component.html" path="styleguide/src/05-03/app/app.component.html">

  </code-pane>

</code-tabs>

<a href="#toc">回到顶部</a>

{@a 05-04}


### 把模板和样式提取到它们自己的文件


#### 风格 05-04

<div class="s-rule do">

**坚持**当超过 3 行时，把模板和样式提取到一个单独的文件。

</div>

<div class="s-rule do">

**坚持**把模板文件命名为 `[component-name].component.html`，其中，[component-name] 是组件名。

</div>

<div class="s-rule do">


**坚持**把样式文件命名为 `[component-name].component.css`，其中，[component-name] 是组件名。

</div>

<div class="s-rule do">


**坚持**指定*相对于模块的* URL ，给它加上 `./` 前缀。

</div>

<div class="s-why">


**为何？**巨大的、内联的模板和样式表会遮盖组件的意图和实现方式，削弱可读性和可维护性。

</div>

<div class="s-why">

**为何？**在多数编辑器中，编写内联的模板和样式表时都无法使用语法提示和代码片段功能。
Angular 的 TypeScript 语言服务（即将到来）可以帮助那些编辑器在编写 HTML 模板时克服这一缺陷，但对 CSS 样式没有帮助。

</div>

<div class="s-why">

**为何？**当你移动组件文件时，相对于组件的 URL 不需要修改，因为这些文件始终会在一起。

</div>

<div class="s-why-last">

**为何？**`./` 前缀是相对 URL 的标准语法，不必依赖 Angular 的特殊处理，如果没有前缀则不行。

</div>

<code-example path="styleguide/src/05-04/app/heroes/heroes.component.avoid.ts" region="example" header="app/heroes/heroes.component.ts">

</code-example>

<code-tabs>

  <code-pane header="app/heroes/heroes.component.ts" path="styleguide/src/05-04/app/heroes/heroes.component.ts" region="example">

  </code-pane>

  <code-pane header="app/heroes/heroes.component.html" path="styleguide/src/05-04/app/heroes/heroes.component.html">

  </code-pane>

  <code-pane header="app/heroes/heroes.component.css" path="styleguide/src/05-04/app/heroes/heroes.component.css">

  </code-pane>

</code-tabs>

<a href="#toc">回到顶部</a>

{@a 05-12}


### 内联输入和输出属性装饰器


#### 风格 05-12

<div class="s-rule do">

**坚持** 使用 `@Input()` 和 `@Output()`，而非 `@Directive` 和 `@Component` 装饰器的 `inputs` 和 `outputs` 属性:

</div>

<div class="s-rule consider">

**坚持**把 `@Input()` 或者 `@Output()` 放到所装饰的属性的同一行。

</div>

<div class="s-why">

**为何？**易于在类里面识别哪些属性是输入属性或输出属性。

</div>

<div class="s-why">

**为何？** 如果需要重命名与 `@Input()` 或者 `@Output()` 关联的属性或事件名，你可以在一个位置修改。

</div>

<div class="s-why">

**为何？**依附到指令的元数据声明会比较简短，更易于阅读。

</div>

<div class="s-why-last">


**为何？**把装饰器放到同一行可以精简代码，同时更易于识别输入或输出属性。

</div>

<code-example path="styleguide/src/05-12/app/heroes/shared/hero-button/hero-button.component.avoid.ts" region="example" header="app/heroes/shared/hero-button/hero-button.component.ts">

</code-example>

<code-example path="styleguide/src/05-12/app/heroes/shared/hero-button/hero-button.component.ts" region="example" header="app/heroes/shared/hero-button/hero-button.component.ts">

</code-example>


<a href="#toc">回到顶部</a>

{@a 05-13}


### 避免为输入和输出属性指定别名


#### 风格 05-13

<div class="s-rule avoid">


**避免**除非有重要目的，否则不要为输入和输出指定别名。

</div>

<div class="s-why">


**为何？**同一个属性有两个名字（一个对内一个对外）很容易导致混淆。

</div>

<div class="s-why-last">


**为何？**如果指令名也同时用作*输入*属性，而且指令名无法准确描述这个属性的用途时，应该使用别名。

</div>

<code-example path="styleguide/src/05-13/app/heroes/shared/hero-button/hero-button.component.avoid.ts" region="example" header="app/heroes/shared/hero-button/hero-button.component.ts">

</code-example>

<code-example path="styleguide/src/05-13/app/app.component.avoid.html" header="app/app.component.html">

</code-example>

<code-tabs>

  <code-pane header="app/heroes/shared/hero-button/hero-button.component.ts" path="styleguide/src/05-13/app/heroes/shared/hero-button/hero-button.component.ts" region="example">

  </code-pane>

  <code-pane header="app/heroes/shared/hero-button/hero-highlight.directive.ts" path="styleguide/src/05-13/app/heroes/shared/hero-highlight.directive.ts">

  </code-pane>

  <code-pane header="app/app.component.html" path="styleguide/src/05-13/app/app.component.html">

  </code-pane>

</code-tabs>


<a href="#toc">回到顶部</a>

{@a 05-14}


### 成员顺序


#### 风格 05-14

<div class="s-rule do">


**坚持**把属性成员放在前面，方法成员放在后面。

</div>

<div class="s-rule do">


**坚持**先放公共成员，再放私有成员，并按照字母顺序排列。

</div>

<div class="s-why-last">

**为何？**把类的成员按照统一的顺序排列，易于阅读，能立即识别出组件的哪个成员服务于何种目的。

</div>

<code-example path="styleguide/src/05-14/app/shared/toast/toast.component.avoid.ts" region="example" header="app/shared/toast/toast.component.ts">

</code-example>

<code-example path="styleguide/src/05-14/app/shared/toast/toast.component.ts" region="example" header="app/shared/toast/toast.component.ts">

</code-example>


<a href="#toc">回到顶部</a>

{@a 05-15}


### 把逻辑放到服务里


#### 风格 05-15

<div class="s-rule do">


**坚持**在组件中只包含与视图相关的逻辑。所有其它逻辑都应该放到服务中。

</div>

<div class="s-rule do">

**坚持**把可重用的逻辑放到服务中，保持组件简单，聚焦于它们预期目的。

</div>

<div class="s-why">


**为何？**当逻辑被放置到服务里，并以函数的形式暴露时，可以被多个组件重复使用。

</div>

<div class="s-why">


**为何？**在单元测试时，服务里的逻辑更容易被隔离。当组件中调用逻辑时，也很容易被模拟。

</div>

<div class="s-why">

**为何？**从组件移除依赖并隐藏实现细节。

</div>

<div class="s-why-last">

**为何？**保持组件苗条、精简和聚焦。

</div>

<code-example path="styleguide/src/05-15/app/heroes/hero-list/hero-list.component.avoid.ts" header="app/heroes/hero-list/hero-list.component.ts">

</code-example>

<code-example path="styleguide/src/05-15/app/heroes/hero-list/hero-list.component.ts" region="example" header="app/heroes/hero-list/hero-list.component.ts">

</code-example>


<a href="#toc">回到顶部</a>

{@a 05-16}


### 不要给输出属性加前缀


#### 风格 05-16

<div class="s-rule do">


**坚持**命名事件时，不要带前缀 `on`。

</div>

<div class="s-rule do">

**坚持**把事件处理器方法命名为 `on` 前缀之后紧跟着事件名。

</div>

<div class="s-why">


**为何？**与内置事件命名一致，例如按钮点击。

</div>

<div class="s-why-last">


**为何？**Angular 允许[另一种备选语法](guide/template-syntax#binding-syntax) `on-*`。如果事件的名字本身带有前缀 `on`，那么绑定的表达式可能是 `on-onEvent`。

</div>

<code-example path="styleguide/src/05-16/app/heroes/hero.component.avoid.ts" region="example" header="app/heroes/hero.component.ts">

</code-example>

<code-example path="styleguide/src/05-16/app/app.component.avoid.html" header="app/app.component.html">

</code-example>

<code-tabs>

  <code-pane header="app/heroes/hero.component.ts" path="styleguide/src/05-16/app/heroes/hero.component.ts" region="example">

  </code-pane>

  <code-pane header="app/app.component.html" path="styleguide/src/05-16/app/app.component.html">

  </code-pane>

</code-tabs>


<a href="#toc">回到顶部</a>

{@a 05-17}


### 把表现层逻辑放到组件类里

#### 风格 05-17

<div class="s-rule do">


**坚持**把表现层逻辑放进组件类中，而不要放在模板里。

</div>

<div class="s-why">


**为何？**逻辑应该只出现在一个地方（组件类里）而不应分散在两个地方。

</div>

<div class="s-why-last">


**为何？**将组件的表现层逻辑放到组件类而非模板里，可以增强测试性、维护性和重复使用性。

</div>

<code-example path="styleguide/src/05-17/app/heroes/hero-list/hero-list.component.avoid.ts" region="example" header="app/heroes/hero-list/hero-list.component.ts">

</code-example>

<code-example path="styleguide/src/05-17/app/heroes/hero-list/hero-list.component.ts" region="example" header="app/heroes/hero-list/hero-list.component.ts">

</code-example>


<a href="#toc">回到顶部</a>


## 指令

{@a 06-01}


### 使用指令来增强已有元素


#### 风格 06-01

<div class="s-rule do">


**坚持**当你需要有表现层逻辑，但没有模板时，使用属性型指令。

</div>

<div class="s-why">


**为何？**属性型指令没有模板。

</div>

<div class="s-why-last">


**为何？**一个元素可以使用多个属性型指令。

</div>

<code-example path="styleguide/src/06-01/app/shared/highlight.directive.ts" region="example" header="app/shared/highlight.directive.ts">

</code-example>

<code-example path="styleguide/src/06-01/app/app.component.html" header="app/app.component.html">

</code-example>


<a href="#toc">回到顶部</a>

{@a 06-03}


### *HostListener* 和 *HostBinding* 装饰器 vs. 组件元数据 *host*


#### 风格 06-03

<div class="s-rule consider">


**考虑**优先使用 `@HostListener` 和 `@HostBinding`，而不是 `@Directive` 和 `@Component` 装饰器的 `host` 属性。

</div>

<div class="s-rule do">


**坚持**让你的选择保持一致。

</div>

<div class="s-why-last">

**为何？**对于关联到 `@HostBinding` 的属性或关联到 `@HostListener` 的方法，要修改时，只需在指令类中的一个地方修改。
如果使用元数据属性 `host`，你就得在组件类中修改属性声明的同时修改相关的元数据。

</div>

<code-example path="styleguide/src/06-03/app/shared/validator.directive.ts" header="app/shared/validator.directive.ts">

</code-example>

与不推荐的方式（`host` 元数据）比较一下。

<div class="s-why-last">

**为何？**`host` 元数据只是一个便于记忆的名字而已，并不需要额外的 ES 导入。

</div>

<code-example path="styleguide/src/06-03/app/shared/validator2.directive.ts" header="app/shared/validator2.directive.ts">

</code-example>


<a href="#toc">回到顶部</a>


## 服务

{@a 07-01}


### 服务总是单例的


#### 风格 07-01

<div class="s-rule do">

**坚持**在同一个注入器内，把服务当做单例使用。用它们来共享数据和功能。

</div>

<div class="s-why">

**为何？**服务是在特性范围或应用内共享方法的理想载体。

</div>

<div class="s-why-last">


**为何？**服务是共享状态性内存数据的理想载体。

</div>

<code-example path="styleguide/src/07-01/app/heroes/shared/hero.service.ts" region="example" header="app/heroes/shared/hero.service.ts">

</code-example>


<a href="#toc">回到顶部</a>

{@a 07-02}


### 单一职责


#### 风格 07-02

<div class="s-rule do">


**坚持**创建封装在上下文中的单一职责的服务。

</div>

<div class="s-rule do">


**坚持**当服务成长到超出单一用途时，创建一个新服务。

</div>

<div class="s-why">


**为何？**当服务有多个职责时，它很难被测试。

</div>

<div class="s-why-last">


**为何？**当某个服务有多个职责时，每个注入它的组件或服务都会承担这些职责的全部开销。

</div>


<a href="#toc">回到顶部</a>

{@a 07-03}


### 提供一个服务


#### 风格 07-03

<div class="s-rule do">


**坚持**在服务的 `@Injectable` 装饰器上指定通过应用的根注入器提供服务。

</div>

<div class="s-why">


**为何？** Angular 注入器是层次化的。

</div>

<div class="s-why">

**为何？**当你在根注入器上提供该服务时，该服务实例在每个需要该服务的类中是共享的。当服务要共享方法或状态时，这是最理想的选择。

</div>

<div class="s-why">

**为何？**当你在服务的 `@Injectable` 中注册服务时，[Angular CLI](cli) 生产环境构建时使用的优化工具可以进行摇树优化，从而移除那些你的应用中从未用过的服务。

</div>

<div class="s-why-last">


**为何？**当不同的两个组件需要一个服务的不同的实例时，上面的方法这就不理想了。在这种情况下，对于需要崭新和单独服务实例的组件，最好在组件级提供服务。

</div>

<code-example path="dependency-injection/src/app/tree-shaking/service.ts" header="src/app/treeshaking/service.ts"></code-example>


<a href="#toc">回到顶部</a>

{@a 07-04}


### 使用 @Injectable() 类装饰器


#### 风格 07-04

<div class="s-rule do">

**坚持**当使用类型作为令牌来注入服务的依赖时，使用 `@Injectable()` 类装饰器，而非 `@Inject()` 参数装饰器。

</div>

<div class="s-why">

**为何？** Angular 的 DI 机制会根据服务的构造函数参数的声明类型来解析服务的所有依赖。

</div>

<div class="s-why-last">

**为何？**当服务只接受类型令牌相关的依赖时，比起在每个构造函数参数上使用 `@Inject()`，`@Injectable()` 的语法简洁多了。

</div>

<code-example path="styleguide/src/07-04/app/heroes/shared/hero-arena.service.avoid.ts" region="example" header="app/heroes/shared/hero-arena.service.ts">

</code-example>

<code-example path="styleguide/src/07-04/app/heroes/shared/hero-arena.service.ts" region="example" header="app/heroes/shared/hero-arena.service.ts">

</code-example>


<a href="#toc">回到顶部</a>


## 数据服务

{@a 08-01}


### 通过服务与 Web 服务器通讯


#### 风格 08-01

<div class="s-rule do">


**坚持**把数据操作和与数据交互的逻辑重构到服务里。

</div>

<div class="s-rule do">


**坚持**让数据服务来负责 XHR 调用、本地储存、内存储存或者其它数据操作。

</div>

<div class="s-why">

**为何？**组件的职责是为视图展示或收集信息。它不应该关心如何获取数据，它只需要知道向谁请求数据。把如何获取数据的逻辑移动到数据服务里，简化了组件，让其聚焦于视图。

</div>

<div class="s-why">


**为何？**在测试使用数据服务的组件时，可以让数据调用更容易被测试（模拟或者真实）。

</div>

<div class="s-why-last">


**为何？**数据管理的详情，比如头信息、方法、缓存、错误处理和重试逻辑，不是组件和其它的数据消费者应该关心的事情。

数据服务应该封装这些细节。这样，在服务内部修改细节，就不会影响到它的消费者。并且更容易通过实现一个模拟服务来对消费者进行测试。

</div>


<a href="#toc">回到顶部</a>


## 生命周期钩子


使用生命周期钩子来介入到 Angular 暴露的重要事件里。


<a href="#toc">回到顶部</a>

{@a 09-01}


### 实现生命周期钩子接口


#### 风格 09-01

<div class="s-rule do">


**坚持**实现生命周期钩子接口。

</div>

<div class="s-why-last">


**为何？**如果使用强类型的方法签名，编译器和编辑器可以帮你揪出拼写错误。

</div>

<code-example path="styleguide/src/09-01/app/heroes/shared/hero-button/hero-button.component.avoid.ts" region="example" header="app/heroes/shared/hero-button/hero-button.component.ts">

</code-example>

<code-example path="styleguide/src/09-01/app/heroes/shared/hero-button/hero-button.component.ts" region="example" header="app/heroes/shared/hero-button/hero-button.component.ts">

</code-example>


<a href="#toc">回到顶部</a>

## Appendix

## 附录


有用的 Angular 工具和小提示


<a href="#toc">回到顶部</a>

{@a A-01}

### Codelyzer


#### 风格 A-01

<div class="s-rule do">

**坚持**使用 [codelyzer](https://www.npmjs.com/package/codelyzer) 来实施本指南。

</div>

<div class="s-rule consider">

**考虑**调整 codelyzer 的规则来满足你的需求。

</div>


<a href="#toc">回到顶部</a>

{@a A-02}


### 文档模板和代码片段


#### 风格 A-02

<div class="s-rule do">


**坚持**使用文件模板或代码片段来帮助实现一致的风格和模式。下面是为一些网络开发编辑器和 IDE 准备的模板和/或代码片段：

</div>

<div class="s-rule consider">

**考虑**使用 [Visual Studio Code](https://code.visualstudio.com/)的[代码片段](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2) 来实施本风格指南。

<a href="https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2">
  <img src="generated/images/guide/styleguide/use-extension.gif" alt="Use Extension">
</a>

**考虑**使用 [Atom](https://atom.io/) 的[代码片断](https://atom.io/packages/angular-2-typescript-snippets)来实施本风格指南。


**考虑**使用 [Sublime Text](http://www.sublimetext.com/)的[代码片断](https://github.com/orizens/sublime-angular2-snippets) 来实施本风格指南。


**考虑**使用 [Vim](http://www.vim.org/) 的[代码片断](https://github.com/mhartington/vim-angular2-snippets)来实施本风格指南。

</div>

<a href="#toc">回到顶部</a>
