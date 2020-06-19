import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselPickerComponent } from './vessel-picker.component';

describe('VesselPickerComponent', () => {
  let component: VesselPickerComponent;
  let fixture: ComponentFixture<VesselPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VesselPickerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
