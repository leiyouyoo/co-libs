import { TestBed } from '@angular/core/testing';
import { CoChartConfig } from './chart/chart.type';
import { CoConfigService } from './config.service';

describe('util: config', () => {
  let srv: CoConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoConfigService],
    });
    srv = TestBed.inject(CoConfigService);
  });

  it('#update', () => {
    expect(srv.get('chart')?.theme).toBeUndefined();
    srv.update('chart', { theme: 'dark' } as CoChartConfig);
    expect(srv.get('chart')?.theme).toBe('dark');
  });
});
