import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Interfaces/IProduct';
import { ProductService } from '../services/product.service';
import { debug } from 'util';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {

  produts: IProduct[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.GetProduct().subscribe(result => {
      this.produts = result;
        }, error => console.error(error));
  }
}
