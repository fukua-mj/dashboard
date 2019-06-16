import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseAllComponent } from './warehouse-all.component';

describe('WarehouseAllComponent', () => {
  let component: WarehouseAllComponent;
  let fixture: ComponentFixture<WarehouseAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
