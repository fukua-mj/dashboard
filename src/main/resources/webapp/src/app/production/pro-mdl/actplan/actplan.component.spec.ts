import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActplanComponent } from './actplan.component';

describe('ActplanComponent', () => {
  let component: ActplanComponent;
  let fixture: ComponentFixture<ActplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
