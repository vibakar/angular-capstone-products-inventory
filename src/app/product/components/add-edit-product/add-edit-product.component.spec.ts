import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from "@angular/material";

import { AddEditProductComponent } from './add-edit-product.component';
import { ProductsService } from '../../services/products.service';

describe('AddEditProductComponent', () => {
  let component: AddEditProductComponent;
  let fixture: ComponentFixture<AddEditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule, MatSnackBarModule ],
      declarations: [ AddEditProductComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ ProductsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have atleast 2 categories', () => {
    expect(component.availableCategories.length).toBeGreaterThan(2);
  });
});
