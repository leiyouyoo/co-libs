import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <co-ellipsis length="100">{{ article }}</co-ellipsis>
    <h4 class="mt-lg">Show Tooltip</h4>
    <co-ellipsis length="100" tooltip>{{ article }}</co-ellipsis>
  `,
})
export class EllipsisNumberComponent {
  article =
    'There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.';
}
