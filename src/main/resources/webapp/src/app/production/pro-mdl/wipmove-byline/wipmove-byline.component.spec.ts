import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WipmoveBylineComponent } from './wipmove-byline.component';

describe('WipmoveBylineComponent', () => {
  let component: WipmoveBylineComponent;
  let fixture: ComponentFixture<WipmoveBylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WipmoveBylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WipmoveBylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
