import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSendComponent } from './transfer-send.component';

describe('TransferSendComponent', () => {
  let component: TransferSendComponent;
  let fixture: ComponentFixture<TransferSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
