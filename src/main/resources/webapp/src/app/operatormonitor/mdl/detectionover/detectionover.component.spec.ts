import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionoverComponent } from './detectionover.component';

describe('DetectionoverComponent', () => {
  let component: DetectionoverComponent;
  let fixture: ComponentFixture<DetectionoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectionoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
