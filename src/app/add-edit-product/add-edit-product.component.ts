import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  addProduct = (data) =>{
    console.log(data.value, "getting value")
  }
}

export interface products {
  product:string;
  category:string;
  manufacturer:string;
  descripiton: string;
  imageUrl: string;
  price:number;
  quantity:number;
}