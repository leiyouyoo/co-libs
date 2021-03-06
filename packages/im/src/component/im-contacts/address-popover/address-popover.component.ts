import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImService } from '../../../service/im.service';

@Component({
  selector: 'lib-address-popover',
  templateUrl: './address-popover.component.html',
  styleUrls: ['./address-popover.component.less'],
})
export class AddressPopoverComponent implements OnInit {
  @Input() contact: any;
  @Input() fromType = 'csp';
  @Input() currentRadio = 'service';
  @Output() contactsDbClick: EventEmitter<any> = new EventEmitter<any>();

  addressVisible: boolean;
  constructor(private imTemplateService: ImService) {}

  ngOnInit() {}
  addressVisibleChange(value: boolean): void {
    console.log(value);
  }
  /**
   * 是否为通讯录点击的
   */
  chatWithPerson(personInfo) {
    this.contactsDbClick.emit({ ...personInfo });
  }
  formatImAvatarUrl(fileId) {
    return this.imTemplateService.formatImAvatarUrl(fileId);
  }
}
