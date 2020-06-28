import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagePickerComponent } from './voyage-picker.component';

describe('VoyagePickerComponent', () => {
  let component: VoyagePickerComponent;
  let fixture: ComponentFixture<VoyagePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyagePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
