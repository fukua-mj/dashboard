import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProEacComponent } from './pro-eac.component';

describe('ProEacComponent', () => {
  let component: ProEacComponent;
  let fixture: ComponentFixture<ProEacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProEacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProEacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
