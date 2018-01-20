import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from '../../profile/profile';
import { MyOrdersPage } from '../../my-orders/my-orders';
import { AuthService } from '../../../service/auth-service';

@Component({
  templateUrl: 'admin-tabs.html'
})
export class AdminTabsPage {

  private tab1Root = ProfilePage;
  private tab2Root = MyOrdersPage;
  private tab1Params: string;

  constructor(private authService: AuthService, private navCtrl: NavController, private navPrams: NavParams) {
    this.tab1Params = navPrams.data;
  }
}
