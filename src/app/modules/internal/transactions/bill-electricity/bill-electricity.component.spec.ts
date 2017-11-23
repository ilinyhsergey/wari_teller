import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillElectricityComponent } from './bill-electricity.component';

describe('BillElectricityComponent', () => {
  let component: BillElectricityComponent;
  let fixture: ComponentFixture<BillElectricityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillElectricityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
