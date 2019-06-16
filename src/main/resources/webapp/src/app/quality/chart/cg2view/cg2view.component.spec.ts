import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cg2viewComponent } from './cg2view.component';

describe('Cg2viewComponent', () => {
  let component: Cg2viewComponent;
  let fixture: ComponentFixture<Cg2viewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cg2viewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cg2viewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
