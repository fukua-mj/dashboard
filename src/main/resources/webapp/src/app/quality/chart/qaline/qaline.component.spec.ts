import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QalineComponent } from './qaline.component';

describe('QalineComponent', () => {
  let component: QalineComponent;
  let fixture: ComponentFixture<QalineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QalineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QalineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
