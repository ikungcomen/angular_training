import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.css']
})
export class MyservicesComponent implements OnInit {

  products!: Product[];

  // constructor() { 
  //   this.productService = new ProductService();
  // }

  constructor(private productService: ProductService) { }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
  }

}
