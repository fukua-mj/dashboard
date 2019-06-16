import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EacComponent } from './eac.component';

describe('EacComponent', () => {
  let component: EacComponent;
  let fixture: ComponentFixture<EacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
