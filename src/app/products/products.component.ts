import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products : Product[]=[];

  formGroupProduct : FormGroup;

  isEditing : boolean = false;

  isError : boolean = false;

  constructor(private formBuilder: FormBuilder,
              private service: ProductService){
    this.formGroupProduct = formBuilder.group({
      id : [''],
      name : [''],
      desc : [''],
      prec : [''],
      quant : ['']
    });
  }

  loadProducts(){
    this.service.getProducts().subscribe({
      next: data => this.products = data
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  save(){
        this.service.save(this.formGroupProduct.value).subscribe({
          next : data => this.products.push(data)
        });
      }
    
  get name() : any {
    return this.formGroupProduct.get("name") 
  }
  get desc() : any {
    return this.formGroupProduct.get("desc")
  }
  
}



