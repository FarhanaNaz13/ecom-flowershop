import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {

  isCreate = true;
  formTitle = 'Create New Product';
  formTitleEdit = 'Edit Product';
  product: Product;
  productList: Product[];
  constructor(private http : HttpClient) { 
    this.product = new Product(1, '', '','',1,1,'','');
  }

  ngOnInit(): void {
    this.getProductList();
  }

  saveProduct(): void{
    this.http.post<Product>('http://localhost:8080/api/product/save', this.product)
    .subscribe(data => {
      console.log(data);
      this.showSuccessAlert();
     
    });
  }
  showSuccessAlert() {
    Swal.fire('Yikes!', 'Save Successful!', 'success')
  }


  updateProduct(): void {
    this.http.put<Product>('http://localhost:8080/api/product/update', this.product)
    .subscribe(data => {
      console.log("update successful");
      this.getProductList();
    });
  }

  getProductList(): void {
    this.http.get<Product[]>('http://localhost:8080/api/product/list')
    .subscribe(data => {
      this.productList = data;
    });
  }

  edit(id): void{
    this.http.get<Product>('http://localhost:8080/api/product/one/' + id)
    .subscribe(data => {
      this.product = data;
      this.isCreate = false;
    });
  }

  delete(id): void {
    this.http.delete<any>('http://localhost:8080/restapi-jersey/api/product/delete/' + id)
    .subscribe(data => {
      console.log("Delete successful");
      this.getProductList();
    });
  }


}
