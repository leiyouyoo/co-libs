import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { AppService } from '@core/app.service';
import { deepCopy } from '@co/core';
import sdk from '@stackblitz/sdk';
import { getParameters } from 'codesandbox/lib/api/define';
import * as pkg from '../../../../package.json';
import angularJSON from './files/angular.json';
import appModuleTS from './files/app.module';
import delonABCModuleTS from './files/delon-abc.module';
import delonChartModuleTS from './files/delon-chart.module';
import dotAngularCliJSON from './files/dot_angular-cli.json';
import environmentTS from './files/environment';
import globalConfigTS from './files/global-config.module';
import mainTS from './files/main';
import nzZorroAntdModuleTS from './files/ng-zorro-antd.module';
import polyfillTS from './files/polyfill';
import startupServiceTS from './files/startup.service';

@Injectable({ providedIn: 'root' })
export class CodeService {
  private document: Document;

  private get dependencies() {
    const NGALAIN_VERSION = `~${pkg.version}`;
    return {
      '@angular/animations': '^9.0.0',
      '@angular/cdk': '9.2.1',
      '@angular/common': '^9.0.0',
      '@angular/compiler': '^9.0.0',
      '@angular/core': '^9.0.0',
      '@angular/forms': '^9.0.0',
      '@angular/platform-browser': '^9.0.0',
      '@angular/platform-browser-dynamic': '^9.0.0',
      '@angular/router': '^9.0.0',
      '@ant-design/icons-angular': '9.0.1',
      'core-js': '3.6.4',
      rxjs: '6.5.4',
      tslib: '1.11.1',
      'zone.js': '0.10.2',
      '@antv/g2': '*',
      '@antv/data-set': '*',
      'date-fns': '*',
      'file-saver': '^1.3.3',
      'ngx-countdown': '*',
      'ng-zorro-antd': '*',
      '@co/theme': NGALAIN_VERSION,
      '@co/cbc': NGALAIN_VERSION,
      '@co/chart': NGALAIN_VERSION,
      '@co/acl': NGALAIN_VERSION,
      '@co/auth': NGALAIN_VERSION,
      '@co/cache': NGALAIN_VERSION,
      '@co/mock': NGALAIN_VERSION,
      '@co/form': NGALAIN_VERSION,
      '@co/core': NGALAIN_VERSION,
      '@co/common': NGALAIN_VERSION,
      '@co/im': NGALAIN_VERSION,
      '@co/map': NGALAIN_VERSION,
      '@co/cms': NGALAIN_VERSION,
      '@co/cds': NGALAIN_VERSION,
      extend: '*',
      qrious: '*',
    };
  }

  private get themePath(): string {
    return `node_modules/@co/theme/${this.appSrv.theme}.css`;
  }

  constructor(private appSrv: AppService, @Inject(DOCUMENT) document: any) {
    this.document = document;
  }

  private get genStartupService(): string {
    return startupServiceTS({ ajvVersion: pkg.dependencies.ajv.substr(1) });
  }

  private get genMock(): { [key: string]: string } {
    return { '_mock/user.ts': require('!!raw-loader!../../../../_mock/user.ts').default, '_mock/index.ts': `export * from './user';` };
  }

