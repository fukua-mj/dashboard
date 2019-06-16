import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabviewinfoComponent } from './tabviewinfo.component';

describe('TabviewinfoComponent', () => {
  let component: TabviewinfoComponent;
  let fixture: ComponentFixture<TabviewinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabviewinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabviewinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
