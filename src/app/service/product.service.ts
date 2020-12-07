import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  baseURL: any;

  products: Product[] ;
  constructor(private http: HttpClient) { }
  getProductList(keyword): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8080/api/product/list/?keyword='+keyword);
  }
  addToCart(payload) {
    return this.http.post(`http://localhost:8080/api/product/list/?keyword=}/cart`, payload);
  }
//   getProduct() {
//     return this.http.get<Product[]>('http://localhost:8080/api/product/list1');
// }

getProductLists(): Observable<Product[]>{
  return this.http.get<Product[]>('http://localhost:8080/api/product/lists');
}
getProductList2(): Observable<Product[]>{
  return this.http.get<Product[]>('http://localhost:8080/api/product/list2');
}
getCatDetails(cname: string) :  Observable<Product[]>{
  return this.http.get<Product[]>('http://localhost:8080/api/product/two/'+cname);
}
getUsercount(){
  return this.http.get('http://localhost:8080/api/product/dashboard');
}
getProdtcount(){
  return this.http.get('http://localhost:8080/api/product/dashboard');
}
getOrdercount(){
  return this.http.get('http://localhost:8080/api/product/dashboard');
}
}
