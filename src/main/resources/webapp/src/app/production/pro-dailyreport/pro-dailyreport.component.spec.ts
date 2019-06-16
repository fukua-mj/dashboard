import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDailyreportComponent } from './pro-dailyreport.component';

describe('ProDailyreportComponent', () => {
  let component: ProDailyreportComponent;
  let fixture: ComponentFixture<ProDailyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProDailyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProDailyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
