import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../service/auth-service';
 
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {
  createSuccess = false;
  registerCredentials = { 
    firstName: '', 
    lastName: '',
    mobile: '',
    email: '',
    password: '' 
  };
 
  constructor(private navCtrl: NavController, private auth: AuthService, private alertCtrl: AlertController) { }
 
  public login() {
    this.navCtrl.popToRoot();
  }

  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}