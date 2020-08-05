import { Injector, Component, OnInit, Optional, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoPageBase } from '@co/core';

@Component({
  selector: 'dev-page',
  template: `
    <page-header></page-header>
    <p>now: {{ now | json }}</p>
    page: {{ router.url | json }}
  `,
})
export class DevPageComponent extends CoPageBase implements OnInit {
  now = +new Date();

  constructor(public router: ActivatedRoute, @Optional() protected injector: Injector) {
    super(injector);
  }

  coOnInit(): void {
    const session = this.$session.user;

    console.log(`coOnInit${JSON.stringify(session)}`);
    this.$titleSrvice.setTitle('aaaaaaaaaaaaaaaaa');
  }

  coAfterViewInit(): void {
    console.log('coAfterViewInit');
  }

  coOnDeactived(): void {
    console.log('coOnDeactived');
  }

  coOnChanges(changes: SimpleChanges): void {
    console.log('coOnChanges');
  }

  coOnDestroy(): void {
    console.log('coOnChanges');
  }
}
