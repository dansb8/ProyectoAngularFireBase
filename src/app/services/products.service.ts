import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from 'src/app/interfaces/product'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsCollection: AngularFirestoreCollection<Product>;
  private productDocument: AngularFirestoreDocument<Product>;
  products: Observable<Product[]>
  constructor(private _afs: AngularFirestore ){
    this.productsCollection = _afs.collection<Product>('products')
    //this.products = this.productsCollection.valueChanges();
    this.products = this.productsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
          const data = a.payload.doc.data() as Product;
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      )
    );
  }
  getProducts(){
    return this.products
  }
  addProduct(product: Product){
    this.productsCollection.add(product);
  }
  deleteProduct(product){
    this.productDocument = this._afs.doc<Product>(`products/${product.id}`)
    //console.log(this.productDocument)
    this.productDocument.delete()
  }
  editProduct(product){
    this.productDocument = this._afs.doc<Product>(`products/${product.id}`)
    //console.log(this.productDocument)
    this.productDocument.update(product)
  }
}
