import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IProduct } from '../../Interfaces/IProduct';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  //FormBuilder :Permite construir el modelo que representa los campos de un formulario.
  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  formGroup: FormGroup;
  EditionMode: boolean = false;
  productId: number;

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: '',
      quuantity: '',
      ProductDate: ''
    });

    this.activatedRoute.params
      .subscribe(params => {
        if (params["id"] == undefined) {
          return;
        } else {
          this.EditionMode = true;
          this.productId = params["id"];

          //this.productService.GetProduct(this.productId.toString())
          //  .subscribe(response => {
          //    this.LoadForm(response),
          //      error => console.log(error);
          //  });
        })
  }

  LoadForm(product: IProduct) {
    this.formGroup.patchValue({
      name: product.name,
      quuantity: product.quuantity,
      ProductDate: product.DateCreated
    });
  }

  save() {
    //Crearemos un objeto product a partir de formGroup
    let product: IProduct = Object.assign({}, this.formGroup.value);
    this.productService.CreateProduct(product)
      .subscribe(result => {
        this.onSaveSuccess(),
          error => console.error(error)
      })
  }
  onSaveSuccess() {
    this.router.navigateByUrl('/product');
  }
}
