import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CoPageBase } from '@co/core';

@Component({
  selector: '<%= name %>-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoListComponent extends CoPageBase {

  

}
