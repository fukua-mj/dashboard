import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpcstuseComponent } from './bpcstuse.component';

describe('BpcstuseComponent', () => {
  let component: BpcstuseComponent;
  let fixture: ComponentFixture<BpcstuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpcstuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpcstuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
