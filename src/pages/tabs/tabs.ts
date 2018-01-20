import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { MyOrdersPage } from '../my-orders/my-orders';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = MyOrdersPage;

  constructor() {

  }  
}
