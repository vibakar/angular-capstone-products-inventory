import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ProductsService } from '../services/products.service';
import { FormControl } from '@angular/forms';

export interface Product {
  name: string;
  category: string;
  manufacturer: string;
  price: string;
  quantity: number;
}

@Component({
  selector: 'catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  gridView:boolean = true;
  products: Product[];
  productsCopy: Product[];
  filterValue:string;
  selectedCategory:string = "All";
  selectedFields = new FormControl(['Category', 'Manufacturer', 'Price']);
  categories: any[] = ['All', 'Electronics', 'Fashion', 'Furniture'];
  customizeFields: string[] = ['Category', 'Manufacturer', 'Description', 'Price', 'Quantity'];
  displayedColumns: string[] = ['select', 'name', 'category', 'manufacturer', 'price'];
  dataSource = new MatTableDataSource<Product>(this.products);
  selection = new SelectionModel<Product>(true, []);

  constructor(private productsService: ProductsService) {
    this.getAllProducts();
  }

  ngOnInit() {
  }

  toggleView() {
    this.gridView = !this.gridView;
  }

  getAllProducts() {
    this.productsService.getProducts().subscribe((data: Product[])=> {
       this.dataSource = new MatTableDataSource<Product>(data);
       this.products = data;
       this.productsCopy = data;
    });
  }

  filterBySearch = () => {
    if(this.selectedCategory == "All") {
      this.products = this.productsCopy.filter((data) => data.name.toLowerCase().indexOf(this.filterValue.toLowerCase()) >= 0);
    } else {
      this.products = this.productsCopy.filter((data) => data.category.toLowerCase().indexOf(this.selectedCategory.toLowerCase()) >= 0 && data.name.toLowerCase().indexOf(this.filterValue.toLowerCase()) >= 0);
    }
    this.dataSource = new MatTableDataSource<Product>(this.products);
  }

  filterByCategory = (value) => {
    if(value == 'All') {
      this.products = this.filterValue ? this.productsCopy.filter((data) => data.name.toLowerCase().indexOf(this.filterValue.toLowerCase()) >= 0): this.productsCopy;
    } else {
      this.products = this.filterValue ? this.productsCopy.filter((data) => data.name.toLowerCase().indexOf(this.filterValue.toLowerCase()) >= 0 && data.category.toLowerCase().indexOf(value.toLowerCase()) >= 0) : this.productsCopy.filter((data)=> data.category.toLowerCase().indexOf(value.toLowerCase()) >= 0);
    }
    this.dataSource = new MatTableDataSource<Product>(this.products);
  }

  fnSelectedFields = () => {
      console.log('----', this.selectedFields.value)
      let defaultFields = ['select', 'name'];
      this.selectedFields.value.forEach((field) => {
        defaultFields.push(field.charAt(0).toLowerCase()+field.slice(1));
      });
      this.displayedColumns = defaultFields;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Product): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row`;
  }
}
