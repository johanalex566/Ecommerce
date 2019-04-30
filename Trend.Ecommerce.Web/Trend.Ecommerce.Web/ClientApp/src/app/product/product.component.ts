import { Component } from '@angular/core';
import { IProduct } from '../Interfaces/IProduct';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html'
})

export class ProductComponent {

  produts: IProduct[];

  constructor() {
  }

}
