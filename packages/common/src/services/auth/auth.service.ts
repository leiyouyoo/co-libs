import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { DA_SERVICE_TOKEN, ITokenService } from '@co/auth';
import { CoAuthConfig, CoConfigService, CO_CONFIG, log } from '@co/core';
// tslint:disable-next-line: no-duplicate-imports
import { LazyService } from '@co/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '../http/http.client';

declare const FB: any;
interface LoginOption {
  grant_type?: string;
  scope?: string;
  externalProvider?: string;
  externalAccessCode?: string;
  client_id?: string;
  client_secret?: string;
  platform?: string;
}

const defaultLoginOption: LoginOption = {
  scope: 'PlatformApi offline_access ids4-api',
  client_id: 'cityOcean',
  client_secret: '282F4E3E-AD56-4FE1-BAF3-FE99BBC11AD2',
  grant_type: 'password',
};

@Injectable({
  providedIn: 'root',
})
export class CoAuthService {
  readonly userStorageKey = 'CO_USER_INFO';
  readonly expiredStorageKey = 'token_expired_time';
  readonly loginUrl = 'sso/connect/token';
  refreshTokenTimer;
  headers: HttpHeaders;
  config: any;
  constructor(
    public _httpClient: _HttpClient,
    private lazy: LazyService,
    public http: HttpClient,
    coConfigService: CoConfigService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private messageService: NzMessageService,
  ) {
    this.config = coConfigService.get('auth');
    this.startRefreshTokenTimer();
  }

  // 登录
  login(userName: string, passWord: string, rememberMe = false, options = {}) {
    return new Promise((resolve, reject) => {
      const url = this.loginUrl;
      const obj = {
        ...defaultLoginOption,
        username: userName,
        password: passWord,
        ...options,
      };

      const formData = new FormData();
      Object.keys(obj).forEach(key => {
        formData.append(key, obj[key]);
      });

      this._httpClient.post(url, formData, null, { headers: { 'Do-not-show-error': 'true' } }).subscribe(
        (res: any) => {
          // 存储token
          this.saveToken(res);
          this.saveUser({ username: userName, password: passWord }, rememberMe);

          // 存储用户信息
          resolve(res);
        },
        error => {
          reject(error);
          log(error);
        },
      );
    });
  }

  thirdLogin(options: LoginOption) {
    return new Promise((resolve, reject) => {
      const url = this.loginUrl;
      const obj = {
        ...defaultLoginOption,
        grant_type: 'external',
        ...options,
      };

      this._httpClient.post(url, obj, null, { headers: { 'Do-not-show-error': 'true' } }).subscribe(
        (res: any) => {
          // 存储token
          this.saveToken(res);

          // 存储用户信息
          resolve(res);
        },
        error => {
          reject(error);
          console.log(error);
        },
      );
    });
  }

  startRefreshTokenTimer() {
    const expiredTime = +localStorage.getItem(this.expiredStorageKey)!;
    if (!expiredTime) {
      return;
    }
    const delay = new Date(expiredTime).getTime() - Date.now() - 40e3;
    if (delay <= 0) {
      return;
    }

    this.refreshTokenTimer = setTimeout(() => this.refreshToken(), delay);
  }

  // 刷新令牌
  refreshToken() {
    const refresh_token = localStorage.getItem('refresh_token');
    const url = this.loginUrl;
    const form = new FormData();
    form.append('refresh_token', refresh_token ? refresh_token : '');
    form.append('grant_type', 'refresh_token');
    form.append('client_id', 'cityOcean');
    form.append('client_secret', '282F4E3E-AD56-4FE1-BAF3-FE99BBC11AD2');
    this._httpClient.post(url, form).subscribe((res: any) => {
      this.saveToken(res);
    });
  }

  // 获取用户方法
  // 获取用户信息
  getUserList(
    Filter: string,
    Permission: string,
    Role: number,
    OnlyLockedUsers: boolean,
    Sorting: string,
    MaxResultCount: number,
    SkipCount: number,
  ) {
    return new Promise(deferred => {
      const url = '/sso/User/GetUsers';
      const params = {
        Role,
        Filter,
        Permission,
        OnlyLockedUsers,
        Sorting,
        MaxResultCount,
        SkipCount,
      };

      this._httpClient.get(url, params).subscribe((res: any) => {
        deferred(res);
      });
    });
  }

  /**
   * 令牌存储
   * @param res
   */
  private saveToken(res: any) {
    if (!res.access_token) {
      return;
    }

    localStorage.setItem('token', res.access_token);
    this.tokenService.set({ token: res.access_token });
    localStorage.setItem('refresh_token', res.refresh_token);
    if (typeof res.expires_in === 'number') {
      localStorage.setItem('token_expired_time', `${Date.now() + res.expires_in * 1e3}`);
    }
    this.startRefreshTokenTimer();
  }

  private saveUser(data: { username: string; password: string }, isSave = false) {
    if (!isSave) {
      return localStorage.removeItem(this.userStorageKey);
    }

    let dataStr = JSON.stringify(data);
    dataStr = window.btoa ? window.btoa(dataStr) : dataStr;
    localStorage.setItem(this.userStorageKey, dataStr);
  }

  getSavedUser(): { username: string; password: string } | null {
    let dataStr = localStorage.getItem(this.userStorageKey);
    dataStr = dataStr && window.atob ? window.atob(dataStr) : dataStr;
    return dataStr ? JSON.parse(dataStr) : null;
  }

  bindExternalUser(param: { externalProvider?: string; externalAccessCode?: string }) {
    const url = `/SSO/User/BindExternalUser`;
    return this._httpClient.post(url, param);
  }

  wechatLogin() {
    const uri = window.encodeURIComponent(location.origin + '/#/passport/login/thirdLogin?loginType=wechat');
    const urlAddress = `https://open.weixin.qq.com/connect/qrconnect?appid=${this.config.wechat_appid}&redirect_uri=${uri}&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect`;
    window.location.href = urlAddress;
  }

  workWechatLogin() {
    const uri = window.encodeURIComponent(location.origin + '/#/passport/login/thirdLogin?loginType=workwechat');
    const urlAddress = `https://open.work.weixin.qq.com/wwopen/sso/qrConnect?appid=${this.config.work_wechat_id}&agentid=${this.config.work_agent_id}&redirect_uri=${uri}&state=STATE`;
    window.location.href = urlAddress;
  }

  faceBookLogin() {
    try {
      FB.login((response: any) => {
        if (response.status === 'connected') {
          this.thirdLogin({
            externalProvider: 'FaceBook',
            externalAccessCode: response.authResponse.accessToken,
          });
        } else {
          console.log(response);
        }
      });
    } catch (e) {
      this.messageService.warning('login faild,Please check your network');
    }
  }

  fbLibrary() {
    this.lazy.loadScript(`https://connect.facebook.net/en_US/sdk.js`).then(e => {
      if (e.status === 'ok') {
        // tslint:disable-next-line: no-string-literal
        window['FB'].init({
          appId: this.config.facebook_appid,
          cookie: true,
          xfbml: true,
          version: 'v7.0',
        });

        // tslint:disable-next-line: no-string-literal
        window['FB'].AppEvents.logPageView();
      }
    });
  }
}
