import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityCgComponent } from './quality-cg.component';

describe('QualityCgComponent', () => {
  let component: QualityCgComponent;
  let fixture: ComponentFixture<QualityCgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityCgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityCgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
