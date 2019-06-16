import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinedifferenceComponent } from './linedifference.component';

describe('LinedifferenceComponent', () => {
  let component: LinedifferenceComponent;
  let fixture: ComponentFixture<LinedifferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinedifferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinedifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
