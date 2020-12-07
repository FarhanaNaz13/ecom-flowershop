import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from '../model/product.model';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';
import { SliderClass, Sliders } from './classes/slider';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  sliders: SliderClass[];
  productList2: Product[]= [];
  constructor(private ps : ProductService , public cartService:CartService ,private http:HttpClient) { }


  ngOnInit(): void {
    this.sliders = Sliders;

    this.getProductList2( );
  }
  getProductList2(){
    this.ps.getProductList2().subscribe(data => this.productList2 = data);
      }

      addToCart(product) {
        const order = {
          "customerid": 2,
          "pid":product.id,
          "photo": product.photo,
          "pname": product.name,
          "price": product.price,
          "qty": 1
      };
      this.http.post<any>('http://localhost:8080/api/orders/save', order)
        .subscribe(data => {
          console.log(data);
          this.showSuccessAlert();
         
        });
      }
      showSuccessAlert() {
        Swal.fire('Yikes!', 'Save Successful!', 'success')
      }
     

}
