import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <co-ellipsis lines="3" tooltip style="width: 200px">
      <p>
        There were injuries alleged in three <a href="#cover">cases in 2015</a>, and a fourth incident in September, according to the safety
        recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.
      </p>
    </co-ellipsis>
  `,
})
export class EllipsisLineComponent {}
