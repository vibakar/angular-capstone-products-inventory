import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
  configUrl = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getProducts() {
  	return this.http.get(this.configUrl + "/products");
  }

  addProduct(payload) {
    return this.http.post(this.configUrl + "/products", payload)
  }
}
