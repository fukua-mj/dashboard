import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseGradeComponent } from './warehouse-grade.component';

describe('WarehouseGradeComponent', () => {
  let component: WarehouseGradeComponent;
  let fixture: ComponentFixture<WarehouseGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
