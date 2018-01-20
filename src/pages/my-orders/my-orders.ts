import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { OrderDetailPage } from '../order-details/order-details'
import { MyOrdersService } from './my-orders.service';
import { MyOrdersModel } from './my-orders.model';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'page-my-orders',
  templateUrl: 'my-orders.html',
  providers: [MyOrdersService]
})

export class MyOrdersPage implements OnInit {

  private myOrders = new Array<MyOrdersModel>();

  constructor(private navCtrl: NavController, 
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private authService: AuthService, 
    private service: MyOrdersService,) {

  }

  ngOnInit() {
    this.myOrders = this.service.getOrders(this.navParams.data);
  }

  openModal(orderDetails) {

    let modal = this.modalCtrl.create(OrderDetailPage, orderDetails);
    modal.present();
  }

}
