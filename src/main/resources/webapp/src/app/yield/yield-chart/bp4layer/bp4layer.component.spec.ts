import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bp4layerComponent } from './bp4layer.component';

describe('Bp4layerComponent', () => {
  let component: Bp4layerComponent;
  let fixture: ComponentFixture<Bp4layerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bp4layerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bp4layerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
