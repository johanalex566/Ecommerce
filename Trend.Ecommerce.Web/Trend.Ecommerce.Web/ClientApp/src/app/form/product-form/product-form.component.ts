import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IProduct } from '../../Interfaces/IProduct';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private router: RouterLink) { }

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: '',
      ProductDate: ''
    });
  }

  save() {
    //Creara un objeto product a partir de formGroup
    let product: IProduct = Object.assign({}, this.formGroup.value)
    this.productService.CreateProduct(product).subscribe(result => {
      this.onSaveSuccess();
    }, error => console.error(error));
  }

  //onSaveSuccess() {
  //  this.router.navigate(["/product"]);
  //}
}
