import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSendStep1Component } from './transfer-send-step1.component';

describe('TransferSendStep1Component', () => {
  let component: TransferSendStep1Component;
  let fixture: ComponentFixture<TransferSendStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferSendStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferSendStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
