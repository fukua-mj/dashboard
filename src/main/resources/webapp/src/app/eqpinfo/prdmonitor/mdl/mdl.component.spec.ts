import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlComponent } from './mdl.component';

describe('MdlComponent', () => {
  let component: MdlComponent;
  let fixture: ComponentFixture<MdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
