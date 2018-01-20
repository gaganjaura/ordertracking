import { Component } from '@angular/core';
import { NavController, Platform, NavParams, ViewController } from 'ionic-angular';

import { OrderDetailsModel } from '../order-details/order-details.model';

@Component({
    templateUrl: 'order-details.html'
})

export class OrderDetailPage {
    
    private orderDetails: OrderDetailsModel;

    constructor(
        public navCtrl: NavController,
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {        
        this.orderDetails = this.params.get('orderDetails')[0];        
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}