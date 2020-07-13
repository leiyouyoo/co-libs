import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoDatetimeRangePickerComponent } from './datetime-range-picker.component';

describe('DatetimeRangePickerComponent', () => {
  let component: CoDatetimeRangePickerComponent;
  let fixture: ComponentFixture<CoDatetimeRangePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoDatetimeRangePickerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoDatetimeRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
