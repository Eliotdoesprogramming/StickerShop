import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  @Input() id:number;
  product:Product;
  constructor(private prodServ:ProductsService) { }

  ngOnInit(): void {
  }
  getProduct(){
    this.product=this.prodServ.getProduct(this.id);
  }

}
