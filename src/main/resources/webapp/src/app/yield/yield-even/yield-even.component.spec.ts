import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldEvenComponent } from './yield-even.component';

describe('YieldEvenComponent', () => {
  let component: YieldEvenComponent;
  let fixture: ComponentFixture<YieldEvenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldEvenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
