import { Component, ElementRef, HostListener, Inject, Input, OnInit, Optional, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { ACLService } from '@co/acl';
import { SocialService } from '@co/auth';
import { GlobalEventDispatcher } from '@co/cms';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import moment from 'moment';
// tslint:disable-next-line: import-blacklist
import { NzModalService } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd/message';
import { filter } from 'rxjs/operators';
import { ImContactsComponent } from './component/im-contacts/im-contacts.component';
import { ImService } from './service/im.service';
import {
  addGroupNumber,
  createFileMessage,
  createGroup,
  createImageMessage,
  createTextMessage,
  getConversationList,
  getGroupMemberlist,
  getGroupProfile,
  getMyProfile,
  getUserProfile,
  onConversationUpdate,
  onKickedOut,
  onMessage,
  onSDKReady,
  sendmessage,
  setMessageRead,
  updateGroupProfile,
  updateMyProfile,
} from './service/IMservices';
import { FileManageService } from './util/index';

@Component({
  selector: 'co-im',
  templateUrl: './im.component.html',
  styleUrls: ['./im.component.less'],
  providers: [SocialService],
})
export class ImComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private imTemplateService: ImService,
    private nzMessageService: NzMessageService,
    private fileManageService: FileManageService,
    private el: ElementRef,
    private router: Router,
    private modalService: NzModalService,
    private aclService: ACLService,
    private socialService: SocialService,
    private sanitizer: DomSanitizer,
    private globalEventDispatcher: GlobalEventDispatcher,
  ) {
    this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe((route: any) => {
      this.compareUrl(route.url);
    });
  }
  userMsg = JSON.parse(localStorage.getItem('co.session') || 'null');
  @ViewChild('imageUpload') imageChild: ElementRef;
  @ViewChild('fileUploadElement') fileChild: ElementRef;
  @ViewChild('avatarUploadElement') avatarChild: ElementRef;
  @ViewChild('imContacts') imContactsElement: ImContactsComponent;
  @ViewChild('scrollMe') myScrollContainer: ElementRef;
  cropper: any;
  visible: boolean;
  isVisible = false;
  isChat = false;
  isSchedule = false; // ?????????????????????
  emojiContentVisible = false; // ????????????
  avatarContentVisible = false; // ????????????????????????
  showAddMemberContent = false; // ?????????????????????
  editGroupName = true; // ???????????????
  editGroupNotification = true; // ???????????????
  conversationsList: Array<any> = []; // ????????????
  searchConversationsList: Array<any> = []; // ????????????
  chatMessageList: Array<any> = []; // ??????????????????
  allMessage = true; // ?????????????????????
  selectedItem: any; // ?????????????????????
  searchText = '';
  selectIconType = '';
  nowTime: string; // ????????????
  currentWindowShowType = 'chat';
  iconList: Array<any> = [];
  pageInfo = {
    maxResultCount: 10,
    skipCount: 0,
  };
  forwardPageInfo = {
    maxResultCount: 10,
    skipCount: 0,
  };
  myImId = this.userMsg?.session?.user?.id;
  inputValue = '';
  isC2C = false;
  fromId = '';
  membersList = []; // ???????????????
  groupInfo = { notification: '', ownerID: '', introduction: '', name: '', avatar: '', groupID: '' };
  imgUrlList: any[];
  showPreviewer: boolean;
  isSelectItem: boolean = false;
  myProfile: any; // ????????????
  groupInfoCopy: any;
  messageId: any; // ???????????????????????????id
  globelPersonList: Array<any> = []; // ????????????????????????
  hideBottomShowMore: boolean; // ?????????????????????????????????
  hideTopShowMore: boolean; // ?????????????????????????????????
  showCustomerservice = false; // ????????????????????????
  customerserviceId: string | null = null; // ??????????????????id
  customerserviceType: string; // ????????????????????????
  iconListSeleted: { class: string; type: string }[] = [];
  iconListUnselected: { class: string; type: string }[] = [];
  imageFile: File; // ???????????????????????????
  showCropper: boolean; // ????????????
  bussineNoForGroupName: any;
  ImSDKReady: boolean;
  userProfile: any; // ??????????????????
  @Input() fromType = 'csp';
  @ViewChild('ImContainer') ImContainer: ElementRef;
  frame = {
    translate: [0, 0],
  };
  @HostListener('document:click', ['$event.target'])
  onClick($event: HTMLElement) {
    let isPreviewerClose = false;
    if (!($event as HTMLElement).hasAttribute('edit-group')) {
      this.editGroupNotification = true;
      this.editGroupName = true;
    }
    if (
      $event.parentNode &&
      $event?.parentNode?.parentNode &&
      ($event?.parentNode?.parentNode as HTMLElement).hasAttribute('data-im-input-show')
    ) {
      isPreviewerClose = true;
    }
    const isEmojiPopover = $event.classList.contains('cdk-overlay-backdrop');
    const isContactsPopover = $event.classList.contains('ant-popover-title');
    const clickedInside = this.ImContainer.nativeElement.contains($event);
    if (
      !isEmojiPopover &&
      !isContactsPopover &&
      !isPreviewerClose &&
      $event.tagName &&
      !clickedInside &&
      $event.nodeName !== 'path' &&
      $event.nodeName !== 'svg' &&
      !($event as HTMLElement).hasAttribute('data-im-input-show') &&
      !$event.classList.contains('ant-popover-inner-content')
    ) {
      this.closeImLayout();
      this.isChat = false;
      this.isSelectItem = true;
    }
  }
  onDragStart({ set }) {
    set(this.frame.translate);
  }
  onDrag({ target, beforeTranslate }) {
    this.frame.translate = beforeTranslate;
    target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
  }
  onDragEnd({ target, isDrag, clientX, clientY }) {
    if (this.frame.translate[0] + document.body.clientWidth < 200 * target.childElementCount) {
      this.frame.translate[0] = 200 * target.childElementCount - document.body.clientWidth;
    } else if (this.frame.translate[0] > 0) {
      this.frame.translate[0] = 0;
    }
    if (this.frame.translate[1] + document.body.clientHeight < 32) {
      this.frame.translate[1] = 32 - document.body.clientHeight;
    } else if (this.frame.translate[1] > 0) {
      this.frame.translate[1] = 0;
    }
    target.style.transform = `translate(${this.frame.translate[0]}px, ${this.frame.translate[1]}px)`;
    // tslint:disable-next-line: no-unused-expression
    !isDrag && this.showImLayout();
  }
  ngOnInit() {
    this.globalEventDispatcher.register('chatWithIM').subscribe((res: any) => {
      if (res.isCreateGroup) {
        createGroup({
          type: 'private',
          name: res.name,
          memberList: res.memberList, // ??????????????? memberList?????????????????? userID
        })
          .then(res => {
            const groupInfo = res.data.group;
            const params = {
              conversationID: groupInfo.groupID,
              C2C: false,
              id: groupInfo.groupID,
              groupName: groupInfo.name,
            };
            this.onCustomerservice(params, groupInfo.groupID);
          })
          .catch(err => {
            this.nzMessageService.error(err);
          });
      } else {
        this.customerserviceType = res.customerserviceType;
        this.customerserviceId = res.customerserviceId;
        this.onCustomerservice(res);
      }
    });

    this.handleImConversation();
    this.compareUrl();
  }
  checkAnonymous(): boolean {
    if (this.aclService.can('r: Anonymous')) {
      this.modalService.confirm({
        nzTitle: this.translate.instant('This operation need to login first'),
        nzIconType: 'info-circle',
        nzOkText: this.translate.instant('Login'),
        nzOnOk: () => {
          // this.socialService.logout();
        },
        nzOnCancel: () => {},
      });
      return true;
    }
    return false;
  }
  // ????????????????????????
  onCustomerservice(info, conversationId = null) {
    if (this.checkAnonymous()) {
      return;
    }
    this.isVisible = true;
    const arr = this.checkConversationList(conversationId, info?.isC2C);
    if (arr.length) {
      this.showChat(arr[0], true);
    } else if (!info?.isC2C) {
      const item = {
        bussinessType: this.customerserviceType?.toLowerCase(),
        type: 'GROUP',
        disbandGroupFlage: true,
        groupProfile: {
          groupID: `${this.customerserviceType}${this.customerserviceId}`,
          name: this.customerserviceType,
        },
        lastMessage: { messageForShow: '' },
        name: this.customerserviceType,
        conversationID: `GROUP${this.customerserviceType}${this.customerserviceId}`,
      };
      this.conversationsList.unshift(item);
      this.showChat(item, true);
    } else {
      // ??????????????????????????????
      this.chatWithPerson(info?.personInfo, true);
    }
  }
  // ??????url???????????????????????????
  compareUrl(url?: string) {
    this.customerserviceId = null;
    this.showCustomerservice = false;
    if (!url) {
      url = location.href;
    }
    if (url.indexOf('/bookings/BookingView') !== -1) {
      this.customerserviceId = url.split('BookingId=')[1]?.substr(0, 36);
      this.customerserviceType = 'Booking';
    } else if (url.indexOf('/crm/booking/bookinglist/bookingDetail/') !== -1) {
      this.customerserviceId = url.split('booking/bookinglist/bookingDetail/')[1]?.substr(0, 36);
      this.customerserviceType = 'Booking';
    } else if (url.indexOf('crm/quotes/quoteslist/quotesDetail/') !== -1) {
      this.customerserviceId = url.split('crm/quotes/quoteslist/quotesDetail/')[1]?.substr(0, 36);
      this.customerserviceType = 'Quote';
    } else if (url.indexOf('/quotes/QuotesDetail') !== -1) {
      this.customerserviceId = url.split('quotes/Quoteil/')[1]?.substr(0, 36);
      this.customerserviceType = 'Quote';
    } else if (url.indexOf('/shipments/detail/') !== -1) {
      this.customerserviceId = new URLSearchParams(`?` + url.split(`?`)[1])?.get('id');
      this.customerserviceType = 'Shipment';
    } else {
      return;
    }
    this.showCustomerservice = true;
  }
  // ????????????????????????????????????
  checkConversationList(conversationId?, isC2C = false) {
    let id: string;
    if (conversationId) {
      id = conversationId;
    } else if (!isC2C) {
      id = `GROUP${this.customerserviceType}${this.customerserviceId}`;
    } else {
      id = `C2C${this.customerserviceId}`;
    }
    return this.conversationsList.filter((e: any) => {
      return e.conversationID === id;
    });
  }
  closeImLayout($event?) {
    this.isVisible = false;
    if ($event) {
      $event.stopPropagation();
    }
  }

  closeChatDiv($event?) {
    this.isChat = false;
    this.isSelectItem = true;
    // tslint:disable-next-line: no-unused-expression
    $event && $event.stopPropagation();
  }

  handleImConversation() {
    const initConversationList = list => {
      this.compareUrl();
      const systemList = list.filter(e => {
        return e.type === '@TIM#SYSTEM';
      });
      systemList.forEach(ele => {
        if (ele?.lastMessage?.type === 'TIMGroupSystemNoticeElem' && ele?.lastMessage?.payload?.operationType === 5) {
          if (this.selectedItem?.groupProfile?.groupID === ele?.lastMessage?.payload?.groupProfile?.groupID) {
            this.cancleChatDiv();
          }
        }
      });
      list = list.filter(e => {
        return e.type !== '@TIM#SYSTEM';
      });

      list.forEach(ele => {
        if (ele.type === 'C2C') {
          ele.bussinessType = ele.type;
          ele.name = ele.userProfile.userID;
          const message = ele.lastMessage.payload.text;
          if (
            ele.lastMessage.type === 'TIMTextElem' &&
            message.includes('RemindStartTime') &&
            message.includes('RemindEndTime') &&
            this.isJSON(message)
          ) {
            const data = JSON.parse(message);
            ele.isRemindMessage = true;
            ele.title = data.Title;
            ele.lastMessage.messageForShow = data.Content || '';
            ele.bussinessType = 'remindMessage';
          }
        } else if (ele.type !== '@TIM#SYSTEM') {
          ele.bussinessType = this.formatBussinessType(ele.conversationID);
          ele.name = ele.groupProfile.name;
        }
      });
      this.conversationsList = [...list];
      this.checkIsFromQiyeWechat();
    };
    const self = this;
    onSDKReady(async function ready() {
      self.ImSDKReady = true;
      onMessage(async function messageRecived(res) {
        const data = res.data[0];
        if (data.type === 'TIMImageElem') {
          const url = data.payload.imageInfoArray[0].imageUrl;
          data.msgBody = [{ msgContent: { ImageInfoArray: [{ URL: url }] } }];
        } else if (data.type === 'TIMFileElem') {
          data.msgBody = [
            {
              msgContent: {
                FileName: data.payload.fileName,
                Url: data.payload.fileUrl,
                FileSize: data.payload.fileSize,
                DownloadFlag: data.payload.downloadFlag,
              },
            },
          ];
        }
        if (data?.type === 'TIMGroupTipElem') {
          data?.payload?.operatorID != 'admin' &&
            (await self.imTemplateService.getUser(data?.payload?.operatorID).subscribe((r: any) => {
              data.operatorName = r.user.name;
            }));
        }
        if (self.selectedItem && data.conversationID === self.selectedItem.conversationID) {
          setMessageRead(data.conversationID);
          self.chatMessageList = self.chatMessageList.concat(data);
        }
        self.scrollBottom();
      });
      onKickedOut(function kickedOut() {
        self.nzMessageService.info(self.translate.instant('Offline notification: the account has been logged in on other devices'));
      });
      onConversationUpdate(function updateConversationList(event) {
        initConversationList(event.data);
      });
      getMyProfile().then(imResponse => {
        console.log(imResponse);
        if (imResponse) {
          self.myProfile = imResponse.data;
        }
      });

      const imRes = await getConversationList();
      if (!imRes) {
        return;
      }
      initConversationList(imRes.data.conversationList);
    });
  }

  /**
   * ???????????????????????????????????????????????????ID????????????
   */
  checkIsFromQiyeWechat() {
    const url = location.href;
    if (url.includes('conversationID')) {
      const conversationId = url
        .split('?')[1]
        .split('&')
        .filter(e => {
          return e.includes('conversationID');
        })[0]
        .split('=')[1];
      const arr = this.checkConversationList(conversationId);
      if (arr.length) {
        this.isVisible = true;
        this.showChat(arr[0], true);
      }
    }
  }
  isJSON(str) {
    if (typeof str === 'string') {
      try {
        const obj = JSON.parse(str);
        if (typeof obj === 'object' && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  /**
   * ??????????????????
   */
  formatBussinessType(conversationID: string) {
    if (conversationID.toLowerCase().startsWith('groupbooking')) {
      return 'booking';
    } else if (conversationID.toLowerCase().startsWith('grouporder')) {
      return 'order';
    } else if (conversationID.toLowerCase().startsWith('groupshipment')) {
      return 'shipment';
    } else if (conversationID.toLowerCase().startsWith('groupquote')) {
      return 'quote';
    } else if (conversationID.toLowerCase().startsWith('groupqbilling')) {
      return 'billing';
    } else {
      return 'privateGroup';
    }
  }
  /**
   * ????????????id
   */
  formatBussinessId() {
    return this.selectedItem.conversationID.toLowerCase().replace('group' + this.selectedItem.bussinessType, '');
  }
  // ??????????????????????????????
  getHometime(time) {
    return this.getImChatTime(time * 1000, 'HH:mm');
  }
  /**
   * ?????????????????????
   *
   */
  getImChatTime(time, formatType?) {
    const replaceAMPM = (e: string) => {
      return e.replace(/PM/, `${this.translate.instant('PM')}`).replace(/AM/, `${this.translate.instant('AM')}`);
    };
    const Date = moment(time);
    const currentWeek = moment().weekday(moment().weekday()).format();
    if (Date.isValid()) {
      const toDay = moment().startOf('day');
      if (Date.isSameOrAfter(toDay)) {
        return replaceAMPM(Date.format(formatType || `[${this.translate.instant('Today')}] HH:mm`));
      } else if (Date.isSameOrAfter(toDay.subtract(1, 'd')) && Date.isBefore(moment().format())) {
        return replaceAMPM(Date.format(`[${this.translate.instant('Yesterday')}] HH:mm`));
      }
      if (Date.isBefore(currentWeek)) {
        return replaceAMPM(Date.format('YYYY/MM/DD HH:mm'));
      } else {
        let week = '';
        switch (Date.format('d')) {
          case '1':
            week = this.translate.instant('Monday');
            break;
          case '2':
            week = this.translate.instant('Tuesday');
            break;
          case '3':
            week = this.translate.instant('Wednesday');
            break;
          case '4':
            week = this.translate.instant('Thursday');
            break;
          case '5':
            week = this.translate.instant('Friday');
            break;
          case '6':
            week = this.translate.instant('Saturday');
            break;
          default:
            week = this.translate.instant('Sunday');
            break;
        }
        return replaceAMPM(Date.format(`[${week}] HH:mm`));
      }
    } else {
      return '';
    }
  }

  // ????????????
  showChat(item, setTop = false) {
    this.isSchedule = false;
    if (setTop) {
      this.searchText = '';
      const index = this.conversationsList.findIndex(e => {
        return e.conversationID === item.conversationID;
      });
      if (index >= 0) {
        this.conversationsList.unshift(this.conversationsList.splice(index, 1)[0]);
      }
    }
    if (this.selectedItem && item.conversationID === this.selectedItem.conversationID && this.isChat === true) {
      return;
    } else if (item.isRemindMessage) {
      this.isSchedule = true;
    }
    this.isSelectItem = false;
    this.hideTopShowMore = false;
    this.hideBottomShowMore = false;
    this.isChat = true;
    this.pageInfo = {
      maxResultCount: 10,
      skipCount: 0,
    };
    this.forwardPageInfo = {
      maxResultCount: 10,
      skipCount: 0,
    };
    this.messageId = null;
    this.chatMessageList = [];
    // this.allMessage = false;
    this.selectedItem = item;
    if (item.unreadCount !== 0) {
      setMessageRead(item.conversationID);
    }
    if (
      this.selectedItem.bussinessType !== 'C2C' &&
      this.selectedItem.bussinessType !== 'remindMessage' &&
      this.selectedItem.bussinessType !== 'order'
    ) {
      this.isC2C = false;
      this.fromId = this.selectedItem.groupProfile.groupID;
      this.selectIconType = 'groupBussiness';
      this.iconListUnselected = [
        { class: 'icon-guanlianyewu', type: 'groupBussiness' },
        { class: 'icon-qunxinxi', type: 'info' },
        { class: 'icon-liantianwenjian', type: 'file' },
        { class: 'icon-jilu', type: 'history' },
      ];
      this.iconList = [
        { class: 'icon-guanlianyewuT', type: 'groupBussiness' },
        { class: 'icon-qunxinxi', type: 'info' },
        { class: 'icon-liantianwenjian', type: 'file' },
        { class: 'icon-jilu', type: 'history' },
      ];
      this.iconListSeleted = [
        { class: 'icon-guanlianyewuT', type: 'groupBussiness' },
        { class: 'icon-qunxinxiT', type: 'info' },
        { class: 'icon-liantianwenjianT', type: 'file' },
        { class: 'icon-jiluT', type: 'history' },
      ];
      if (this.selectedItem.disbandGroupFlage) {
        this.iconListUnselected.splice(1, 1);
        this.iconList.splice(1, 1);
        this.iconListSeleted.splice(1, 1);
      }
    } else {
      this.selectIconType = 'info';
      this.iconListUnselected = [
        { class: 'icon-geren', type: 'info' },
        { class: 'icon-liantianwenjian', type: 'file' },
        { class: 'icon-jilu', type: 'history' },
      ];
      this.iconList = [
        { class: 'icon-gerenT', type: 'info' },
        { class: 'icon-liantianwenjian', type: 'file' },
        { class: 'icon-jilu', type: 'history' },
      ];
      this.iconListSeleted = [
        { class: 'icon-gerenT', type: 'info' },
        { class: 'icon-liantianwenjianT', type: 'file' },
        { class: 'icon-jiluT', type: 'history' },
      ];
      if (this.selectedItem.bussinessType === 'order') {
        this.isC2C = false;
        this.fromId = this.selectedItem.groupProfile.groupID;
        this.iconListUnselected[0] = { class: 'icon-qunxinxi', type: 'info' };
        this.iconList[0] = { class: 'icon-qunxinxiT', type: 'info' };
        this.iconListSeleted[0] = { class: 'icon-qunxinxiT', type: 'info' };
      } else {
        this.isC2C = true;
        this.fromId = this.selectedItem.userProfile.userID;
      }
    }
    this.getChatList(false);
    this.getGroupOrUserInfo();
  }
  // ???????????????????????????
  getGroupOrUserInfo() {
    this.membersList = [];
    try {
      if (!this.isC2C) {
        try {
          getGroupMemberlist(this.fromId)
            .then(res => {
              this.membersList = res.data.memberList;
              console.log(this.membersList);
            })
            .catch(error => {
              console.log(error);
              this.nzMessageService.error(error);
            });
        } catch (error) {
          console.log(error);
          this.nzMessageService.error(error);
        }
        try {
          getGroupProfile(this.fromId)
            .then(res => {
              this.groupInfo = res.data.group;
              this.groupInfoCopy = _.cloneDeep(res.data.group);
              console.log(res);
            })
            .catch(error => {
              console.log(error);
              this.nzMessageService.error(error);
            });
        } catch (error) {
          console.log(error);
          this.nzMessageService.error(error);
        }
      } else {
        getUserProfile([this.fromId])
          .then(res => {
            this.userProfile = res.data[0];
          })
          .catch(err => {
            console.log(err);
            this.nzMessageService.error(err);
          });
      }
    } catch (error) {
      console.log(error);
      this.nzMessageService.error(error);
    }
  }
  // ??????????????????
  showChatWithMsgId(msgId) {
    console.log(msgId);
    this.messageId = msgId;
    this.pageInfo = {
      maxResultCount: 10,
      skipCount: 0,
    };
    this.forwardPageInfo = {
      maxResultCount: 10,
      skipCount: 0,
    };
    this.chatMessageList = [];
    this.getChatList(false, false);
  }
  /**
   * ??????????????????
   *
   */
  getChatList(loadMore = false, isForward = false) {
    if (!this.isC2C) {
      const params: any = {
        GroupId: this.fromId,
        MaxResultCount: this.pageInfo.maxResultCount,
        SkipCount: this.pageInfo.skipCount * this.pageInfo.maxResultCount,
      };
      if (this.messageId) {
        params.MegSeq = this.messageId;
        params.isForward = false;
        if (isForward) {
          params.SkipCount = this.forwardPageInfo.skipCount * this.forwardPageInfo.maxResultCount;
          params.isForward = true;
        }
      }
      this.imTemplateService.getGroupMsg(params).subscribe((res: any) => {
        this.handldChatList(res, null, loadMore, isForward);
      });
    } else {
      const params: any = {
        FromAccount: this.fromId,
        ToAccount: this.myImId.toString(),
        MaxResultCount: this.pageInfo.maxResultCount,
        SkipCount: this.pageInfo.skipCount * this.pageInfo.maxResultCount,
        Sorting: 'msgTime desc',
      };
      if (this.messageId) {
        params.id = this.messageId;
        params.isForward = false;
        delete params.Sorting;
        if (isForward) {
          params.SkipCount = this.forwardPageInfo.skipCount * this.forwardPageInfo.maxResultCount;
          params.isForward = true;
        }
      }
      this.imTemplateService.getC2CMsg(params).subscribe((res: any) => {
        console.log(res);
        this.handldChatList(res, params.Sorting, loadMore, isForward);
      });
    }
  }
  /**
   * // ????????????????????????
   */
  handldChatList(res, sorting, loadMore = false, isForward = false) {
    if (this.messageId && res.items.length === 0) {
      !isForward ? (this.hideBottomShowMore = true) : (this.hideTopShowMore = true);
    }
    res.items.forEach(e => {
      e.flow = e.from.toString() === this.myImId.toString() ? 'out' : 'in';
      e.anchorImgUrl = this.isC2C ? e.fromImageUrl : e.fromAccountImageUrl;
      e.type = e.msgBody[0].msgType;
      e.payload = { text: e.msgBody[0].msgContent.Text };
      e.msgTime = moment(e.msgTime).format();
    });
    if (!this.messageId) {
      res.items.reverse(); // ?????????????????????
    }
    // undo ??????????????????????????????????????????????????????????????????
    this.chatMessageList.forEach(e => {
      e.isChecked = false;
    });
    let tmpChatLists: Array<any>;
    // ??????????????????????????????????????????
    if (this.messageId) {
      if (isForward) {
        this.forwardPageInfo.skipCount++;
        tmpChatLists = res.items.concat(this.chatMessageList);
      } else {
        this.pageInfo.skipCount++;
        tmpChatLists = [...this.chatMessageList, ...res.items];
      }
    } else {
      this.pageInfo.skipCount++;
      tmpChatLists = res.items.concat(this.chatMessageList);
    }
    // ??????
    const obj = {};
    tmpChatLists = tmpChatLists.reduce((item, next) => {
      // tslint:disable-next-line: no-unused-expression
      obj[next.id] ? '' : (obj[next.id] = true && item.push(next));
      return item;
    }, []);
    const _chatList = tmpChatLists.filter(e => {
      return !e.isTimeShow;
    });
    let has5MinInclude = false;
    // ??????????????????
    const chatListWithTime: Array<any> = [];
    for (let index = _chatList.length - 1; index >= 0; index--) {
      const element = _chatList[index];
      const msgTime = moment(element.msgTime).format();
      let subtract5Min = moment(this.nowTime).subtract(5, 'minutes').format();
      if (
        !element.isChecked &&
        !element.isTimeShow &&
        !moment(this.nowTime).isSame(msgTime) &&
        !moment(msgTime).isBetween(subtract5Min, this.nowTime)
      ) {
        this.nowTime = msgTime;
        subtract5Min = moment(this.nowTime).subtract(5, 'minutes').format();
        const checkTime = i => {
          const _element = _chatList[i];
          if (has5MinInclude) {
            // ??????????????????????????????5?????????????????????5?????????????????????????????????
            chatListWithTime.unshift({ isTimeShow: true, time: _chatList[i + 1].msgTime });
            has5MinInclude = false;
          }
          chatListWithTime.unshift(_element);
          if (i - 1 >= 0) {
            const _msgTime = moment(_chatList[i - 1].msgTime).format();
            if (moment(_msgTime).isBetween(subtract5Min, this.nowTime)) {
              checkTime(--i);
              _element.isChecked = true;
            } else {
              this.nowTime = _element.msgTime;
              chatListWithTime.unshift({ isTimeShow: true, time: _element.msgTime }); // ???????????????????????????5?????????????????????
              return;
            }
          } else {
            this.nowTime = _element.msgTime;
            chatListWithTime.unshift({ isTimeShow: true, time: _element.msgTime }); // ??????????????????????????????
          }
        };
        checkTime(index);
      } else if (!element.isTimeShow && !moment(this.nowTime).isSame(msgTime) && moment(msgTime).isBetween(subtract5Min, this.nowTime)) {
        has5MinInclude = true;
        chatListWithTime.unshift(element);
      } else if (
        !element.isTimeShow &&
        moment(this.nowTime).isSame(msgTime) &&
        !chatListWithTime.some(e => {
          return e.id === element.id;
        })
      ) {
        chatListWithTime.unshift(element);
      }
    }
    this.chatMessageList = chatListWithTime;
    if (
      this.chatMessageList.filter(e => {
        return !e.isTimeShow;
      }).length >= res.totalCount
    ) {
      this.allMessage = true;
    } else {
      this.allMessage = false;
    }
    // tslint:disable-next-line: no-unused-expression
    !this.messageId && !loadMore && this.scrollBottom();
  }
  // ?????????icon????????????
  getData(data, i) {
    const arr = _.cloneDeep(this.iconListUnselected);
    arr[i] = this.iconListSeleted[i];
    this.iconList = arr;
    this.selectIconType = data;
  }
  chooseColor(data, i) {
    if (this.selectIconType === data) {
      return '#1890FF';
    }
    return;
  }
  // ????????????
  glogbelSearch() {
    const searchKey = this.searchText.toLowerCase();
    if (!searchKey) {
      this.visible = false;
      this.searchConversationsList = [];
      return;
    }
    this.globelPersonList = this.imContactsElement.searchContact(searchKey);
    const subStrForSearch = str => {
      return str.substr(str.toLowerCase().indexOf(searchKey), searchKey.length);
    };
    this.searchConversationsList = _.cloneDeep(this.conversationsList).filter(e => {
      if (e.isRemindMessage) {
        return false;
      }
      if (this.justText(e?.lastMessage?.messageForShow).toLowerCase().includes(searchKey)) {
        const msg = this.justText(e?.lastMessage?.messageForShow);
        e.lastMessage.messageForShow = this.sanitizer.bypassSecurityTrustHtml(
          msg.replace(subStrForSearch(msg), `<span style ='color: #1890ff;'>${subStrForSearch(msg)}</span>`),
        );
        return true;
      }
      if (e.groupProfile && e.groupProfile.name.toLowerCase().includes(searchKey)) {
        e.groupProfile.name = this.sanitizer.bypassSecurityTrustHtml(
          e.groupProfile.name.replace(
            subStrForSearch(e.groupProfile.name),
            `<span style ='color: #1890ff;'>${subStrForSearch(e.groupProfile.name)}</span>`,
          ),
        );
        return true;
      }
      if (e.userProfile && e.userProfile?.nick.toLowerCase().includes(searchKey)) {
        e.userProfile.nick = this.sanitizer.bypassSecurityTrustHtml(
          e.userProfile.nick.replace(
            subStrForSearch(e.userProfile.nick),
            `<span style ='color: #1890ff;'>${subStrForSearch(e.userProfile.nick)}</span>`,
          ),
        );
        return true;
      }
      return false;
    });
  }
  // ???????????????
  getAvtar(item) {
    if (item.bussinessType === 'shipment') {
      return 'assets/images/im/ship.png';
    } else if (item.bussinessType === 'booking') {
      return 'assets/images/im/bookings.png';
    } else if (item.bussinessType === 'quote') {
      return 'assets/images/im/quote.png';
    } else if (item.bussinessType === 'billing') {
      return 'assets/images/im/billing.png';
    } else if (item.bussinessType === 'order') {
      return 'assets/images/im/Order@3x.png';
    } else if (item.bussinessType === 'remindMessage') {
      return 'assets/images/im/mk_blling@3x.png';
    } else if (item.bussinessType === 'C2C') {
      return item?.userProfile?.avatar ? this.formatImAvatarUrl(item?.userProfile?.avatar) : 'assets/images/im/avatar-2.png';
    } else if (item.bussinessType === 'privateGroup') {
      return 'assets/images/im/avatar-2.png';
    } else {
      return 'assets/images/im/avatar-2.png';
    }
  }
  justText(str) {
    return str.replace(/<[^>]+>/g, '');
  }

  /**
   * ??????enter?????????ctrl+enter??????
   *
   */
  checkKeyUp(event) {
    event.stopPropagation();
    const keyCode = event.keyCode || event.which || event.charCode;
    const ctrlKey = event.ctrlKey || event.metaKey;
    // ?????? ctrl+enter ??????
    if (ctrlKey && keyCode === 13) {
      this.inputValue += '\n';
    } else if (keyCode === 13) {
      this.inputValue = this.inputValue.replace(/(?:[\n\r]*)$/g, '');
      this.send();
    }
  }
  // ??????enter??????
  checkKeyDown(e) {
    e.stopPropagation();
    // tslint:disable-next-line: deprecation
    const et = e || window.event;
    const keycode = et.charCode || et.which || et.keyCode;
    if (keycode === 13) {
      // tslint:disable-next-line: deprecation
      if (window.event) {
        // tslint:disable-next-line: deprecation
        window.event.returnValue = false;
      } else {
        e.preventDefault(); // for firefox
      }
    }
  }
  /**
   * ????????????
   *
   */
  async send() {
    this.fromId += '';
    let textMessage: any = {};
    if (this.inputValue === '' || this.fromId == null || this.inputValue === undefined) {
      return;
    }
    if (!this.inputValue.replace(/[\r\n\s+]/g, '')) {
      return;
    }
    textMessage = createTextMessage(this.fromId, this.isC2C ? 'signle' : 'group', this.inputValue);
    try {
      await sendmessage(textMessage)
        .then(imRes => {
          this.insertCurrentTime();
          const _data = _.cloneDeep(imRes.data.message);
          _data.msgKey = `${_data.sequence}_${_data.random}_${_data.time}`;
          this.chatMessageList.push(_data);
          setMessageRead(this.selectedItem.conversationID);
        })
        .catch(error => {
          console.log(error);
          this.nzMessageService.error(error.message || 'Failed to send,Please Rrefresh and try again');
        });
    } catch (error) {
      this.inputValue = '';
    }
    this.inputValue = '';
    this.scrollBottom();
  }
  // ????????????????????????
  imgUpload() {
    this.imageChild.nativeElement.click();
  }
  fileUpload() {
    this.fileChild.nativeElement.click();
  }
  // ??????????????????
  async imageChange($event) {
    const params = $event.target;
    let fileMessage: any = {};
    setMessageRead(this.selectedItem.conversationID);
    const reader = new FileReader();
    reader.readAsDataURL($event.target.files[0]);
    let localImg;

    reader.onload = async theFile => {
      localImg = theFile?.target?.result;

      const obj = {
        type: 'TIMImageElem',
        flow: 'out',
        msgBody: [
          {
            msgContent: {
              ImageInfoArray: [{ URL: localImg }],
            },
          },
        ],
        process: 0,
      };
      this.chatMessageList.push(obj);
      this.scrollBottom();
      fileMessage = createImageMessage(this.fromId, this.isC2C ? 'signle' : 'group', params, event => {
        obj.process = event;
      });
      try {
        fileMessage = await sendmessage(fileMessage);
      } catch (error) {
        this.nzMessageService.error(error);
      }
      params.value = '';
      this.scrollBottom();
    };
  }
  // ??????????????????
  async fileChange($event) {
    const params = $event.target;
    const file = params.files[0];
    if (file.size / 1024 / 1024 > 100) {
      this.nzMessageService.error(this.translate.instant('The file size exceeds 100M, cannot be sent!'));
      return;
    }
    let fileMessage: any = {};
    setMessageRead(this.selectedItem.conversationID);
    const obj = {
      type: 'TIMFileElem',
      flow: 'out',
      msgBody: [
        {
          msgContent: {
            FileName: file.name,
            Url: '',
            FileSize: file.size,
            DownloadFlag: true,
          },
        },
      ],
      process: 0,
    };
    this.chatMessageList.push(obj);
    this.scrollBottom();
    fileMessage = createFileMessage(this.fromId, this.isC2C ? 'signle' : 'group', params, event => {
      obj.process = event;
    });
    try {
      fileMessage = await sendmessage(fileMessage);
    } catch (error) {
      this.nzMessageService.error(error);
    }
    const data = fileMessage.data.message;
    Object.assign(obj, {
      msgBody: [
        {
          msgContent: {
            FileName: data.payload.fileName,
            Url: data.payload.fileUrl,
            FileSize: data.payload.fileSize,
            DownloadFlag: data.payload.downloadFlag,
          },
        },
      ],
    });
    params.value = '';
    this.scrollBottom();
  }
  onProgress(event) {
    console.log('file uploading:', event);
  }
  sendClick(event) {
    if (event.type === 'TIMImageElem') {
      this.chatMessageList.push({
        type: 'TIMImageElem',
        flow: 'out',
        msgBody: [
          {
            msgContent: {
              ImageInfoArray: [{ URL: event.payload.imageInfoArray[0].imageUrl }],
            },
          },
        ],
      });
    } else if (event.type === 'TIMFileElem') {
      this.chatMessageList.push({
        type: 'TIMFileElem',
        flow: 'out',
        msgBody: [
          {
            msgContent: {
              FileName: event.payload.fileName,
              Url: event.payload.fileUrl,
              FileSize: event.payload.fileSize,
              DownloadFlag: event.payload.downloadFlag,
            },
          },
        ],
      });
    } else {
      this.chatMessageList.push(event);
    }
    this.scrollBottom();
  }
  /**
   * ????????????????????????????????????????????????5???????????????????????????
   *
   */
  insertCurrentTime() {
    const now = moment(new Date()).format();
    const element = this.chatMessageList[this.chatMessageList.length - 1];
    if (!element) {
      // ???????????????????????????????????????
      this.chatMessageList.push({ isTimeShow: true, time: now });
      return;
    }
    const time = moment(element.msgTime).format();
    const add5Min = moment(time).add(5, 'minutes').format();
    if (!element.isTimeShow && !moment(time).isSame(now) && moment(now).isAfter(add5Min)) {
      this.chatMessageList.push({ isTimeShow: true, time: now });
    }
  }

  /**
   * ????????????
   */
  downlaodFile(msg) {
    const link = document.createElement('a');
    link.download = msg.msgBody[0].msgContent.FileName;
    link.href = this.imTemplateService.formatImAvatarUrl(msg.msgBody[0].msgContent.Url, 'raw');
    link.click();
  }
  scrollBottom() {
    if (this.myScrollContainer) {
      setTimeout(() => {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      }, 100);
    }
  }
  // ??????????????????
  showPreviewImg(event) {
    this.imgUrlList = [event];
    this.showPreviewer = true;
  }
  // ????????????
  emojiComponentChange(value: boolean) {
    console.log(value);
  }
  choosedEmoji(event): void {
    this.inputValue += event;
    this.emojiContentVisible = false;
  }

  /**
   * @notFromChat  ???????????????????????????
   */
  chatWithPerson(personInfo, notFromChat = false) {
    console.log(personInfo);
    personInfo.nick = personInfo.name || personInfo.userName || personInfo.userId || personInfo.id;
    personInfo.userID = personInfo.userID || personInfo.id;
    personInfo.userId = personInfo.userId || personInfo.id;
    personInfo.name = personInfo.name || personInfo.userName || personInfo.userId || personInfo.id;
    const newConversationID = '';
    const userInfo = {
      bussinessType: 'C2C',
      conversationID: newConversationID,
      lastMessage: {
        lastTime: new Date().valueOf() / 1000,
        messageForShow: '',
        payload: {
          text: '',
        },
        type: 'TIMTextElem',
      },
      type: 'C2C',
      unreadCount: 0,
    };
    if (!notFromChat) {
      Object.assign(userInfo, {
        userProfile: {
          userID: personInfo.userID,
          nick: personInfo.nick ? personInfo.nick : personInfo.userId,
        },
        name: personInfo.nick ? personInfo.nick : personInfo.userID,
        conversationID: 'C2C' + personInfo.userID,
      });
    } else {
      if (!personInfo.userId || !personInfo.isActive) {
        // ??????????????????
        this.nzMessageService.info(this.translate.instant('Not activated'));
        return;
      }
      Object.assign(userInfo, {
        userProfile: {
          userID: personInfo.userId,
          nick: personInfo.name ? personInfo.name : personInfo.userId,
        },
        name: personInfo.name ? personInfo.name : personInfo.userId,
        conversationID: 'C2C' + personInfo.userId,
      });
    }
    this.currentWindowShowType = 'chat';
    let checkExited: any;
    this.conversationsList.forEach((e, index) => {
      if (e.conversationID === userInfo.conversationID) {
        checkExited = { index, value: e };
      }
    });
    if (checkExited) {
      this.showChat(checkExited.value, true);
    } else {
      this.chatMessageList = [];
      setMessageRead(userInfo.conversationID);
      this.conversationsList.unshift(userInfo);
      this.showChat(userInfo);
    }
  }

  onlyShowChat(event) {
    this.isChat = true;
    this.isSelectItem = false;
    event.stopPropagation();
  }

  clearSearch(event) {
    this.searchText = '';
    event.stopPropagation();
  }

  selectTXL(e) {
    this.currentWindowShowType = 'book';
    e.stopPropagation();
  }

  cancleChatDiv(e?) {
    this.isChat = false;
    this.selectedItem = null; // ?????????????????????
    this.isSelectItem = false;
    // tslint:disable-next-line: no-unused-expression
    e && e.stopPropagation();
  }
  // ?????????????????????
  imContactsDbClick(event) {
    event.userID = event.userId;
    this.chatWithPerson(event, true);
  }

  /**
   * ???????????????
   */
  editGroupProfile() {
    if (this.groupInfoCopy.name === this.groupInfo.name && this.groupInfoCopy.notification === this.groupInfo.notification) {
      return;
    }
    updateGroupProfile({
      groupID: this.selectedItem.groupProfile.groupID,
      name: this.groupInfo.name,
      notification: this.groupInfo.notification,
    }).then(r => {
      this.groupInfoCopy = _.cloneDeep(this.groupInfo);
    });
  }
  initGroupmemberToJoin(imContacts): Array<any> {
    return [
      ...new Set(
        imContacts.calculateTotalChecked().map(e => {
          return e.userId.toString();
        }),
      ),
    ];
  }

  /**
   * ???????????????
   */
  addMemberConfirm(imContacts) {
    addGroupNumber({
      groupID: this.selectedItem.groupProfile.groupID,
      userIDList: this.initGroupmemberToJoin(imContacts),
    }).then(res => {
      this.getGroupOrUserInfo();
      this.showAddMemberContent = false;
    });
  }

  /**
   * ????????????
   */
  avtarUpload($event) {
    console.log($event.target);
    this.imageFile = $event.target.files[0];
    this.showCropper = true;
    this.avatarContentVisible = false;
    $event.target.value = '';
  }
  avtarUploadClick() {
    this.avatarChild.nativeElement.click();
  }

  // ????????????
  onEmitFile(file) {
    this.fileManageService.upload(file).subscribe((res: any) => {
      console.log(res.url);
      updateMyProfile({ avatar: res.fileId })
        .then(r => {
          this.myProfile = { ...r.data };
          this.nzMessageService.success(this.translate.instant('Successfully modified'));
          this.imTemplateService
            .UpdateUserInfo({ userId: this.userMsg?.session?.user?.id, profilePictureId: res.fileId })
            .subscribe(user => {
              console.log(user);
            });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
  formatImAvatarUrl(fileId) {
    return this.imTemplateService.formatImAvatarUrl(fileId);
  }
  showImLayout() {
    // ???????????????????????????
    if (this.checkAnonymous()) return;
    // SDk??????ready
    if (!this.ImSDKReady) return;
    this.isVisible = true;
  }
  getTotalUnreadCount() {
    let count = 0;
    this.conversationsList.forEach(e => {
      count += e.unreadCount;
    });
    return count;
  }
  onShowBussinessNo($event) {
    this.bussineNoForGroupName = $event;
  }
  isIE() {
    return this.imTemplateService.isIE();
  }
}
