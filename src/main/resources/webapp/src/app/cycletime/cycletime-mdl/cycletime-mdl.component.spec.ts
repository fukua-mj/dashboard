import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycletimeMdlComponent } from './cycletime-mdl.component';

describe('CycletimeMdlComponent', () => {
  let component: CycletimeMdlComponent;
  let fixture: ComponentFixture<CycletimeMdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycletimeMdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycletimeMdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
