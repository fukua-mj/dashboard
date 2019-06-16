import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdmonitorComponent } from './prdmonitor.component';

describe('PrdmonitorComponent', () => {
  let component: PrdmonitorComponent;
  let fixture: ComponentFixture<PrdmonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrdmonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdmonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
