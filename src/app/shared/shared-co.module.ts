import { CoDatePickerModule } from '@co/cbc/basic/date-picker';
import { CoEllipsisModule } from '@co/cbc/basic/ellipsis';
import { CoImageModule } from '@co/cbc/basic/image';
import { CoNoticeIconModule } from '@co/cbc/basic/notice-icon';
import { PageHeaderModule } from '@co/cbc/layout/page-header';
import { SidebarNavModule } from '@co/cbc/layout/sidebar-nav';
import { G2BarModule } from '@co/chart/bar';
import { G2CardModule } from '@co/chart/card';
import { G2CustomModule } from '@co/chart/custom';
import { G2GaugeModule } from '@co/chart/gauge';
import { G2MiniAreaModule } from '@co/chart/mini-area';
import { G2MiniBarModule } from '@co/chart/mini-bar';
import { G2MiniProgressModule } from '@co/chart/mini-progress';
import { NumberInfoModule } from '@co/chart/number-info';
import { G2PieModule } from '@co/chart/pie';
import { G2RadarModule } from '@co/chart/radar';
import { G2SingleBarModule } from '@co/chart/single-bar';
import { G2TagCloudModule } from '@co/chart/tag-cloud';
import { G2TimelineModule } from '@co/chart/timeline';
import { TrendModule } from '@co/chart/trend';
import { G2WaterWaveModule } from '@co/chart/water-wave';
import { ReuseTabModule } from '@co/cms';

import { CbcWebComponentsModule, CoBasicCompoentsModule, CoBusinessComponentsModule, CoLayoutComponentsModule } from '@co/cbc';
import { CdsModule } from '@co/cds';

export const SHARED_DELON_MODULES = [
  CoDatePickerModule,
  CoEllipsisModule,
  CoImageModule,
  PageHeaderModule,
  CoNoticeIconModule,
  SidebarNavModule,
  G2BarModule,
  G2CardModule,
  G2CustomModule,
  G2GaugeModule,
  G2MiniAreaModule,
  G2MiniBarModule,
  G2MiniProgressModule,
  G2PieModule,
  G2RadarModule,
  G2SingleBarModule,
  G2TagCloudModule,
  G2TimelineModule,
  G2WaterWaveModule,
  NumberInfoModule,
  TrendModule,
  ReuseTabModule,
  CoBasicCompoentsModule,
  CbcWebComponentsModule,
  CoBusinessComponentsModule,
  CdsModule,
  CoLayoutComponentsModule,
];
