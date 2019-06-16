import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cg1viewComponent } from './cg1view.component';

describe('Cg1viewComponent', () => {
  let component: Cg1viewComponent;
  let fixture: ComponentFixture<Cg1viewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cg1viewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cg1viewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
