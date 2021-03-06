import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { prodArray } from '../models/productList';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Product[] = prodArray;

  
  constructor() { }


  getProducts():Product[]{
    return this.products;
  }
}
