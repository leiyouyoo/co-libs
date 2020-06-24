import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipnamePickerComponent } from './shipname-picker.component';

describe('ShipnamePickerComponent', () => {
  let component: ShipnamePickerComponent;
  let fixture: ComponentFixture<ShipnamePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipnamePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipnamePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
