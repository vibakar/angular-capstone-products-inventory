import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CatalogueCardsComponent } from './catalogue-cards.component';

describe('CatalogueCardsComponent', () => {
  let component: CatalogueCardsComponent;
  let fixture: ComponentFixture<CatalogueCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ CatalogueCardsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueCardsComponent);
    component = fixture.componentInstance;
    component.products = [{
      "id": 1,
      "name": "TV",
      "category": "Electronics",
      "manufacturer": "SONY",
      "price": 35000,
      "quantity": 2,
      "description": "Some description about the product will come here",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSplxNvQwPDruZTSdiIvt45nJzu3QBSGYo0W3RToX9-MNwjdiGb"
    },
    {
      "id": 2,
      "name": "Table",
      "category": "Furniture",
      "manufacturer": "Samarth Enterprise",
      "price": 20999,
      "quantity": 18,
      "description": "The table with glass top features a beautiful teak finished table.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqXbWfzRtZJI3mPDHd6T8_IVrsORPevGVtRWWg_mKi0FLCJmrZ"
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have atleast 2 products', () => {
    expect(component.products.length).toBeGreaterThan(1);
  });

  it('should delete one product', () => {
    component.products.pop();
    expect(component.products.length).toEqual(1);
  });
});
