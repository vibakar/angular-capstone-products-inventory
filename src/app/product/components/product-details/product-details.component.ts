import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from "ngx-spinner";

import { Product } from '../../models/Product';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute, private productsService: ProductsService, private snackBar: MatSnackBar, private spinner: NgxSpinnerService) { }
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

  getProductDetail = () =>{
    this.spinner.show();
    this.productsService.getProductById(this.productId).subscribe((data: Product) => {
      this.spinner.hide();
      this.product = data;
    },(err)=> {
      this.spinner.hide();
      this.snackBar.open("Failed to fetch product details.Try again later!", 'Ok', {duration: 3000});
   });
  }

  back(){
    this.router.navigate(['/']);
  }
}
