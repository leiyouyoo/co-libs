import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoCommonModule } from '@co/common';
import { TranslateModule } from '@ngx-translate/core';
// tslint:disable-next-line: import-blacklist
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxMoveableModule } from 'ngx-moveable';

import { ChatHistoryComponent } from './component/chat-history/chat-history.component';
import { ImBookingDetailComponent } from './component/im-booking-detail/im-booking-detail.component';
import { AddressPopoverComponent } from './component/im-contacts/address-popover/address-popover.component';
import { ImContactsComponent } from './component/im-contacts/im-contacts.component';
import { ImEmojiComponent } from './component/im-emoji/im-emoji.component';
import { ImFileListsComponent } from './component/im-file-lists/im-file-lists.component';
import { ImQuoteDetailComponent } from './component/im-quote-detail/im-quote-detail.component';
import { ImShipmentDetailComponent } from './component/im-shipment-detail/im-shipment-detail.component';
import { ImShipmentStepComponent } from './component/im-shipment-detail/im-shipment-step/im-shipment-step.component';
import { ImageCropperComponent } from './component/image-cropper/image-cropper.component';
import { ImagePreviewerComponent } from './component/image-previewer/image-previewer.component';
import { ImgElementComponent } from './component/img-element/img-element.component';
import { ScheduleMessageComponent } from './component/schedule-message/schedule-message.component';
import { TextElementComponent } from './component/text-element/text-element.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { ImComponent } from './im.component';
import { ImDebounceInputDirective } from './service/directive/DebounceInput.Directive';
import { ImBroadcastService } from './service/im-broadcast.service';
import { ImService } from './service/im.service';
import { CustomerLifeCyclePipe } from './service/pipe/customer-life-cycle.pipe';
import { IMArrayJoinPipe } from './service/pipe/im-array-join.pipe';
import { ImTranslatePipe } from './service/pipe/im-translate.pipe';
import { FileManageService } from './util/file-manage/service/file-manage.service';
import { ShipmentStepComponent } from './component/im-shipment-detail/shipment-step/shipment-step.component';
import { RouterModule } from '@angular/router';

const components = [
  ImagePreviewerComponent,
  ImEmojiComponent,
  ImgElementComponent,
  ImComponent,
  TextElementComponent,
  ImContactsComponent,
  UserInfoComponent,
  ImShipmentDetailComponent,
  ImShipmentStepComponent,
  AddressPopoverComponent,
  ImBookingDetailComponent,
  ImQuoteDetailComponent,
  ChatHistoryComponent,
  ScheduleMessageComponent,
  ImFileListsComponent,
  ImageCropperComponent,
  ShipmentStepComponent,
];
const directive = [ImDebounceInputDirective];
const pipe = [CustomerLifeCyclePipe, IMArrayJoinPipe, ImTranslatePipe];
const service = [ImBroadcastService, ImService, FileManageService];
@NgModule({
  declarations: [...components, ...directive, ...pipe],
  providers: [...service],
  imports: [CoCommonModule, CommonModule, TranslateModule, NgZorroAntdModule, FormsModule, NgxMoveableModule, ],
  exports: [...components, ...directive, ...pipe],
})
export class CoImModule {}
