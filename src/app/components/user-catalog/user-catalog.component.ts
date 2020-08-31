import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-user-catalog',
  templateUrl: './user-catalog.component.html',
  styleUrls: ['./user-catalog.component.css']
})
export class UserCatalogComponent implements OnInit {

  products: Product[];
  searchStr: string = "";
  constructor(private _productSvc: ProductsService) { }

  ngOnInit(): void {
    this._productSvc.getProducts().subscribe(
      data => {
        console.log(data)
        this.products = data
      },
      err => {
        console.log(err)
      }
    )
  }
  search() {
    this._productSvc.getProducts().subscribe(
      data => {
        console.log(data)
        this.products = data
        if (this.searchStr != "")
          this.products = this.products.filter(x => {
            return x.name.toLowerCase().includes(this.searchStr.toLowerCase())
          })
      },
      err => {
        console.log(err)
      }
    )
  }

}
