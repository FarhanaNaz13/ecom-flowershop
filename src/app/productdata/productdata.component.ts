import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.css'],
})
export class ProductdataComponent implements OnInit {
  productList: Product[] = [];
  keyword: string = '';
  constructor(private ps: ProductService, public cartService: CartService) {}

  ngOnInit(): void {
    this.getProductList('');
  }
  getProductList(keyword) {
    this.ps
      .getProductList(keyword)
      .subscribe((data) => (this.productList = data));
  }
  searchKeyword() {
    this.getProductList(this.keyword);
  }
}
