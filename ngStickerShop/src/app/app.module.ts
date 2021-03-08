import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './navigation/main-menu/main-menu.component';
import { FootMenuComponent } from './navigation/foot-menu/foot-menu.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ActivatedRoute } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { MatButtonModule} from '@angular/material/button'


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FootMenuComponent,
    ProductPreviewComponent,
    HomeComponent,
    ProductPageComponent,
    CheckoutPageComponent,
    ContactPageComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
