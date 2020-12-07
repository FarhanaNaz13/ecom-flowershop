import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  orderList: Order[];
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

}
