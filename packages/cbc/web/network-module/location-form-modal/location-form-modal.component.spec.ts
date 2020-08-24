import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationFormModalComponent } from './location-form-modal.component';

describe('LocationFormModalComponent', () => {
  let component: LocationFormModalComponent;
  let fixture: ComponentFixture<LocationFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocationFormModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
