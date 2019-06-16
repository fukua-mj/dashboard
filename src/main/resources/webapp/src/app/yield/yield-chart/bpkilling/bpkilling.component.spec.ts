import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpkillingComponent } from './bpkilling.component';

describe('BpkillingComponent', () => {
  let component: BpkillingComponent;
  let fixture: ComponentFixture<BpkillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpkillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpkillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
