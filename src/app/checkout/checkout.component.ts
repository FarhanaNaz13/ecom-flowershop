import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Checkout } from '../model/checkout.model';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
order: Order = new Order(0, '', '', '', '','','');
checkout:Checkout;
  constructor(private http : HttpClient) {}

  ngOnInit(): void {
    this.edit(this.order.id);
  }
  edit(id): void{
    this.http.get<Order>('http://localhost:8080/api/orders/one/' + id)
    .subscribe(data => {
      this.order = data;
    
    });
  }
  saveOrder(): void{
    this.http.post<Checkout>('http://localhost:8080/api/checkout/save', this.checkout)
    .subscribe(data => {
      console.log(data);
      this.showSuccessAlert();
     
    });
  }
  showSuccessAlert() {
    Swal.fire('Yikes!', 'Save Successful!', 'success')
  }
  addToCheckout(Order) {
    const checkouts= {
      
      "customerid": 2,
      
      "photo":"hbhb.jpg",
      "pname": Order.pname,
      "price": Order.price,
      "qty":    Order.qty,
      "customername":this.checkout.customername,
      "customeraddress":this.checkout.customeraddress,
      "customermobile":this.checkout.customermobile
  };
  this.http.post<any>('http://localhost:8080/api/checkout/save', checkouts)
    .subscribe(data => {
      console.log(data);
      this.showSuccessAlert();
     
    });
  }
}
