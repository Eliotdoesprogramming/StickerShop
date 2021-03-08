import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/models/cartItem';
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
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getCart();
  }
  getCart():void{
    this.cart=this.cartService.getCart();

  }

}
