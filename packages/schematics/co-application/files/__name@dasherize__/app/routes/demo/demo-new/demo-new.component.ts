import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CoPageBase } from '@co/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: '<%= name %>-demo-new',
  templateUrl: './demo-new.component.html',
  styleUrls: ['./demo-new.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoNewComponent extends CoPageBase {

}
