import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLossComponent } from './panel-loss.component';

describe('PanelLossComponent', () => {
  let component: PanelLossComponent;
  let fixture: ComponentFixture<PanelLossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelLossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
