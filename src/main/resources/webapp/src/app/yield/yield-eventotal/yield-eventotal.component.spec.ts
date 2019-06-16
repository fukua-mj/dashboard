import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldEventotalComponent } from './yield-eventotal.component';

describe('YieldEventotalComponent', () => {
  let component: YieldEventotalComponent;
  let fixture: ComponentFixture<YieldEventotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldEventotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldEventotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
