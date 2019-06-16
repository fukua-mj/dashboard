import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAppComponent } from './quality-app.component';

describe('QualityAppComponent', () => {
  let component: QualityAppComponent;
  let fixture: ComponentFixture<QualityAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
