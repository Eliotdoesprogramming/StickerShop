import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { OnApprove, OnApproveActions, OnApproveData, OnCancelData, OnErrorData, OrderRequest } from 'src/app/paypal';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit, OnApprove {
  cart: CartItem[];
  constructor(private cartService: CartService, private productService: ProductsService) { }

  // width works but like not more than 50
  subtotal = 0;
  height = 25;
  shape = 'rect';
  color = 'gold';
  label = 'paypal';
  layout = 'vertical';
  order: OrderRequest = {
    intent: 'CAPTURE',
    // payer: {
    //   name: {
    //     given_name: "PayPal",
    //     surname: "Customer"
    //   },
    //   address: {
    //     address_line_1: '345sd',
    //     address_line_2: 'Apt 2',
    //     admin_area_2: 'San Jose',
    //     admin_area_1: 'CA',
    //     postal_code: '95121',
    //     country_code: 'US'
    //   },
    //   email_address: "customer@domain.com",
    //   phone: {
    //     phone_type: "MOBILE",
    //     phone_number: {
    //       national_number: "14082508100"
    //     }
    //   }
    // },
    purchase_units: [
      {
          amount: {
              currency_code: 'USD',
              value: '200.00',
              breakdown: {
                  item_total: {
                      currency_code: 'USD',
                      value: '200.00'
                  }
              }
          },
          items: [

          ],

      }
  ]
  };

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.setSubtotal();
  }
  setSubtotal(): void {
    this.subtotal = 0;
    this.cart.forEach((item) => {
                                  const product = this.productService.getProduct(item.itemId);
                                  this.subtotal += (product.price) * item.itemQuantity;

                                  this.order.purchase_units[0].items.push({
                                    name: product.name,
                                    description: 'test',
                                    unit_amount: {
                                      currency_code: 'USD',
                                      value: product.price + '',
                                    },
                                    quantity: item.itemQuantity + ''
                                  });
    });
    this.order.purchase_units[0].amount.value = this.subtotal + '';
    this.order.purchase_units[0].amount.breakdown.item_total.value = this.subtotal + '';
    console.log(this.subtotal);
  }
  onApprove(event):any{
    console.log(event)
  }
  // onApprove(data: OnApproveData, actions: OnApproveActions):any {

  //   console.log('Transaction Approved:', data);

  //   // Captures the trasnaction
  //   return actions.order.capture().then(details => {

  //     console.log('Transaction completed by', details);

  //     // Call your server to handle the transaction
  //     return Promise.reject('Transaction aborted by the server');
  //   });
  // }
  onCancel(data: OnCancelData): any {

    console.log('Transaction Cancelled:', data);
  }

  onError(data: OnErrorData): any {

    console.log('Transaction Error:', data);
  }


}
