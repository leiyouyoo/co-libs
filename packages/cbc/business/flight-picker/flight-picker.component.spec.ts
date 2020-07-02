import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPickerComponent } from './flight-picker.component';

describe('FlightPickerComponent', () => {
  let component: FlightPickerComponent;
  let fixture: ComponentFixture<FlightPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightPickerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
