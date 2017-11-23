import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferWithdrawalComponent } from './transfer-withdrawal.component';

describe('TransferWithdrawalComponent', () => {
  let component: TransferWithdrawalComponent;
  let fixture: ComponentFixture<TransferWithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferWithdrawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
