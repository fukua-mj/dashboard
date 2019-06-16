import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlmonitorComponent } from './mdlmonitor.component';

describe('MdlmonitorComponent', () => {
  let component: MdlmonitorComponent;
  let fixture: ComponentFixture<MdlmonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdlmonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdlmonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
