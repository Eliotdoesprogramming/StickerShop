import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() subtotal: number;
  cart: CartItem[];
  cartSize: number;
  @Output() cartUpdate: EventEmitter<any> = new EventEmitter();
  constructor(private cartService: CartService, private productService: ProductsService) { }
  // secret comment to test updates
  
  ngOnInit(): void {
    this.getCart();
  }
  getCart(): void{
    this.cart = this.cartService.getCart();
  }
  addItem(toAdd: CartItem):void{

    this.cartService.addItem(this.productService.getProduct(toAdd.itemId));
    console.log('added');
    this.cartUpdate.emit(null);
  }
  removeItem(toRemove: CartItem): void{
    if (toRemove.itemQuantity < 1) { return; }
    console.log('removed');

    this.cartService.removeItem(this.productService.getProduct(toRemove.itemId));
    this.cartUpdate.emit(null);
  }

}
