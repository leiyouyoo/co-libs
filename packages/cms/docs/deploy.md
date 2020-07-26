---
order: 60
title: 高级
type: Documents
---


#### 共享全局服务

对于一些全局的数据我们一般会存储在服务中，然后子应用可以直接共享，比如：`当前登录用户`，`多语言服务`等，简单的数据共享可以直接挂载在 window 上即可，为了让每个子应用使用全局服务和模块内服务一致，我们通过在主应用中实例化这些服务，但后在每个子应用的 AppModule 中使用 provide 重新设置主应用的 value，当然这些不需要子应用的业务开发人员自己设置，已经封装到业务组件库中全局配置好了。

```
{
  provide: AppContext,
  useValue: window.portalAppContext
}
```


#### 应用间通信

应用间通信有很多中方式，我们底层使用浏览器的 `CustomEvent` ，在这之上封装了 `GlobalEventDispatcher` 服务做通信（当然你也可以使用在 window 对象上挂载全局对象实现），场景就是某个子应用要打开另外一个子应用的详情页

```

// App1
globalEventDispatcher.dispatch('open-task-detail', { taskId: 'xxx' });

// App2
globalEventDispatcher.register('open-task-detail').subscribe((payload) => {
    // open dialog of task detail
});

```

#### 应用间组件互相调用

在我们的`敏捷开发`子产品中，一个用户故事的详情页，需要显示`测试管理`应用的关联的测试用例和测试执行情况，那么这个测试用例列表组件放在 `测试管理` 子应用是最合适的，那么用户故事详情页肯定在`敏捷开发`应用中，如何加载`测试管理`应用的某个组件就是一个问题。

这一块使用了 `Angular CDK 中的 DomPortalOutlet` 动态创建组件，并指定渲染在某个容器中，这样保证了这个动态组件的创建还是 `测试管理` 模块的，只是渲染在了其他应用中而已。

```

const portalOutlet = new DomPortalOutlet(container, componentFactoryResolver, appRef, injector);
const testCasesPortalComponent = new ComponentPortal(TestCasesComponent, null);
portalOutlet.attachComponentPortal(testCasesPortalComponent);

```



