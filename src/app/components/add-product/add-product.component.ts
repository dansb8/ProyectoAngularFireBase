import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  newProduct: Product
  productForm = new FormGroup({
    name: new FormControl('',Validators.required),
    company: new FormControl('',Validators.required),
    originalPrice: new FormControl('',Validators.required)
  })
  constructor(private _productSvc: ProductsService) { }

  ngOnInit(): void {
  }

  add(){
    this.newProduct = this.productForm.value
    console.log(this.productForm)
    this._productSvc.addProduct(this.newProduct)
  }
}
