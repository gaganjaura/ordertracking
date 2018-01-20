import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdminTabsPage } from '../admin-tabs/admin-tabs';
import { AuthService } from '../../../service/auth-service';
import { LoginPage } from '../../login/login';

@Component({
    templateUrl: 'admin-home.html'
})
export class AdminHome {
    private items: any;

    constructor(private navCtrl: NavController, private authService: AuthService) {
        this.initializeItems();
    }

    initializeItems() {
        this.items = [
            {
                name: 'Gagan Deep Jaura',
                mobile: '9958893293',
                id: '5a0eee59548d2dd423c647e6'
            },
            {
                name: 'Sabhyata Jaura',
                mobile: '9971793293',
                id: '5a0ef15a548d2dd423c647e9'
            },
            {
                name: 'Gaurav Singh',
                mobile: '9912393293',
                id: '5a393051c48e84ef5cadd2d8'
            },
            {
                name: 'Rajinder Kumar',
                mobile: '9956789293',
                id: ''
            },
            {
                name: 'Sunita',
                mobile: '9876318199',
                id: ''
            },
            {
                name: 'Karan Luthra',
                mobile: '1234567890',
                id: ''
            }
        ];
    }

    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.mobile.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    customer_click(customerId) {
        this.navCtrl.push(AdminTabsPage, customerId);
    }

    logout() {
        this.authService.logout().subscribe(success => {
            if (success) {
                this.navCtrl.setRoot(LoginPage);
                this.navCtrl.popToRoot();
            }
        });
    }
}