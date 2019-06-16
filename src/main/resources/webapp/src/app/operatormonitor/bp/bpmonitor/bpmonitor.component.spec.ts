import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmonitorComponent } from './bpmonitor.component';

describe('BpmonitorComponent', () => {
  let component: BpmonitorComponent;
  let fixture: ComponentFixture<BpmonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpmonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpmonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
