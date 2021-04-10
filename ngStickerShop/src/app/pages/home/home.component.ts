import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  isSmallScreen: boolean;
  constructor(private prodService: ProductsService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.products = this.prodService.getProducts();
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
  }

}
