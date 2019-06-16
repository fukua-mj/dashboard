import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpshopComponent } from './bpshop.component';

describe('BpshopComponent', () => {
  let component: BpshopComponent;
  let fixture: ComponentFixture<BpshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
