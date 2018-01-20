import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePipe, TitleCasePipe } from '@angular/common'

import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { MyOrdersPage } from '../pages/my-orders/my-orders';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OrderDetailPage } from '../pages/order-details/order-details'
import { DataService } from '../service/data-service';
import { Configuration } from '../app/app.constants';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AuthService } from '../service/auth-service';
import { AdminHome } from '../pages/admin/admin-home/admin-home';
import { AdminTabsPage } from '../pages/admin/admin-tabs/admin-tabs';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    MyOrdersPage,
    HomePage,
    TabsPage,
    OrderDetailPage,
    LoginPage,
    RegisterPage,
    AdminHome,
    AdminTabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    MyOrdersPage,
    HomePage,
    TabsPage,
    OrderDetailPage,
    LoginPage,
    RegisterPage,
    AdminHome,
    AdminTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    Configuration,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DatePipe,
    TitleCasePipe
  ]
})
export class AppModule {}
