import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionmissComponent } from './detectionmiss.component';

describe('DetectionmissComponent', () => {
  let component: DetectionmissComponent;
  let fixture: ComponentFixture<DetectionmissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectionmissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionmissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
