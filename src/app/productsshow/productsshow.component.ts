import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productsshow',
  templateUrl: './productsshow.component.html',
  styleUrls: ['./productsshow.component.css']
})
export class ProductsshowComponent implements OnInit {
  productList: Product[]= [];
  keyword: string='';
  product: any;
  constructor(private ps : ProductService , public cartService:CartService) { }

  ngOnInit(): void {
    this.getProductList('');
  }
  getProductList(keyword){
    this.ps.getProductList(keyword).subscribe(data => this.productList = data);
      }
      // getProduct(){
      //   this.ps.getProduct().subscribe(data => this.productList = data);
      //     }

    }
  
