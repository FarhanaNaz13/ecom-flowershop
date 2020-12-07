import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Order } from '../model/order.model';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 order:Order;
  orderList: Order[];
  subtotal: number = 0;
  qty: number = 0;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this. getOrderList();
  }
  getOrderList(): void {
    this.http.get<Order[]>('http://localhost:8080/api/orders/list')
    .subscribe(data => {
      console.log(data);
      this.orderList = data;
    });
  }

  updateOrderStatus(){
    console.log(this.orderList);
    this.http.post<Order[]>('http://localhost:8080/api/orders/updateOrderStatus', this.orderList)
    .subscribe(data => {
      console.log(data);
      this.orderList = data;
    });
  }

  delete(id): void {
    this.http.delete<any>('http://localhost:8080/api/orders/delete/' + id)
    .subscribe(data => {
      console.log("Delete successful");
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
      
      this.getOrderList();
    });
  }
  edit(id): void{
    this.http.get<Order>('http://localhost:8080/api/orders/one/' + id)
    .subscribe(data => {
      this.order = data;
    
    });
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
  showSuccessAlert() {
    Swal.fire('Yikes!', 'Save Successful!', 'success')
  }
  }

