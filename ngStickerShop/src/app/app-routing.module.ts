import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { PuchasePolicyComponent } from './pages/puchase-policy/puchase-policy.component';

const routes: Routes = [
                        {path: '', component: HomeComponent},
                        {path: 'product/:id', component: ProductPageComponent},
                        {path: 'contact', component: ContactPageComponent},
                        {path: 'checkout', component: CheckoutPageComponent},
                        {path: 'contact', component: ContactPageComponent},
                        {path: 'about', component: AboutComponent},
                        {path:'purchasepolicy', component : PuchasePolicyComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
