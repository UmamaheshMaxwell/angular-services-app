import { Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProducts(){
      let productList: Product[];

      productList = [
        new Product("PROD1", "Laptop", 50000),
        new Product("PROD2", "Desktop", 30000),
        new Product("PROD3", "Hard Disk", 10000)
      ]

      return productList;
  }
}
