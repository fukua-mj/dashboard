import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmonitorcommonComponent } from './bpmonitorcommon.component';

describe('BpmonitorcommonComponent', () => {
  let component: BpmonitorcommonComponent;
  let fixture: ComponentFixture<BpmonitorcommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpmonitorcommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpmonitorcommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
