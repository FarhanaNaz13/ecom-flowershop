import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Order } from '../model/order.model';
import { Product } from '../model/product.model';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-producthome',
  templateUrl: './producthome.component.html',
  styleUrls: ['./producthome.component.css'],
})
export class ProducthomeComponent implements OnInit {
  productLists: Product[] = [];
  product: Product;
  constructor(private ps: ProductService, public cartService: CartService , private http : HttpClient) {
    this.product = new Product(1, '', '','',1,1,'','');
  }

  ngOnInit(): void {
    this.getProductLists();
  }

  getProductLists() {
    this.ps.getProductLists().subscribe((data) => (this.productLists = data));
  }

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
  saveOrder(): void{
    
  }
  showSuccessAlert() {
    Swal.fire('Yikes!', 'Save Successful!', 'success')
  }
 
}
