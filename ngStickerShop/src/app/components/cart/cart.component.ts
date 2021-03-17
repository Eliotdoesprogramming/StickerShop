import { Component, EventEmitter, OnInit } from '@angular/core';

import { cartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:cartItem[];
  cartSize:number;
  cartUpdateEmitter:EventEmitter<any>;
  constructor(private cartService:CartService, private productService:ProductsService) { }

  ngOnInit(): void {
    this.getCart();
  }
  getCart():void{
    this.cart=this.cartService.getCart();
  }
  addItem(toAdd:cartItem){
    
    this.cartService.addItem(this.productService.getProduct(toAdd.itemId));

  }
  removeItem(toRemove: cartItem):void{
    if(toRemove.itemQuantity<1) return;
    
    this.cartService.removeItem(this.productService.getProduct(toRemove.itemId));
  }

}
