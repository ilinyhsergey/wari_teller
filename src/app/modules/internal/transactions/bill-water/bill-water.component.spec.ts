import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillWaterComponent } from './bill-water.component';

describe('BillWaterComponent', () => {
  let component: BillWaterComponent;
  let fixture: ComponentFixture<BillWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
