import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  id:number;
  product:Product;
  constructor(private prodServ:ProductsService,private cartServ:CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
    this.cartServ.addItem(this.product);
    console.log(this.product);
    console.log(this.cartServ.getCart());
  }
  getProduct(){
    this.id =+ this.route.snapshot.paramMap.get('id');
    this.product=this.prodServ.getProduct(this.id);
    
  }

}
