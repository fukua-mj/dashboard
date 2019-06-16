import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldMdlbylineComponent } from './yield-mdlbyline.component';

describe('YieldMdlbylineComponent', () => {
  let component: YieldMdlbylineComponent;
  let fixture: ComponentFixture<YieldMdlbylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldMdlbylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldMdlbylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
