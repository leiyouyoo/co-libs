module.exports = {
  defaultLang: 'zh-CN',
  langs: ['zh-CN', 'en-US'],
  tocMaxDepth: 3, // toc max depth
  template: {
    examples: './src/templates/examples.ts',
    examples_index: './src/templates/examples_index.ts',
  },
  modules: [
    {
      name: 'docs',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/docs',
      types: [
        {
          'zh-CN': '入门',
          'en-US': 'Basic',
        },
        {
          'zh-CN': '开发',
          'en-US': 'Dev',
        },
        {
          'zh-CN': '进阶',
          'en-US': 'Advance',
        },
        {
          'zh-CN': '规范',
          'en-US': 'Styleguide',
        },
        {
          'zh-CN': '其他',
          'en-US': 'Other',
        },
      ],
      defaultRoute: 'basic/getting-started',
      metaIncludeAttributes: ['name', 'types', 'github'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
    {
      name: 'components',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/components',
      types: [
        {
          'zh-CN': '基础',
          'en-US': 'Basic',
        },
        {
          'zh-CN': '表单',
          'en-US': 'Form',
        },
        {
          'zh-CN': '布局',
          'en-US': 'Layout',
        },
        {
          'zh-CN': '业务',
          'en-US': 'Business',
        },
      ],
      extraRouteMeta: [],
      module: '@co/cbc',
      defaultRoute: 'customer-picker',
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/cbc'],
          ignores: ['README.md'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: true,
        },
      ],
    },
    {
      name: 'auth',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/auth',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: '@co/auth',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/auth/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
    {
      name: 'acl',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/acl',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: '@co/acl',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/acl/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
    {
      name: 'cache',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/cache',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: '@co/cache',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/cache/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
    {
      name: 'mock',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/mock',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: '@co/mock',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/mock/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
    {
      name: 'core',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/core',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
        {
          'zh-CN': '类型',
          'en-US': 'Type',
        },
        {
          'zh-CN': '模板',
          'en-US': 'Template',
        },
      ],
      module: '@co/core',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/core/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
        {
          src: ['./packages/core/src'],
          // ignores: [ 'README.md' ],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: true,
        },
      ],
    },
    {
      name: 'form',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/form',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
        {
          'zh-CN': 'Examples',
          'en-US': 'Examples',
        },
        {
          'zh-CN': '小部件',
          'en-US': 'Widgets',
        },
        {
          'zh-CN': '第三方小部件',
          'en-US': 'Third Widgets',
        },
      ],
      module: '@co/form',
      defaultRoute: 'getting-started',
      extraRouteMeta: [
        {
          name: 'validator',
          route: '/form-pages/validator',
          i18n: false,
          meta: {
            'zh-CN': {
              type: 'Examples',
              title: '在线校验器',
            },
          },
        },
      ],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/form/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
        {
          src: ['./packages/form/examples'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: true,
        },
        {
          src: ['./packages/form/src/widgets'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: true,
        },
        {
          src: ['./packages/form/widgets-third'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: true,
        },
      ],
    },
    {
      name: 'chart',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/chart',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
        {
          'zh-CN': '组件',
          'en-US': 'Components',
        },
      ],
      module: '@co/chart',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/chart/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
        {
          src: ['./packages/chart'],
          template: {
            content: './src/templates/content.ts',
          },
          ignores: ['docs'],
          hasSubDir: true,
        },
      ],
    },
    {
      name: 'cli',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/cli',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: 'co-libs',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/schematics/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
    {
      name: 'theme',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/theme',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
        {
          'zh-CN': '主题',
          'en-US': 'Theme',
        },
        {
          'zh-CN': '服务',
          'en-US': 'Service',
        },
        {
          'zh-CN': '管道',
          'en-US': 'Pipe',
        },
      ],
      module: 'co-libs',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/theme/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
        {
          src: ['./packages/theme/layout'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: true,
        },
        // {
        //   src: ['./packages/theme/src/pipes'],
        //   template: {
        //     content: './src/templates/content.ts',
        //   },
        //   hasSubDir: true,
        // },
        // {
        //   src: ['./packages/theme/src/services'],
        //   template: {
        //     content: './src/templates/content.ts',
        //   },
        //   hasSubDir: true,
        // },
      ],
    },
    {
      name: 'common',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/common',
      types: [
        {
          'zh-CN': '服务',
          'en-US': 'Service',
        },
        {
          'zh-CN': '管道',
          'en-US': 'Pipe',
        },
      ],
      module: 'co-libs',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/common/src/pipes'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: true,
        },
        {
          src: ['./packages/common/src/services'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: true,
        },
      ],
    },
    {
      name: 'im',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/im',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: '@co/im',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/im/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
    {
      name: 'cds',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/cds',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: '@co/cds',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'github', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/cds/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
      ],
    },
    {
      name: 'map',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/map',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: '@co/map',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/map/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
        {
          src: ['./packages/map'],
          template: {
            content: './src/templates/content.ts',
          },
          ignores: ['docs'],
          hasSubDir: true,
        },
      ],
    },
    {
      name: 'apm',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/apm',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: '@co/apm',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/apm/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
        {
          src: ['./packages/apm'],
          template: {
            content: './src/templates/content.ts',
          },
          ignores: ['docs'],
          hasSubDir: true,
        },
      ],
    },
    {
      name: 'cms',
      github: 'https://github.com/co-libs/delon',
      dist: './src/app/routes/gen/cms',
      types: [
        {
          'zh-CN': '文档',
          'en-US': 'Documents',
        },
      ],
      module: '@co/cms',
      defaultRoute: 'getting-started',
      extraRouteMeta: [],
      metaIncludeAttributes: ['name', 'types', 'module'],
      template: {
        meta: './src/templates/meta.ts',
        module: './src/templates/module.ts',
      },
      dir: [
        {
          src: ['./packages/cms/docs'],
          template: {
            content: './src/templates/content.ts',
          },
          hasSubDir: false,
        },
        {
          src: ['./packages/cms'],
          template: {
            content: './src/templates/content.ts',
          },
          ignores: ['docs'],
          hasSubDir: true,
        },
      ],
    },
  ],
};
