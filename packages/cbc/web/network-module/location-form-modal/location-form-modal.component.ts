import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { LocationFormComponent } from '../location-form/location-form.component';
import { InputBoolean } from 'ng-zorro-antd';
import { CRMCustomerExternalService, CRMContactExternalService, CRMLocationExternalService } from '../crm';

@Component({
  selector: 'app-location-form-modal',
  templateUrl: './location-form-modal.component.html',
  styleUrls: ['./location-form-modal.component.less'],
})
export class LocationFormModalComponent implements OnInit {
  @ViewChild(LocationFormComponent) locationFormComponent: LocationFormComponent;
  _withPartners = false;
  @Input() @InputBoolean() set withPartners(val: boolean) {
    this._withPartners = val;
  }

  get withPartners() {
    return this._withPartners && !this.locationId;
  }
  @Output() modalClose = new EventEmitter<boolean>();
  locationDto;
  createLocationModalVisible = false;
  locationId = '';
  loading = false;
  customerId = null;
  partnerId = null;
  constructor(private crmLocationExternalService: CRMLocationExternalService) {}

  ngOnInit() {}

  show(id?: string, cId?, pId?) {
    this.locationId = id!;
    this.customerId = cId;
    this.partnerId = pId;
    if (this.locationId) {
      this.crmLocationExternalService.getForUpdate({ locationId: this.locationId! }).subscribe((data) => {
        this.createLocationModalVisible = true;
        this.locationDto = data as any;
      });
    } else {
      this.locationDto = null;
      this.createLocationModalVisible = true;
    }
  }

  saveLocation() {
    if (!this.locationFormComponent.checkValid()) {
      // invalid, return
      return;
    }

    this.loading = true;
    if (!this.locationId) {
      const param = { ...this.locationFormComponent.validateForm.value };
      // todo :create
      this.crmLocationExternalService
        .createCustomerLocation({
          ...this.locationFormComponent.validateForm.value,
          customerId: this.customerId,
          partnerId: this.partnerId,
        })
        .subscribe((data) => {
          this.createLocationModalVisible = false;
          this.modalClose.emit(true);
          this.loading = true;
        });
    } else {
      // todo :update
      this.crmLocationExternalService
        .updateForCustomerLocation({
          ...this.locationFormComponent.validateForm.value,
          id: this.locationId,
          customerId: this.customerId,
          partnerId: this.partnerId,
        })
        .subscribe((data) => {
          this.createLocationModalVisible = false;
          this.modalClose.emit(true);
          this.loading = true;
        });
    }
  }
}
