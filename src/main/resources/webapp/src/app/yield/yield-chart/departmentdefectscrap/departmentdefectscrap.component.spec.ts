import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentdefectscrapComponent } from './departmentdefectscrap.component';

describe('DepartmentdefectscrapComponent', () => {
  let component: DepartmentdefectscrapComponent;
  let fixture: ComponentFixture<DepartmentdefectscrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentdefectscrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentdefectscrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
