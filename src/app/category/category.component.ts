import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  prodC: any;
  productData: any;
  productList: Product[];
  constructor(private ps : ProductService,private http: HttpClient, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.prodC= this.actRoute.snapshot.params['cname'];
    this.getPostList(this.prodC);
  }
   
  getPostList(prodC) {
    this.ps.getCatDetails(prodC).subscribe(data => {
      this.productData = data;
      console.log(data);
    });
}
navigation(link){
  this.router.navigate([link]);
}

}
