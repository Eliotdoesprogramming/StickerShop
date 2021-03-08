import { Component, Input, OnInit } from '@angular/core';
import { cartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item:cartItem;
  product:Product;
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.product=this.getProduct();
  }
  getProduct():Product{
    return this.productService.getProduct(this.item.itemId);
  }

}
