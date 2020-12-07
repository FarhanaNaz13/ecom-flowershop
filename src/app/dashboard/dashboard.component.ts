import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tprod: any;

  constructor(private ps : ProductService) { }

  ngOnInit(): void {
    this.getProdCount();
    this.getUsercount();
  }
  getProdCount(){
    this.ps.getProdtcount().subscribe(totalprod => {
      this.tprod = totalprod as any;
    });
  }
getUsercount(){
  this.ps.getUsercount().subscribe(totaluser =>{
    this.tprod = totaluser as any;
  })
}
getOrdercount(){
  this.ps.getOrdercount().subscribe(totalorder =>{
    this.tprod = totalorder as any;
  })
}
}
