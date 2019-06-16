import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityEtComponent } from './quality-et.component';

describe('QualityEtComponent', () => {
  let component: QualityEtComponent;
  let fixture: ComponentFixture<QualityEtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityEtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityEtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
