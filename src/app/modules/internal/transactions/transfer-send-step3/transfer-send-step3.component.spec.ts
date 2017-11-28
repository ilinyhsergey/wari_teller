import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSendStep3Component } from './transfer-send-step3.component';

describe('TransferSendStep3Component', () => {
  let component: TransferSendStep3Component;
  let fixture: ComponentFixture<TransferSendStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferSendStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferSendStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
