import { Injectable } from "@angular/core";
import { CartProduct } from "./cartproduct.model";

@Injectable()
export class Order {
        id;
        customerid: 2;
        pid;
        pname ;
        price;
        qty;
        photo;
        orderStatus;
   
        constructor(id,customerid,pid,pname,price,qty,orderStatus) { 
        this.id= id;
        this.customerid=customerid;
        this.pname=pname;
        this.price=price;
        this.qty=qty;
        this.pid=pid;
       this.orderStatus=orderStatus;

    }

    // clear() {
    //     this.id = null;
    //     this.name = this.address = this.city = null;
    //     this.state = this.zip = this.country = null;
    //     this.shipped = false;
    //     this.cart.clear();
    // }
}
