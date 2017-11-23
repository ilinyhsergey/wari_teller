import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillTvComponent } from './bill-tv.component';

describe('BillTvComponent', () => {
  let component: BillTvComponent;
  let fixture: ComponentFixture<BillTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
