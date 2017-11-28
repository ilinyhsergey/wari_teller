import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSendStep4Component } from './transfer-send-step4.component';

describe('TransferSendStep4Component', () => {
  let component: TransferSendStep4Component;
  let fixture: ComponentFixture<TransferSendStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferSendStep4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferSendStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
