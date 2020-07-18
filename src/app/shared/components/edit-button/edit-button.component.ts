import { Component, Inject, Input } from '@angular/core';
import { CO_I18N_TOKEN } from '@co/core';
import { I18NService } from '../../../core/i18n/service';
import { MetaService } from './../../../core/meta.service';

@Component({
  selector: 'edit-button',
  template: `
    <a href="{{ _full }}" target="_blank" class="edit-button" nz-tooltip nzTooltipTitle="{{ 'app.content.edit-page' | translate }}">
      <i nz-icon nzType="edit"></i>
    </a>
  `,
})
export class EditButtonComponent {
  _full: string;

  @Input()
  set item(data: any) {
    this._full = `${this.meta.github}/edit/master/${this.i18n.get(data.urls)}`;
  }

  constructor(private meta: MetaService, @Inject(CO_I18N_TOKEN) private i18n: I18NService) { }
}
