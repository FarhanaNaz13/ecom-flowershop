import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css']
})
export class ProductupdateComponent implements OnInit {

  formTitleEdit = 'Edit Product';
  product: Product;
  productList: Product[];
  productList2: Product[]= [];
  constructor(private http : HttpClient , private ps : ProductService) { 
    this.product = new Product(1, '', '','','','','','');
  }

  ngOnInit(): void {
    this.getProductList();
  }
  updateProduct(): void {
    this.http.put<Product>('http://localhost:8080/api/product/update', this.product)
    .subscribe(data => {
      console.log("update successful");
      this.showSuccessAlert();
      this.getProductList();
    });
  }

  showSuccessAlert() {
    Swal.fire('Yikes!', 'Update Successful!', 'success')
  }
  getProductList(): void {
    this.http.get<Product[]>('http://localhost:8080/api/product/list2')
    .subscribe(data => {
      this.productList = data;
    });
  }

  edit(id): void{
    this.http.get<Product>('http://localhost:8080/api/product/one/' + id)
    .subscribe(data => {
      this.product = data;
    
    });
  }

  delete(id): void {
    this.http.delete<any>('http://localhost:8080/api/product/delete/' + id)
    .subscribe(data => {
      console.log("Delete successful");
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
      
      this.getProductList();
    });
  }
  
  getProductList2(){
    this.ps.getProductList2().subscribe(data => this.productList2 = data);
      }
      
}
