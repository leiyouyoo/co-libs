import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  CRMContactExternalService,
  CRMCustomerExternalService,
  CRMLocationExternalService,
  CRMPartnerExternalService,
  CRMExternalLocationDto,
} from '../crm';
import { PUBPlaceService, PUBRegionService, PUBRegionDto } from '@co/cds';

enum ViewableType {
  OnlyMyOrganization = 0,
  MyConnections = 1,
  SpecificConnections = 2,
}

@Component({
  selector: 'location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.less'],
})
export class LocationFormComponent implements OnInit {
  @ViewChild('submitButton', { static: true }) submitButton: ElementRef<HTMLButtonElement>;
  @Input() id?: number;
  @Input() partnerId?: number;
  @Input() locationDto: CRMExternalLocationDto;
  @Input() withPartners = false;
  @Input() customerId: string | null = null;
  validateForm: FormGroup;
  style = {
    flex: 'auto',
    height: '30px',
    lineHeight: '30px',
  };

  ViewableType = ViewableType;
  state: PUBRegionDto;
  stateRequired = true;
  states: PUBRegionDto[];
  region: PUBRegionDto;
  regions: PUBRegionDto[];
  contacts: any[];
  partnerList: any[] = [];
  customerPartnerList = [];
  cityList = [];
  selectpartnerId = null;
  selectcustomerId = null;
  locationToAdress = true;
  constructor(
    private fb: FormBuilder,
    private crmCustomerExternalService: CRMCustomerExternalService,
    private crmPartnerExternalService: CRMPartnerExternalService,
    private crmContactExternalService: CRMContactExternalService,
    private crmLocationExternalService: CRMLocationExternalService,
    private pubRegionService: PUBRegionService,
    private pubPlaceService: PUBPlaceService,
  ) {
    this.pubRegionService.getAll({}).subscribe(data => (this.regions = (data as any).items));
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      partnerId: [this.partnerId || ''],
      name: ['', [Validators.required]],
      countryId: [null, [Validators.required]],
      streetAddress: ['', [Validators.required]],
      streetAddress2: [''],
      streetAddressLocalization: [''],
      cityId: [null, [Validators.required]],
      provinceId: [null, [Validators.required]],
      zip: ['', [Validators.required]],
      partnerIds: [[]],
      viewableType: [ViewableType.OnlyMyOrganization],
      locationAddition: this.fb.group({
        contactIds: [[]],
        unlocode: [''],
        timezone: [''],
        isResidential: [''],
        isDock: [''],
        isUnloading: [''],
        isAppointment: [''],
        isLiveUnload: [''],
        unloadCompanyId: [''],
        isLiveLoad: [''],
        loadCompanyId: [''],
        description: [''],
      }),
    });

    if (this.withPartners) {
      this.getCompanies();
    } else {
      this.getPartnerContactList({ customerId: this.customerId, partnerId: this.partnerId });
    }
    if (this.locationDto) {
      this.regionChange(this.locationDto.countryId, true);
      this.validateForm.patchValue(this.locationDto);
    }
  }
  //TODO: 如果有 id 则获取出此地址详情（如果partnerId!=null则从_partnerLocationService获取），根据该地址的区域id初始化区域选择框

  getPartnerContactList(item) {
    const param: any = {};
    this.selectpartnerId = item.partnerId;
    this.selectcustomerId = item.customerId;
    if (this.selectpartnerId) {
      param.partnerId = this.selectpartnerId;
    }
    if (this.selectcustomerId) {
      param.customerId = this.selectcustomerId;
    }

    this.crmContactExternalService.getByCustomerOrPartner(param).subscribe(data => (this.contacts = (data as any).items));
  }

  getPartnerList() {
    let input = {
      skipCount: 0,
      maxResultCount: 1000,
    };
    this.crmPartnerExternalService.getAll(input).subscribe(resrul => {
      this.partnerList = resrul.items;
    });
  }

  getCompanies() {
    this.crmCustomerExternalService.getCustomerAndPartner({ customerId: this.customerId! }).subscribe(data => {
      this.customerPartnerList = data as any;
    });
  }

  getRegions() {}

  checkValid(): boolean {
    this.submitButton.nativeElement.click();

    // tslint:disable-next-line:forin
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    return this.validateForm.valid;
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    // tslint:disable-next-line:forin
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  onCompanyChange(e) {
    setTimeout(() => {
      this.getPartnerContactList(e);
    });
  }

  regionChange(e, isEdit = false, ev?) {
    this.pubRegionService.getAll({ parentId: e }).subscribe(data => {
      this.states = data.items;
      this.stateRequired = data.items.length > 0;
      if (!isEdit) {
        this.validateForm.controls.provinceId.setValue(null);
        this.validateForm.controls.cityId.setValue(null);
      }
      if (this.stateRequired) {
        if (isEdit) this.getCityList(this.validateForm.controls.provinceId.value);
      } else {
        this.getCityList(this.validateForm.controls.countryId.value);
      }
      this.validateForm.controls.provinceId.setValidators(this.stateRequired ? [Validators.required] : null);
    });
  }

  getCityList(regionId) {
    if (!regionId) return;
    this.pubPlaceService.getAll({ regionId, isCity: true, maxResultCount: 999 } as any).subscribe((data: any) => {
      this.cityList = data.items;
    });
  }

  showCustomerOwnFields() {
    return !(this.partnerId || this.validateForm.controls.partnerId.value);
  }

  onCreateContactClose(e) {
    if (e) {
      const arr = (this.validateForm.controls.locationAddition as FormGroup).controls.contactIds.value || [];
      arr.push(e.contactId);
      (this.validateForm.controls.locationAddition as FormGroup).controls.contactIds.setValue(arr);
    }
    this.getPartnerContactList({ customerId: this.selectcustomerId, partnerId: this.selectpartnerId });
  }
}
