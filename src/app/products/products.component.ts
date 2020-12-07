import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import Swal from 'sweetalert2';

import { Product } from '../model/product.model';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: Product[]= [];
  keyword: string='';
  product: any;
  prodC: any;
  productData: any;
  constructor(private ps : ProductService , public cartService:CartService , private http: HttpClient) { }
  ngOnInit(): void {
    this.getProductList('');
    console.log(data);
    
  }
  // _getProducts(): void {
  //   this.ps.getProductList('').subscribe((data: any) => {
  //     this.product = data.data;
  //     console.log(this.product);
  //   });
  // }

  getProductList(keyword){
    this.ps.getProductList(keyword).subscribe(data => this.productList = data);
      }

    
      getPostList(prodC) {
        this.ps.getCatDetails(prodC).subscribe(data => {
          this.productList = data;
        });
    }

      searchKeyword(){
        this.getProductList(this.keyword);
      }
      // _addItemToCart( id, quantity): void {
      //   let payload = {
      //     productId: id,
      //     quantity,
      //   };
      //   this.ps.addToCart(payload).subscribe(() => {
      //     this._getProducts();
      //     alert('Product Added');
      //   });
      // }
    
      addToCart(product) {
        const order = {
          "customerid": 2,
          "pid":product.id,
          "photo": product.photo,
          "pname": product.name,
          "price": product.price,
          "qty": 1
      };
      this.http.post<any>('http://localhost:8080/api/orders/save', order)
        .subscribe(data => {
          console.log(data);
          this.showSuccessAlert();
         
        });
      }
      showSuccessAlert() {
        Swal.fire('Yikes!', 'Save Successful!', 'success')
      }
}
