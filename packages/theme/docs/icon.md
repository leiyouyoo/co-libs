---
type: Documents
order: 20
title: Icon
---


### 使用字体icon

1. 上传字体图标到[iconfont.cn](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.12&manage_type=myprojects&projectId=1909561)。


2. 生成字体图标远程脚本。
  ![](./assets/screenshot/iconfont.png)。


3. 拷贝脚本路径到platform.config.js配置文件.

  ```js
  window.CO_PLATFORM = {
    ...
      iconSrv: 'https://at.alicdn.com/t/font_1909561_gvrti52q2vn.js',
    ...
  }
  ```

4. 通过nz-icon使用字体图标，如下:
```html
 <i nz-icon nzIconfont="iconsetting" class="portal-menu__item-icon"></i>
```
