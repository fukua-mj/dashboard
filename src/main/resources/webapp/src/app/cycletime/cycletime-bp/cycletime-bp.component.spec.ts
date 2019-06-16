import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycletimeBpComponent } from './cycletime-bp.component';

describe('CycletimeBpComponent', () => {
  let component: CycletimeBpComponent;
  let fixture: ComponentFixture<CycletimeBpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycletimeBpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycletimeBpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
