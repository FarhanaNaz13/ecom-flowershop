import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.css']
})
export class ProductsearchComponent implements OnInit {
productList: Product[]= [];
keyword: string='';
  constructor(private ps : ProductService) { }

  ngOnInit(): void {
    this.getProductList('');
  }
  getProductList(keyword){
this.ps.getProductList(keyword).subscribe(data => this.productList = data);
  }
  searchKeyword(){
    this.getProductList(this.keyword);
  }

}
