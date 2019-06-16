import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldEacComponent } from './yield-eac.component';

describe('YieldEacComponent', () => {
  let component: YieldEacComponent;
  let fixture: ComponentFixture<YieldEacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldEacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldEacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
