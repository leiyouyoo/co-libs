
import { InjectionToken } from '@angular/core';

export const CoCommonConfigToken = new InjectionToken('CoCommonConfig');

export interface CoHttpClientConfig {
  /**
   * 空值处理，默认：`include`
   * - include：包含
   * - ignore：忽略
   */
  nullValueHandling?: 'include' | 'ignore';
  /**
   * 时间值处理，默认：`timestamp`
   * - timestamp：时间戳
   * - ignore：忽略处理，保持原始状态
   */
  dateValueHandling?: 'timestamp' | 'ignore';

  SERVER_URL: string;
  LOGIN_URL?: string;
}

export interface CoCommonConfig {
  httpClient: CoHttpClientConfig;
}
