import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityandcapacityComponent } from './qualityandcapacity.component';

describe('QualityandcapacityComponent', () => {
  let component: QualityandcapacityComponent;
  let fixture: ComponentFixture<QualityandcapacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityandcapacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityandcapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
