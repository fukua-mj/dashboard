import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycletimeEvenComponent } from './cycletime-even.component';

describe('CycletimeEvenComponent', () => {
  let component: CycletimeEvenComponent;
  let fixture: ComponentFixture<CycletimeEvenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycletimeEvenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycletimeEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
