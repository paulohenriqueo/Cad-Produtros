import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  products : Product[]=[];
  formGroupProduct : FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: ProductService){
    this.formGroupProduct = formBuilder.group({
      id : [''],
      name : [''],
      desc : [''],
      prec : [''],
      quant : [''],
    });
  }

  ngOninit():void{
    this.loadProducts();
  }

  loadProducts(){
    
    
  }

  save(){
    this.products.push(this.formGroupProduct.value);
  }
}



