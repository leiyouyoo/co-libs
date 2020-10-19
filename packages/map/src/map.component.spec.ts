import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoMapComponent } from './map.component';

describe('ShareAmapComponent', () => {
  let component: CoMapComponent;
  let fixture: ComponentFixture<CoMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
