import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs'; 

@Injectable()
export class ProductsService {
  configUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.configUrl + "/products");
  }

  addProduct(payload) {
    return this.http.post(this.configUrl + "/products", payload)
  }

  getProductById(id) {
    return this.http.get(this.configUrl + "/products/" + id);
  }

  updateProduct(payload) {
    return this.http.put(this.configUrl + "/products/" + payload.id, payload);
  }

  deleteProduct(id) {
    return this.http.delete(this.configUrl + "/products/" + id);
  }

  deleteMulProduct(ids) {
    let requests = ids.map(id => this.deleteProduct(id));
    return forkJoin(requests);
  }

  updateViews(payload) {
    return this.http.put(this.configUrl + "/users/" + payload.id, payload);
  }

  getUser(id) {
    return this.http.get(this.configUrl + "/users/" + id);
  }
}
