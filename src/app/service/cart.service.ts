import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import {CartProduct} from '../model/cartproduct.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartCountEmitter = new EventEmitter<number>();
  baseURL;
  public cartProductArray:CartProduct[] = []

  constructor(private http:HttpClient) {
    
   }

  
    

}
