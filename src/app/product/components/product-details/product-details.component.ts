import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../../models/Product';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute, private productsService: ProductsService) { }
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
    this.productsService.getProductById(this.productId).subscribe((data: Product) => {
      this.product = data;
    });
  }

  back(){
    this.router.navigate(['/']);
  }
}
