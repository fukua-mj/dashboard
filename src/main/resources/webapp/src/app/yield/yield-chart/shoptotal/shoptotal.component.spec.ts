import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoptotalComponent } from './shoptotal.component';

describe('ShoptotalComponent', () => {
  let component: ShoptotalComponent;
  let fixture: ComponentFixture<ShoptotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoptotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoptotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
