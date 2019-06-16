import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycletimeComponent } from './cycletime.component';

describe('CycletimeComponent', () => {
  let component: CycletimeComponent;
  let fixture: ComponentFixture<CycletimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycletimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycletimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
