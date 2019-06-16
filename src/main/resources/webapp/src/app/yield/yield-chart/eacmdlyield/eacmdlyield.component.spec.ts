import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EacmdlyieldComponent } from './eacmdlyield.component';

describe('EacmdlyieldComponent', () => {
  let component: EacmdlyieldComponent;
  let fixture: ComponentFixture<EacmdlyieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EacmdlyieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EacmdlyieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
