import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { OnApprove, OnApproveActions, OnApproveData, OnCancelData, OnErrorData, OrderRequest, PayPalProcessor } from 'src/app/paypal';

@Component({
  selector: 'pp-button',
  templateUrl: './pp.component.html',
  styleUrls: ['./pp.component.css'],
  providers:[{ provide: PayPalProcessor, useExisting: forwardRef(() => PpComponent) }]
})
export class PpComponent implements OnInit, OnApprove {
  width = 220;
  //width works but like not more than 50
  height = 35;
  shape = 'rect';
  color = 'gold';
  label = 'paypal';
  layout = 'vertical';
  @Input() order: OrderRequest;
  constructor() { }


  ngOnInit(): void {
  }





  onApprove(data: OnApproveData, actions: OnApproveActions) {
    
    console.log('Transaction Approved:', data);

    // Captures the trasnaction
    return actions.order.capture().then(details => {

      console.log('Transaction completed by', details);

      // Call your server to handle the transaction
      return Promise.reject('Transaction aborted by the server');
    });
  }
  onCancel(data: OnCancelData) {

    console.log('Transaction Cancelled:', data); 
  }

  onError(data: OnErrorData) { 

    console.log('Transaction Error:', data); 
  }

}
