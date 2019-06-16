import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseTimeComponent } from './warehouse-time.component';

describe('WarehouseTimeComponent', () => {
  let component: WarehouseTimeComponent;
  let fixture: ComponentFixture<WarehouseTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
