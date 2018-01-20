import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';

import { AuthService } from '../../service/auth-service';
import { TabsPage } from '../tabs/tabs'; 
import { RegisterPage } from '../register/register';
import { AdminHome } from '../admin/admin-home/admin-home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private loading: Loading;
  private credentials: any = { emailOrMobile: '9958893293', password: '123456' }

  constructor(public navCtrl: NavController, public authService: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    
  }

  public createAccount() {
    this.navCtrl.push(RegisterPage);
  }

  public login() {
    this.showLoading()
    this.authService.login(this.credentials).subscribe(allowed => {
      if (allowed) {        
        if (this.authService.getUserInfo().role == "admin"){
          this.navCtrl.setRoot(AdminHome);
        }          
        else{
          this.navCtrl.setRoot(TabsPage);
        }          
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}