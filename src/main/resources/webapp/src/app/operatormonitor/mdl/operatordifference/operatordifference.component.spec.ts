import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatordifferenceComponent } from './operatordifference.component';

describe('OperatordifferenceComponent', () => {
  let component: OperatordifferenceComponent;
  let fixture: ComponentFixture<OperatordifferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatordifferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatordifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
