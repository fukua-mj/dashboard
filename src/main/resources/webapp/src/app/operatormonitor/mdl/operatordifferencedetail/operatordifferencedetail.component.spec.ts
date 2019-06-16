import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatordifferencedetailComponent } from './operatordifferencedetail.component';

describe('OperatordifferencedetailComponent', () => {
  let component: OperatordifferencedetailComponent;
  let fixture: ComponentFixture<OperatordifferencedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatordifferencedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatordifferencedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
