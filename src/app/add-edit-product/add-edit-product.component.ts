import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  products: any[]=[]
  constructor() { }

  ngOnInit() {
  }
  addProduct = (product,manufacturer,price,quantity,selected) =>{
    console.log(product,manufacturer,price,quantity,selected,"getting value")
    this.products.push({product,selected,manufacturer,price,quantity})
    
  }


}


export interface products {
  product:string,
  manufacturer:string,
  price:number,
  quantity:number,
  selected:string
}