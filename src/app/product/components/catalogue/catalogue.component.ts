import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DeleteModelComponent } from '../delete-model/delete-model.component';
import { CatalogueTableComponent } from '../catalogue-table/catalogue-table.component';
import { ProductsService } from '../../services/products.service';
import { AuthService } from '../../services/auth.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  @ViewChild(CatalogueTableComponent, {static: false}) child: CatalogueTableComponent;
  isLoggedIn:boolean = false;
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
  selectedIds:number[] = [];

  constructor(private productsService: ProductsService, private authService: AuthService, public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.getAllProducts();
  }

  ngOnInit() {
    this.setView();
    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.isLoggedIn) {
      this.displayedColumns.push('edit', 'delete');
    }
  }

  setView() {
    let view = localStorage.getItem('view');
    if(view) {
      this.gridView = (view == 'grid') ? true : false;
    } else {
      localStorage.setItem('view', 'grid');
    }
  }

  toggleView() {
    this.gridView = !this.gridView;
    localStorage.setItem('view', this.gridView ? 'grid' : 'list');
  }

  getAllProducts() {
    this.productsService.getProducts().subscribe((data: Product[])=> {
       this.dataSource = new MatTableDataSource<Product>(data);
       this.products = data;
       this.productsCopy = data;
    },(err)=> {
      this.snackBar.open("Failed to get product list.Try again later!", 'Close', {
	  duration: 3000
      });
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
    this.selectedCategory = value;
    if(value == 'All') {
      this.products = this.filterValue ? this.productsCopy.filter((data) => data.name.toLowerCase().indexOf(this.filterValue.toLowerCase()) >= 0): this.productsCopy;
    } else {
      this.products = this.filterValue ? this.productsCopy.filter((data) => data.name.toLowerCase().indexOf(this.filterValue.toLowerCase()) >= 0 && data.category.toLowerCase().indexOf(value.toLowerCase()) >= 0) : this.productsCopy.filter((data)=> data.category.toLowerCase().indexOf(value.toLowerCase()) >= 0);
    }
    this.dataSource = new MatTableDataSource<Product>(this.products);
  }

  fnSelectedFields = () => {
      let defaultFields = ['select', 'name'];
      this.selectedFields.value.forEach((field) => {
        defaultFields.push(field.charAt(0).toLowerCase()+field.slice(1));
      });
      this.displayedColumns = defaultFields;
      if(this.isLoggedIn) {
        this.displayedColumns.push('edit', 'delete');
      }
  }

  openDeleteDialog = (row) => {
    const dialogRef = this.dialog.open(DeleteModelComponent, {
      width: '350px',
      height: '150px',
      data: row.name
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 'yes') {
        this.productsService.deleteProduct(row.id).subscribe(()=> {
          this.getAllProducts();
          this.snackBar.open(`Product "${row.name}" deleted sucessfully!`, 'Close', {duration: 3000});
        },(err)=> {
          this.snackBar.open(`Failed to delete product "${row.name}".Try again later!`, 'Close', {
            duration: 3000
          });
       });
      }
    });
  }

  openMulDelDialog = () => {
    const mulDelDialogRef = this.dialog.open(DeleteModelComponent, {
      width: '350px',
      height: '150px'
    });

    mulDelDialogRef.afterClosed().subscribe(result => {
      if(result == 'yes') {
        this.productsService.deleteMulProduct(this.selectedIds).subscribe(()=> {
          setTimeout(()=> {
            this.getAllProducts();
            this.child.clearSelection();
            this.snackBar.open(`All the selected products deleted sucessfully!`, 'Close', {duration: 3000});
          }, 1000);
        },(err)=> {
          this.snackBar.open("Failed to delete selected products.Try again later!", 'Close', {
            duration: 3000
          });
        });
      }
    });
  }

  selectedRows = (data) => {
    this.selectedIds = data.map((product) => product.id);
  }
}