  private parseCode(code: string) {
    let selector = '';
    let componentName = '';
    const selectorRe = /selector:[ ]?(['|"|`])([^'"`]+)/g.exec(code);
    if (selectorRe) {
      selector = selectorRe[2];
    }
    const componentNameRe = /export class ([^ {]+)/g.exec(code);
    if (componentNameRe) {
      componentName = componentNameRe[1];
    }
    return {
      selector,
      componentName,
      html: [
        `<base href="/">`,
        `<${selector}>loading</${selector}>`,
        `<div id="VERSION" style="position: fixed; bottom: 8px; right: 8px; z-index: 8888;"></div>`,
      ].join('\n'),
    };
  }

  openOnStackBlitz(appComponentCode: string) {
    const res = this.parseCode(appComponentCode);
    const json = deepCopy(angularJSON);
    json.projects.demo.architect.build.options.styles.splice(0, 0, this.themePath);
    sdk.openProject(
      {
        title: 'NG-ALAIN',
        description: 'NG-ZORRO  admin panel front-end framework',
        tags: ['ng-alain', '@co', 'NG-ZORRO', 'ng-zorro-antd', 'Ant Design', 'Angular', 'ng'],
        dependencies: this.dependencies,
        files: {
          'angular.json': `${JSON.stringify(json, null, 2)}`,
          'src/environments/environment.ts': environmentTS,
          'src/index.html': res.html,
          'src/main.ts': mainTS,
          'src/polyfills.ts': polyfillTS,
          'src/app/app.component.ts': appComponentCode,
          'src/app/app.module.ts': appModuleTS(res.componentName),
          'src/app/global-config.module.ts': globalConfigTS,
          'src/app/ng-zorro-antd.module.ts': nzZorroAntdModuleTS,
          'src/app/delon-abc.module.ts': delonABCModuleTS,
          'src/app/delon-chart.module.ts': delonChartModuleTS,
          'src/app/startup.service.ts': this.genStartupService,
          'src/styles.css': ``,
          ...this.genMock,
        },
        template: 'angular-cli',
      },
      {
        openFile: `src/app/app.component.ts`,
      },
    );
  }

  openOnCodeSandbox(appComponentCode: string) {
    const res = this.parseCode(appComponentCode);
    const mockObj = this.genMock;
    const json = deepCopy(dotAngularCliJSON);
    json.apps[0].styles.splice(0, 0, this.themePath);
    const parameters = getParameters({
      files: {
        'package.json': {
          content: JSON.stringify(
            {
              dependencies: this.dependencies,
            },
            null,
            2,
          ),
          isBinary: false,
        },
        '.angular-cli.json': {
          content: `${JSON.stringify(json, null, 2)}`,
          isBinary: false,
        },
        'src/environments/environment.ts': {
          content: environmentTS,
          isBinary: false,
        },
        'src/index.html': {
          content: res.html,
          isBinary: false,
        },
        'src/main.ts': {
          content: mainTS,
          isBinary: false,
        },
        'src/polyfills.ts': {
          content: polyfillTS,
          isBinary: false,
        },
        'src/app/app.module.ts': {
          content: appModuleTS(res.componentName),
          isBinary: false,
        },
        'src/app/global-config.module.ts': {
          content: globalConfigTS,
          isBinary: false,
        },
        'src/app/app.component.ts': {
          content: appComponentCode,
          isBinary: false,
        },
        'src/app/ng-zorro-antd.module.ts': {
          content: nzZorroAntdModuleTS,
          isBinary: false,
        },
        'src/app/delon-abc.module.ts': {
          content: delonABCModuleTS,
          isBinary: false,
        },
        'src/app/delon-chart.module.ts': {
          content: delonChartModuleTS,
          isBinary: false,
        },
        'src/app/startup.service.ts': {
          content: this.genStartupService,
          isBinary: false,
        },
        'src/styles.css': {
          content: ``,
          isBinary: false,
        },
        '_mock/user.ts': {
          content: mockObj['_mock/user.ts'],
          isBinary: false,
        },
        '_mock/index.ts': {
          content: mockObj['_mock/index.ts'],
          isBinary: false,
        },
      },
    });

    const form = this.document.createElement('form');
    const parametersInput = this.document.createElement('input');
    form.method = 'POST';
    form.action = 'https://codesandbox.io/api/v1/sandboxes/define';
    form.target = '_blank';
    parametersInput.name = 'parameters';
    parametersInput.value = parameters;
    form.appendChild(parametersInput);
    this.document.body.append(form);
    form.submit();
    this.document.body.removeChild(form);
  }
}
