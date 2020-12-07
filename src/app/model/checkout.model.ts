import { Injectable } from '@angular/core';

@Injectable()
export class Checkout{
        id;
       
        
        pname ;
        price;
        qty;
        photo;
        customerid: 2;
        customername;
        customeraddress;
        customermobile
        constructor(id,pname,price,qty,photo,customerid,customername,customeraddress,customermobile) { 
        this.id= id;

        this.pname=pname;
        this.price=price;
        this.qty=qty;
        this.photo=photo;
        this.customerid=customerid;
        this.customermobile=customermobile;
       this.customername=customername;
       this.customeraddress=customeraddress;

    }
}