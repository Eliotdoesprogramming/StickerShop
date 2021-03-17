import { EventEmitter, NgModule } from '@angular/core';
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
import { MatButtonModule} from '@angular/material/button';
import { ContactcontainerComponent } from './components/contactcontainer/contactcontainer.component';
import { AboutComponent } from './pages/about/about.component';
import { PayPalModule } from './paypal/paypal.module';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { merchantId, shopId } from './models/paypalconfig';




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
    CartItemComponent,
    ContactcontainerComponent,
    AboutComponent,
    
    ProductPreviewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    PayPalModule.init({
      clientId: shopId, // Using sandbox for testing purposes only
      currency: "USD",
      integrationDate: "2021-03-16",
      merchantId: merchantId
      //commit: true,
      //vault: true,
      //disableFunding: "card"
    }),
    MatOptionModule,
    MatListModule,
    MatSelectModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
