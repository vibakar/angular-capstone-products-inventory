import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule, MatCheckboxModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CatalogueTableComponent } from './catalogue-table.component';

describe('CatalogueTableComponent', () => {
  let component: CatalogueTableComponent;
  let fixture: ComponentFixture<CatalogueTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatCheckboxModule, RouterTestingModule ],
      declarations: [ CatalogueTableComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueTableComponent);
    component = fixture.componentInstance;
    component.dataSource = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
