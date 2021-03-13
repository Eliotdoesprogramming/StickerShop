import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/models/cartItem';
import { OrderRequest } from 'src/app/paypal';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  
  constructor(private cartService:CartService, private productService: ProductsService) { }
  order: OrderRequest = {
    intent: 'CAPTURE', 
    payer: {
      name: {
        given_name: "PayPal",
        surname: "Customer"
      },
      address: {
        address_line_1: '123 ABC Street',
        address_line_2: 'Apt 2',
        admin_area_2: 'San Jose',
        admin_area_1: 'CA',
        postal_code: '95121',
        country_code: 'US'
      },
      email_address: "customer@domain.com",
      phone: {
        phone_type: "MOBILE",
        phone_number: {
          national_number: "14082508100"
        }
      }
    },
    purchase_units: [{
      custom_id: 'stickers',
      amount: {
        currency_code: 'USD',
        value: '9.99'
      },
      shipping: {
        address: {
          address_line_1: '2211 N First Street',
          address_line_2: 'Building 17',
          admin_area_2: 'San Jose',
          admin_area_1: 'CA',
          postal_code: '95131',
          country_code: 'US'
        }
      }
    }]
  };
  ngOnInit(): void {
    let cart: cartItem[] = this.cartService.getCart();
    let subtotal :number = 0;
    cart.forEach((item)=> subtotal+=(this.productService.getProduct(item.itemId).price)*item.itemQuantity);
  }

}
