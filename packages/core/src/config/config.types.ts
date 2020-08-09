import { InjectionToken } from '@angular/core';
import { CoACLConfig } from './acl/acl.type';
import { CoAuthConfig } from './auth/auth.type';
import { CoCacheConfig } from './cache/cache.type';
import {
  CoDateRangePickerConfig,
  CoImageConfig,
  CoLoadingConfig,
  CoPageHeaderConfig,
  CoSEConfig,
  CoSGConfig,
  CoSTConfig,
  CoSVConfig,
  CoXlsxConfig,
} from './cbc/index';
import { CoCdsConfig } from './cds/cds.type';
import { CoChartConfig } from './chart/chart.type';
import { CoCommonConfig } from './common/common.type';
import { CoIMConfig } from './im/im.type';
import { CoMapConfig } from './map/map.type';
import { CoMockConfig } from './mock/mock.type';
import { CoSFConfig } from './sf/sf.type';
import { CoThemeHttpClientConfig, CoThemeResponsiveConfig } from './theme/index';
import { CoUtilArrayConfig } from './util/array.type';

export interface CoConfig {
  dataRange?: CoDateRangePickerConfig;
  image?: CoImageConfig;
  xlsx?: CoXlsxConfig;
  loading?: CoLoadingConfig;
  pageHeader?: CoPageHeaderConfig;
  se?: CoSEConfig;
  sg?: CoSGConfig;
  sv?: CoSVConfig;
  st?: CoSTConfig;
  sf?: CoSFConfig;
  acl?: CoACLConfig;
  cds?: CoCdsConfig;
  im?: CoIMConfig;
  map?: CoMapConfig;
  auth?: CoAuthConfig;
  common?: CoCommonConfig;
  cache?: CoCacheConfig;
  chart?: CoChartConfig;
  mock?: CoMockConfig;
  utilArray?: CoUtilArrayConfig;
  themeHttp?: CoThemeHttpClientConfig;
  themeResponsive?: CoThemeResponsiveConfig;
}

export type CoConfigKey = keyof CoConfig;

export const CO_CONFIG = new InjectionToken<CoConfig>('co-config');
