import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd';
import { finalize } from 'rxjs/operators';
import { I18nMessageService } from '@co/common';
import { CRMCustomerExternalService, CRMContactExternalService } from '../crm';
import { SSORoleService } from '@co/cds';
import { CO_SESSIONSERVICE_TOKEN, ISessionService } from '@co/core';

interface UserInfo {
  tenantId: number;
  id: number;
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  phoneNumber: string;
  isActive: boolean;
  password: string;
  serviceCustomerId?: any;
}

function mobileValidator(control: FormControl): any {
  const phoneReg = /^[\d+\-]{0,30}$/;
  const valid = phoneReg.test(control.value);
  return valid ? null : { mobile: control.value };
}

@Component({
  selector: 'app-user-form-modal',
  templateUrl: './user-form-modal.component.html',
  styleUrls: ['./user-form-modal.component.less'],
})
export class UserFormModalComponent implements OnInit {
  @ViewChild('submitButton') submitButton: ElementRef<HTMLButtonElement>;
  @Input() partnerId: string;
  @Input() phoneRequired = true;
  @Output() modalClose = new EventEmitter<boolean | (UserInfo & { contactId: string })>();
  @Input() @InputBoolean() needNotification = false;
  @Input() createOnly = true;
  @Input() type = false;
  @Input() locationCustomerId;
  customerId: string | null = null;

  id: string;
  locationId: string;
  validateForm: FormGroup;
  visible = false;
  userInfo: UserInfo;
  tabIndex = 0;
  loading = false;
  customer;
  roleList = [];

  constructor(
    private formbuilder: FormBuilder,
    private crmContactExternalService: CRMContactExternalService,
    private msg: I18nMessageService,
    private ssoService: SSORoleService,
    private crmCustomerExternalService: CRMCustomerExternalService,
    @Inject(CO_SESSIONSERVICE_TOKEN) private sessionService: ISessionService,
  ) {
    this.validateForm = this.formbuilder.group({
      partnerId: [null],
      surname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      phone: ['', this.phoneRequired ? [Validators.required, mobileValidator] : []],
      email: ['', [Validators.required, Validators.email]],
      position: [null],
      roles: [[]],
    });
  }

  ngOnInit() {}

  show(id?: string, locationId?: string, customerId?: string) {
    this.id = id!;
    this.locationId = locationId!;
    this.customerId = customerId!;
    this.visible = true;
    this.validateForm.reset();
    this.validateForm.controls.roles.setValue([]);
    this.crmCustomerExternalService.get({ id: this.sessionService.data.session.user.customerId }).subscribe((result: any) => {
      this.customer = result;

      if (this.id) {
        this.crmContactExternalService.get({ id: this.id }).subscribe((dto: any) => {
          this.validateForm.patchValue(dto);
          if (dto.role) {
            this.validateForm.controls.roles.setValue([dto.role]);
          }
          this.getRoles(dto.isMainAccount);
          this.userInfo = dto.userInfo;
        });
      } else {
        this.getRoles(false);
      }
    });
  }

  dismiss(success = false) {
    this.visible = false;
    if (success) {
      this.msg.success('Success');
    }
    this.modalClose.emit(success);
  }

  confirm() {
    this.submitButton.nativeElement.click();
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (!this.validateForm.valid) return;
    this.loading = true;
    if (this.id) {
      const param = { ...this.validateForm.value, id: this.id, customerId: this.customerId };
      this.crmContactExternalService
        .update(param)
        .pipe(finalize(() => (this.loading = false)))
        .subscribe((dto: any) => {
          this.dismiss(true);
        });
    } else {
      const param = {
        ...this.validateForm.value,
        locationId: this.locationId,
        isSignUp: !this.createOnly,
        customerId: this.customerId,
      };
      if (this.partnerId) {
        param.partnerId = this.partnerId;
      }
      if (this.type) {
        param.customerId = this.locationCustomerId || this.customerId;
      }
      // todo refactor service :createContact
      this.crmContactExternalService
        .createForCustomer(param)
        .pipe(finalize(() => (this.loading = false)))
        .subscribe(
          (data: any) => {
            this.dismiss(data);
            /*if (data) {
            this.newUserSetting.userId = data.id
            this.newUserSetting.tenantId = data.tenantId
            this.newUserSetting.name = data.name + ' ' + data.surname
            this.newUserSetting.show()
          }*/
          },
          error => {},
        );
    }
  }

  getRoles(isParent: boolean) {
    if (isParent) {
      this.ssoService.getParentRoles({ parentId: this.customer.editionRoleId, type: 1 }).subscribe(data => {
        this.roleList = data.items;
      });
    } else {
      this.ssoService.getParentOrChildrens({ parentId: this.customer.editionRoleId, type: 1 }).subscribe(data => {
        this.roleList = data.items;
      });
    }
  }
}
