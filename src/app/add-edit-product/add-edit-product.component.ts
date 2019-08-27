import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProductsService } from '../services/products.service'

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
 
  constructor(private router: Router, private productsService: ProductsService, private snackBar: MatSnackBar) { }
  product={
      "name": "",
      "category": "",
      "manufacturer": "",
      "price": null,
      "quantity": null,
      "description": "",
      "image":""
  }
  ngOnInit() {
  }

  addProduct = () =>{
    console.log(this.product)
    this.productsService.addProduct(this.product).subscribe(data => {
      this.router.navigate(['/']);
      this.snackBar.open(`Product "${this.product.name}" added sucessfully!`, 'Close', {
        duration: 3000
      });
    })
  }
}
