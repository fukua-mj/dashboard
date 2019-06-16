import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YifatongEacComponent } from './yifatong-eac.component';

describe('YifatongEacComponent', () => {
  let component: YifatongEacComponent;
  let fixture: ComponentFixture<YifatongEacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YifatongEacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YifatongEacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
