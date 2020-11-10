import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBConfigureModel, PUBConfigure, PUBQueryBankDirectAccountInfo, PUBQueryGLCodeInput, PUBGLCodeModel } from './pub.types';

@BaseUrl('/pub/Configure')
@Injectable({ providedIn: 'root' })
export class PUBConfigureService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * @param url /PUB/Configure/GetAccountNoByBankShortNameList
   * 获取银行账户根据 银行短名
   */

  @GET('getAccountNoByBankShortNameList')
  getAccountNoByBankShortNameList(
    @Payload
    _req: {
      shortName?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetAccountNoByCompany
   * 根据公司获取所有银行账号
   */

  @GET('getAccountNoByCompany')
  getAccountNoByCompany(
    @Payload
    _req: {
      companyId?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetBankShortNameList
   * 获取简写公司列表
   */

  @GET('getBankShortNameList')
  getBankShortNameList(
    @Payload
    _req: {},
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetBnakAccountList
   * 获取银行账户列表
   */

  @POST('getBnakAccountList')
  getBnakAccountList(
    @Payload
    _req: {
      companyId?: string;
      shortName?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetCompanyListByShortName
   * 获取公司列表 根据银行短名
   */

  @POST('getCompanyListByShortName')
  getCompanyListByShortName(
    @Payload
    _req: {
      shortName?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetCompayBank
   * 获取公司银行列表
   */

  @POST('getCompayBank')
  getCompayBank(
    @Payload
    _req: {
      companyId?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetCompayBankByUser
   * 根据用户获取银行列表
   */

  @POST('getCompayBankByUser')
  getCompayBankByUser(
    @Payload
    _req: {
      userId?: number;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetConfigureModelAsync
   * 获取公司配置信息
   */

  @POST('getConfigureModelAsync')
  getConfigureModelAsync(
    @Payload
    _req: {
      companyId?: string;
    },
  ): Observable<PUBConfigureModel> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetConfigureBankAccountListAsync
   * 获取银行账号
   */

  @POST('getConfigureBankAccountListAsync')
  getConfigureBankAccountListAsync(
    @Payload
    _req: {
      companyId?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetExchangeRateAsync
   * 获取汇率
   */

  @POST('getExchangeRateAsync')
  getExchangeRateAsync(
    @Payload
    _req: {
      date?: string;
      sourceCurrency?: string;
      targetCurrency?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetExchangeRateListAsync
   * 获取汇率集合
   */

  @POST('getExchangeRateListAsync')
  getExchangeRateListAsync(
    @Payload
    _req: {
      date?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetExchangeRateListByDatesAsync
   * 获取汇率集合
   */

  @POST('getExchangeRateListByDatesAsync')
  getExchangeRateListByDatesAsync(
    @Payload
    _req: {},
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetGLCodeListByUserAsync
   * 获取会计科目集合
   */

  @POST('getGLCodeListByUserAsync')
  getGLCodeListByUserAsync(
    @Payload
    _req: {
      userId?: number;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetSolutionGLConfigListByUserAsync
   * 获取会计科目集合
   */

  @POST('getSolutionGLConfigListByUserAsync')
  getSolutionGLConfigListByUserAsync(
    @Payload
    _req: {
      userId?: number;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetBankDirectModelAsync
   * 获取银企直连信息
   */

  @POST('getBankDirectModelAsync')
  getBankDirectModelAsync(
    @Payload
    _req: PUBQueryBankDirectAccountInfo,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/UpBankDirectActnbrAsync
   * 更新银企直连账号信息
   */

  @POST('upBankDirectActnbrAsync')
  upBankDirectActnbrAsync(
    @Payload
    _req: {},
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetGLCodeAsync
   * 获取会计科目
   */

  @POST('getGLCodeAsync')
  getGLCodeAsync(
    @Payload
    _req: PUBQueryGLCodeInput,
  ): Observable<PUBGLCodeModel> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetGLCodeListAsync
   * 获取会计科目集合
   */

  @POST('getGLCodeListAsync')
  getGLCodeListAsync(
    @Payload
    _req: {
      companyId?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetSolutionGLConfigListAsync
   * 获取解决方案会计科目配置集合
   */

  @POST('getSolutionGLConfigListAsync')
  getSolutionGLConfigListAsync(
    @Payload
    _req: {
      companyId?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetSolutionCurrencyListByCompany
   * 根据公司获取解决方案币种
   */

  @GET('getSolutionCurrencyListByCompany')
  getSolutionCurrencyListByCompany(
    @Payload
    _req: {
      companyId?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /PUB/Configure/GetConfigureAsync
   * 获取公司配置
   */

  @GET('getConfigureAsync')
  getConfigureAsync(
    @Payload
    _req: {
      companyId?: string;
    },
  ): Observable<PUBConfigure> {
    return null as any;
  }
}
