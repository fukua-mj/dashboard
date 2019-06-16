import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseTotalComponent } from './warehouse-total.component';

describe('WarehouseTotalComponent', () => {
  let component: WarehouseTotalComponent;
  let fixture: ComponentFixture<WarehouseTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
