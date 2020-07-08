import { Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ACLService } from './acl.service';
import { ACLCanType, ACLControlType } from './acl.type';

@Directive({
  selector: '[co-acl]',
  exportAs: 'coAcl',
})
export class ACLDirective implements OnDestroy {
  private _value: ACLCanType;
  private _controlType: ACLControlType = "visibled";
  private change$: Subscription;

  @Input('co-acl')
  set acl(value: ACLCanType) {
    this.set(value);
  }


  @Input('co-acl-control')
  set control(control: ACLControlType) {
    this._controlType = control;
  }


  @Input('co-acl-ability')
  set ability(value: ACLCanType) {
    this.set(this.srv.parseAbility(value));
  }

  private set(value: ACLCanType) {
    this._value = value;
    const CLS = 'acl__hide';

    const el = this.el.nativeElement;
    if (this._controlType === 'visibled') {
      if (this.srv.can(this._value)) {
        this.renderer.removeClass(el, CLS);
      } else {
        this.renderer.addClass(el, CLS);
      }
    } else {
      debugger
      if (typeof el.readOnly !== undefined && this._controlType === 'readonly') {
        if (this.srv.can(this._value)) {
          el.readOnly = false;
        } else {
          el.readOnly = true;
        }
      } else {
        if (this.srv.can(this._value)) {
          el.disabled = false;
        } else {
          el.disabled = true;
        }
      }
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2, protected srv: ACLService) {
    this.change$ = this.srv.change.pipe(filter(r => r != null)).subscribe(() => this.set(this._value));
  }

  ngOnDestroy(): void {
    this.change$.unsubscribe();
  }
}
