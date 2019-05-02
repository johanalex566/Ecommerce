import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: '',
      ProductDate: ''
    });
  }

}
