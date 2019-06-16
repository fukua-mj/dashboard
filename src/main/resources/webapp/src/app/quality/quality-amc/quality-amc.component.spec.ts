import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAmcComponent } from './quality-amc.component';

describe('QualityAmcComponent', () => {
  let component: QualityAmcComponent;
  let fixture: ComponentFixture<QualityAmcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityAmcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityAmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
