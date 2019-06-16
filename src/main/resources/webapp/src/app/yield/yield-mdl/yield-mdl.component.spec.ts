import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldMdlComponent } from './yield-mdl.component';

describe('YieldMdlComponent', () => {
  let component: YieldMdlComponent;
  let fixture: ComponentFixture<YieldMdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldMdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldMdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
