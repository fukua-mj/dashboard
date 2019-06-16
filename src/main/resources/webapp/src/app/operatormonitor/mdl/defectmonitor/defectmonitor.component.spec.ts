import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectmonitorComponent } from './defectmonitor.component';

describe('DefectmonitorComponent', () => {
  let component: DefectmonitorComponent;
  let fixture: ComponentFixture<DefectmonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectmonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectmonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
