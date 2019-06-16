import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassdifferenceComponent } from './classdifference.component';

describe('ClassdifferenceComponent', () => {
  let component: ClassdifferenceComponent;
  let fixture: ComponentFixture<ClassdifferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassdifferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassdifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
