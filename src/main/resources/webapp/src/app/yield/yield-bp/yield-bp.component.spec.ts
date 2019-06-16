import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldBpComponent } from './yield-bp.component';

describe('YieldBpComponent', () => {
  let component: YieldBpComponent;
  let fixture: ComponentFixture<YieldBpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldBpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldBpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
