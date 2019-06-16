import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LossCommonComponent } from './loss-common.component';

describe('LossCommonComponent', () => {
  let component: LossCommonComponent;
  let fixture: ComponentFixture<LossCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LossCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LossCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
