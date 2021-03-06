import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@co/core';

@Component({
  selector: 'trend',
  exportAs: 'trend',
  templateUrl: './trend.component.html',
  host: {
    '[class.trend]': 'true',
    '[class.trend__grey]': '!colorful',
    '[class.trend__reverse]': 'colorful && reverseColor',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TrendComponent {
  /** 上升下降标识 */
  @Input() flag: 'up' | 'down';
  /** 是否彩色标记 */
  @Input() @InputBoolean() colorful = true;
  /** 颜色反转 */
  @Input() @InputBoolean() reverseColor = false;
}
