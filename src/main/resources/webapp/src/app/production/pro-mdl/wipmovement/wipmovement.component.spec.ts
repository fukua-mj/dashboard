import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WipmovementComponent } from './wipmovement.component';

describe('WipmovementComponent', () => {
  let component: WipmovementComponent;
  let fixture: ComponentFixture<WipmovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WipmovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WipmovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
