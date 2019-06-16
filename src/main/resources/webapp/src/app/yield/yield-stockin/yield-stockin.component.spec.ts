import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldStockinComponent } from './yield-stockin.component';

describe('YieldStockinComponent', () => {
  let component: YieldStockinComponent;
  let fixture: ComponentFixture<YieldStockinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldStockinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldStockinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
