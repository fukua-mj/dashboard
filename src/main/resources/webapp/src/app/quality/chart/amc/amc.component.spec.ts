import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcComponent } from './amc.component';

describe('AmcComponent', () => {
  let component: AmcComponent;
  let fixture: ComponentFixture<AmcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
