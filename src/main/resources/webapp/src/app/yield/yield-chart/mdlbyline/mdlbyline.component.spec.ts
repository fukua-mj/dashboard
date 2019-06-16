import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlbylineComponent } from './mdlbyline.component';

describe('MdlbylineComponent', () => {
  let component: MdlbylineComponent;
  let fixture: ComponentFixture<MdlbylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdlbylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdlbylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
