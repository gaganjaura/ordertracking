import { Component, OnInit } from '@angular/core';
import { NavParams, App } from 'ionic-angular';

import { ProfileService } from './profile.service';
import { ProfileViewModel } from '../../model/profile';
import { AuthService } from '../../service/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [ProfileService]
})

export class ProfilePage implements OnInit {

  private profile: ProfileViewModel;
  private isEditAddressClicked: boolean = false;
  private isEditProfileClicked: boolean = false;

  constructor(private service: ProfileService,
    private navParams: NavParams,
    private authService: AuthService,
    private app: App) {

  }

  ngOnInit() {
    this.profile = this.service.getCustomerInfo(this.navParams.data);
  }

  logout() {
    this.authService.logout().subscribe(success => {
      if (success) {
        this.app.getRootNav().setRoot(LoginPage);
      }
    });
  }

  addressEdit_Click(){
    this.isEditAddressClicked = true;
  }

  addressSave_Click(){
    this.isEditAddressClicked = false;
  }

  profileEdit_Click(){
    this.isEditProfileClicked = true;
  }

  profileSave_Click(){
    this.isEditProfileClicked = false;
  }
}
