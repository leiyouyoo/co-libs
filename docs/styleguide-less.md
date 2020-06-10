---
order: 92
title:
  en-US: Less Style Guide
  zh-CN: Less开发规范指南
type: Styleguide
---

# 样式风格指南

本风格指南介绍了提倡的命名及代码组织约定。


## 命名

所有组件样式命名遵循BEM规范

> **BEM** 是一个规范的总称缩写，它代表 block(块) ，element(元素) 和 modifier(修饰符)。

```
.block { /* styles */ } 
.block__element { /* styles */ } 
.block--modifier { /* styles */ }

```

> **块**  一个块就是一个组件

```
.form { /* styles */ }
```


> **元素** 元素是块的子节点。为了表明某个东西是一个元素，你需要在块名后添加 __element。

```
<form class="form" action=""> 
    <div class="form__row"> 
        <!-- ... --> 
    </div> 
</form>
.form__row { 
    /* styles */ 
}
```

> **修饰符** 修饰符是改变某个块的外观的标志。要使用修饰符，可以将 --modifier 添加到块中。

```
.button { 
    padding: 0.5em 0.75em; 
    background-color: red; 
} 
.button--secondary { 
    background-color: green; 
}
```




## 代码组织

**[强制]**：相关的属性声明应当归为一组，并按照下面的顺序排列。

```
1.Positioning Model (布局方式、位置）

2.Box Model (盒模型)

3.Typographic (文本排版)

4. Visual (视觉外观)
```


## 相关方法

遵循CSS方法论提高CSS的可读，可维护及可复用性。


### SMACSS:Scalable and Modular Architecture for CSS

设计架构中推荐有这6类.

1. Base Styles：基础规范，它的定义不会用到class和ID。包含样式重置css reset、工具样式rework。

2. Layout Rules：布局规范，布局是一个网站的基本，SMACSS还约定了一个前缀 layout- 来标识布局的class。

3. Module Rules：模块规范，将样式模块化就能达到复用和可维护的目的。SMACSS中的模块具有自己的一个命名，下属类皆有同一个前缀.

4. Theme Rules：主题规范，描述了页面主题外观，一般是指颜色、背景图。Theme Rules 可以修改前面 4个类别的样式，且应和前面4个类别分离开来（便于切换，也就是“换肤”）。

5. Changing State: 动态样式规范，我们静态CSS完成后，会有一些动态交互样式的覆盖行为。改变State Rules的样式属性。


