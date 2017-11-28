import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSendStep2Component } from './transfer-send-step2.component';

describe('TransferSendStep2Component', () => {
  let component: TransferSendStep2Component;
  let fixture: ComponentFixture<TransferSendStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferSendStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferSendStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
