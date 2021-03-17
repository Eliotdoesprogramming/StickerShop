import { Injectable } from '@angular/core';

import { cartItem } from '../models/cartItem';
import { Product } from '../models/product';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: cartItem[]=[];
  constructor(private productService: ProductsService) { }
  addItem(prod:Product):void{
    let toIncrement = this.cart.filter(it => it.itemId ==prod.id);
    if(toIncrement.length>0) toIncrement[0].itemQuantity++;
    else this.cart.push({itemId:prod.id,itemQuantity:1});
  }
  removeItem(prod:Product):void{
    
    let toIncrement = this.cart.filter(it => it.itemId ==prod.id);
    if(toIncrement[0].itemQuantity<1) return;
    if(toIncrement.length>0){
      toIncrement[0].itemQuantity--;
      if(toIncrement[0].itemQuantity<1){
        this.cart.splice(this.cart.indexOf(toIncrement[0]),1);
      } 
    }
  }
  getCart():cartItem[]{
    return this.cart;
  }
  clearCart():void{
    this.cart = [];
  }
  getSubtotal(): number{
    let subtotal = 0;
    this.cart.forEach(cartitem => subtotal+=(this.productService.getProduct(cartitem.itemId).price*cartitem.itemQuantity));
    return subtotal;
  }
  
}
