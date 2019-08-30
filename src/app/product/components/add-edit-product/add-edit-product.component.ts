import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProductsService } from '../../services/products.service'
import { Product } from '../../models/Product';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
 
  constructor(private router: Router, private productsService: ProductsService, private snackBar: MatSnackBar, private route: ActivatedRoute) { }
  product:Product = {
    "name": "",
    "category": "",
    "manufacturer": "",
    "price": null,
    "quantity": null,
    "description": "",
    "image": ""
  }
  productId:string;
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    if(this.productId){
      this.getProductDetail();
    }
  }

  addProduct = () =>{
    this.productsService.addProduct(this.product).subscribe((data: Product) => {
      this.router.navigate(['/']);
      this.snackBar.open(`Product "${this.product.name}" added sucessfully!`, 'Close', {
        duration: 3000
      });
    },(err)=> {
      this.snackBar.open(`Failed to add product "${this.product.name}".Try again later!`, 'Close', {
        duration: 3000
      });
    })
  }

  getProductDetail = () =>{
    this.productsService.getProductById(this.productId).subscribe((data: Product) => {
      this.product = data;
    },(err)=> {
      this.snackBar.open("Something went wrong.Try again later!", 'Close', {
        duration: 3000
      });
    });
  }

  updateProduct = () =>{
    this.productsService.updateProduct(this.product).subscribe(() => {
      this.router.navigate(['/']);
      this.snackBar.open(`Product "${this.product.name}" updated sucessfully!`, 'Close', {
        duration: 3000
      });
    },(err)=> {
      this.snackBar.open(`Failed to update product "${this.product.name}".Try again later!`, 'Close', {
        duration: 3000
      });
    });
  }
}
