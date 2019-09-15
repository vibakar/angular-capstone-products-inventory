import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ViewStatsComponent } from './view-stats.component';
import { CoreService } from '../../services/core.service';

describe('ViewStatsComponent', () => {
  let component: ViewStatsComponent;
  let fixture: ComponentFixture<ViewStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule, ChartsModule, HttpClientTestingModule, MatSelectModule ],
      declarations: [ ViewStatsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ CoreService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('chart type should be "bar"', () => {
    expect(component.barChartType).toEqual('bar');
  });
});
