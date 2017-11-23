import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRefundComponent } from './transfer-refund.component';

describe('TransferRefundComponent', () => {
  let component: TransferRefundComponent;
  let fixture: ComponentFixture<TransferRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
