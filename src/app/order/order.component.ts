import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order:Order;
  orderList: Order[];
  keyword: string = '';
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
  getOrderList1(keyword): void {
    this.http.get<Order[]>('http://localhost:8080/api/orders/list1/?keyword='+ keyword)
    .subscribe(data => {
      console.log(data);
      this.orderList = data;
    });
  }
  searchKeyword() {
    this. getOrderList1(this.keyword);
  }
}
