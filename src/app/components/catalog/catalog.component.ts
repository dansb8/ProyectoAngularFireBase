import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service'
import { Product } from 'src/app/interfaces/product'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products: Product[];
  editProductForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',Validators.required),
    company: new FormControl('',Validators.required),
    originalPrice: new FormControl('',Validators.required),
    img: new FormControl('')
  })
  addProductForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',Validators.required),
    company: new FormControl('',Validators.required),
    originalPrice: new FormControl('',Validators.required),
    img: new FormControl('')
  })
  constructor(private _productSvc: ProductsService) {
    
  }

  ngOnInit(): void {
    this._productSvc.getProducts().subscribe(
      data=>{
        console.log(data)
        this.products= data
      },
      err=>{
        console.log(err)
      }
    )
  }
  add(){
    this._productSvc.addProduct(this.addProductForm.value)
    this.addProductForm.reset()
  }
  deleteProduct(product){
    this._productSvc.deleteProduct(product)
  }

  editProduct(product){
    this.editProductForm.setValue(product)
  }

  edit(){
    console.log(this.editProductForm)
    this._productSvc.editProduct(this.editProductForm.value)
  }
}
