import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import {BreakpointObserver, LayoutModule} from '@angular/cdk/layout';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  id: number;
  product: Product;
  quantity = 0;
  isSmallScreen:boolean;
  constructor(private prodServ: ProductsService, private cartServ: CartService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    
    this.getProduct();
    const item = this.cartServ.getCart().filter(x => x.itemId === this.id);
    if (item.length > 0) { this.quantity = item[0].itemQuantity; }
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');

  }
  getProduct(){
    this.id = + this.route.snapshot.paramMap.get('id');
    this.product = this.prodServ.getProduct(this.id);

  }
  addProductToCart(): void{
    this.cartServ.addItem(this.product);
    this.quantity++;
  }
  removeProductFromCart(): void{
    if (this.quantity > 0){
      this.cartServ.removeItem(this.product);
      this.quantity--;
    }

  }

}
