import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[coLimitInput]',
})
export class CoLimitInputDirective {
  /**
   * 可以是字符串或自定义的正则表达式
   * -- 字符串的时候就找内置的一些正则表达式
   * -- 正则表达式的时候直接使用
   */
  @Input() replace: string | RegExp;

  // 限制输入的正则表达式
  _regexp: RegExp;

  isComposite: boolean = false;

  /**
   * 对复杂的业务传入方法
   */
  @Input() replaceFn: (e) => {};
  // replaceFn = (el: ElementRef) => {
  //   console.log('replaceFn');
  //   const regexp = /\d*\.?\d{0,8}/g;
  //   const match = el.nativeElement.value.match(regexp);
  //   el.nativeElement.value =  match? match[0]: '';
  // };

  constructor(private el: ElementRef, private control: NgControl) {}

  /**
   * 选词输入开始
   */
  @HostListener('compositionstart') onCompositionStart() {
    this.isComposite = true;
  }

  /**
   * 选词输入结束（确定输入或取消输入）
   */
  @HostListener('compositionend', ['$event']) onCompositionEnd($event) {
    this.isComposite = false;
    this.limitInput($event);
  }

  @HostListener('change') onChange() {
    this.control?.control?.setValue(this.el.nativeElement.value);
  }

  /**
   * 应对输入被格式化导致不接发change事件的问题。所以这里在blur的时候也进行重新赋值
   */
  @HostListener('blur', ['$event']) onBlur($event) {
    this.control?.control?.setValue(this.el.nativeElement.value);
  }

  /**
   * 正常输入
   */
  @HostListener('input', ['$event']) onInput($event) {
    this.limitInput($event);
  }

  private limitInput($event) {
    if (!this.el.nativeElement.value || this.isComposite) {
      return;
    }
    if (this.replaceFn) {
      this.replaceFn(this.el);
      return;
    } else {
      this._regexp = this.getRegexp(this.replace);
      this.el.nativeElement.value = this.el.nativeElement.value.replace(this._regexp, '');
    }
  }

  private getRegexp(str) {
    if (typeof str === 'object') {
      return str;
    }
    let regexp;
    switch (str) {
      case 'en':
        regexp = /(^\s|[\u4e00-\u9fa5])/g;
        break;
      case 'number':
        regexp = /[^0-9]/gi;
        break;
      case 'number|letter':
        regexp = /[^\d|\w]/gi;
        break;
      case 'float':
        regexp = /[^\d|\.]/gi;
        break;
      case 'notChinese':
        regexp = /[\u4E00-\u9FA5]/g;
        break;
    }
    return regexp;
  }
}
