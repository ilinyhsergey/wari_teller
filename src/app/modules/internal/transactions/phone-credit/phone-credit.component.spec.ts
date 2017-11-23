import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCreditComponent } from './phone-credit.component';

describe('PhoneCreditComponent', () => {
  let component: PhoneCreditComponent;
  let fixture: ComponentFixture<PhoneCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
