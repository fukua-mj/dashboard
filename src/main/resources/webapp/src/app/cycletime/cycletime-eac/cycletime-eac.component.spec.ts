import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycletimeEacComponent } from './cycletime-eac.component';

describe('CycletimeEacComponent', () => {
  let component: CycletimeEacComponent;
  let fixture: ComponentFixture<CycletimeEacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycletimeEacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycletimeEacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
