webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(service, navParams, authService, app) {
        this.service = service;
        this.navParams = navParams;
        this.authService = authService;
        this.app = app;
        this.isEditAddressClicked = false;
        this.isEditProfileClicked = false;
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.profile = this.service.getCustomerInfo(this.navParams.data);
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function (success) {
            if (success) {
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    };
    ProfilePage.prototype.addressEdit_Click = function () {
        this.isEditAddressClicked = true;
    };
    ProfilePage.prototype.addressSave_Click = function () {
        this.isEditAddressClicked = false;
    };
    ProfilePage.prototype.profileEdit_Click = function () {
        this.isEditProfileClicked = true;
    };
    ProfilePage.prototype.profileSave_Click = function () {
        this.isEditProfileClicked = false;
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/gritsa/ionic/PrinceTailor/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon name="contact" color="primary"></ion-icon>\n      </ion-avatar>\n      <h2>{{profile.FullName}}</h2>\n      <p>{{profile.MobileNumber}}</p>\n    </ion-item>\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="dark" icon-start>\n          <b>Address</b>\n        </button>\n      </ion-col>\n      <ion-col text-right *ngIf="profile.IsAdmin">\n        <button *ngIf="!isEditAddressClicked" ion-button clear small icon-start (click)="addressEdit_Click()">\n          <ion-icon name=\'create\'></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row padding-left>\n      <ion-col text-left>\n        <p *ngIf="!isEditAddressClicked">{{profile.Address}}</p>\n        <ion-grid *ngIf="isEditAddressClicked" no-padding>\n          <ion-row>\n            <ion-col>\n              <ion-input type="text" placeholder="Address1" [(ngModel)]="profile.Address1"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-input type="text" placeholder="Address2" [(ngModel)]="profile.Address2"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-input type="text" placeholder="City" [(ngModel)]="profile.City"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-input type="text" placeholder="State" [(ngModel)]="profile.State"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-input type="text" placeholder="Zip" [(ngModel)]="profile.Zip"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <button ion-button block (click)="addressSave_Click()">Save</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear small color="dark" icon-start>\n          <b>Additional Info</b>\n        </button>\n      </ion-col>\n      <ion-col text-right *ngIf="profile.IsAdmin">\n        <button *ngIf="!isEditProfileClicked" ion-button clear small icon-start (click)="profileEdit_Click()">\n          <ion-icon name=\'create\'></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row padding-left>\n      <ion-col text-left>\n        <ion-grid no-padding>\n          <ion-row *ngIf="!isEditProfileClicked">\n            <ion-col>\n              <ion-label stacked class="ionLabel">Gender</ion-label>\n              <p>{{profile.Gender}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="isEditProfileClicked">\n            <ion-col>\n              <ion-label stacked class="ionLabel">Gender</ion-label>\n              <ion-select [(ngModel)]="profile.Gender" interface="action-sheet">\n                <ion-option value="Male">Male</ion-option>\n                <ion-option value="Female">Female</ion-option>\n                <ion-option value="Other">Other</ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="!isEditProfileClicked">\n            <ion-col>\n              <ion-label stacked class="ionLabel">Birth Date</ion-label>\n              <p>{{profile.BirthDate}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="isEditProfileClicked">\n            <ion-col>\n              <ion-label stacked class="ionLabel">Birth Date</ion-label>\n              <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="profile.BirthDate"></ion-datetime>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="isEditProfileClicked">\n            <ion-col>\n              <button ion-button block (click)="profileSave_Click()">Save</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button color="light" block (click)="logout()" *ngIf="!profile.IsAdmin">Log Out</button>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-card-content class="alignLeft">\n      <h3>\n        <b>Gender</b>\n      </h3>\n      <p>{{profile.Gender}}</p>\n    </ion-card-content>\n    <ion-card-content class="alignLeft">\n      <h3>\n        <b>Birth Date</b>\n      </h3>\n      <p>{{profile.BirthDate ? profile.BirthDate.toLocaleDateString() : ""}}</p>\n    </ion-card-content> -->\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/gritsa/ionic/PrinceTailor/src/pages/profile/profile.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_details_order_details__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_orders_service__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_auth_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyOrdersPage = (function () {
    function MyOrdersPage(navCtrl, modalCtrl, navParams, authService, service) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.service = service;
        this.myOrders = new Array();
    }
    MyOrdersPage.prototype.ngOnInit = function () {
        //TODO: The below hard coded id must be changed with login customer ID
        this.myOrders = this.service.getOrders(this.navParams.data);
    };
    MyOrdersPage.prototype.openModal = function (orderDetails) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__order_details_order_details__["a" /* OrderDetailPage */], orderDetails);
        modal.present();
    };
    return MyOrdersPage;
}());
MyOrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-orders',template:/*ion-inline-start:"/home/gritsa/ionic/PrinceTailor/src/pages/my-orders/my-orders.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      My Orders\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>    \n    <a ion-item (click)="openModal({orderDetails: order.OrderDetails})" *ngFor="let order of myOrders">\n      <h2>{{order.OrderName}}</h2>\n      <p>{{order.OrderDate ? order.OrderDate.toLocaleDateString(\'en-IN\') : ""}}</p>\n    </a>    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/gritsa/ionic/PrinceTailor/src/pages/my-orders/my-orders.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__my_orders_service__["a" /* MyOrdersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__my_orders_service__["a" /* MyOrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__my_orders_service__["a" /* MyOrdersService */]) === "function" && _e || Object])
], MyOrdersPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=my-orders.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Configuration = (function () {
    function Configuration() {
        this.Server = 'http://localhost:1337/';
        this.ApiUrl = '';
        this.ServerWithApiUrl = this.Server + this.ApiUrl;
    }
    return Configuration;
}());
Configuration = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], Configuration);

//# sourceMappingURL=app.constants.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_orders_my_orders__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__profile_profile__["a" /* ProfilePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__my_orders_my_orders__["a" /* MyOrdersPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/gritsa/ionic/PrinceTailor/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="My Orders" tabIcon="cart"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/gritsa/ionic/PrinceTailor/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderDetailPage = (function () {
    function OrderDetailPage(navCtrl, platform, params, viewCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.orderDetails = this.params.get('orderDetails')[0];
    }
    OrderDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return OrderDetailPage;
}());
OrderDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/gritsa/ionic/PrinceTailor/src/pages/order-details/order-details.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Order Details\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon name="ribbon" style="font-size: 40px;"></ion-icon>\n      </ion-avatar>\n      <h2>{{orderDetails.OrderName}}</h2>\n    </ion-item>\n    <ion-item>\n      Order#\n      <ion-note item-end>\n        {{orderDetails.OrderNumber}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      Order Date\n      <ion-note item-end>\n        {{orderDetails.OrderDate ? orderDetails.OrderDate.toLocaleDateString(\'en-IN\') : ""}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      Order Status\n      <ion-note item-end>\n        {{orderDetails.OrderStatus}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      Delivery Date\n      <ion-note item-end>\n        {{orderDetails.DeliveryDate ? orderDetails.DeliveryDate.toLocaleDateString(\'en-IN\') : ""}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      Quantity\n      <ion-note item-end>\n        {{orderDetails.Quantity}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      Amount\n      <ion-note item-end>\n        {{orderDetails.Amount.toLocaleString(\'en-IN\', { style: \'currency\', currency: \'INR\' })}}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/gritsa/ionic/PrinceTailor/src/pages/order-details/order-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], OrderDetailPage);

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/gritsa/ionic/PrinceTailor/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="true" class="background-page">    \n  <div class="card-title">Prince Tailors</div>\n  <div class="card-subtitle">Your Personal Stylist</div>\n</ion-content>\n'/*ion-inline-end:"/home/gritsa/ionic/PrinceTailor/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = (function () {
    function RegisterPage(navCtrl, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = {
            firstName: '',
            lastName: '',
            mobile: '',
            email: '',
            password: ''
        };
    }
    RegisterPage.prototype.login = function () {
        this.navCtrl.popToRoot();
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.auth.register(this.registerCredentials).subscribe(function (success) {
            if (success) {
                _this.createSuccess = true;
                _this.showPopup("Success", "Account created.");
            }
            else {
                _this.showPopup("Error", "Problem creating account.");
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/home/gritsa/ionic/PrinceTailor/src/pages/register/register.html"*/'<ion-content class="background">\n    <ion-card>\n        <ion-card-header>\n            Register Form\n        </ion-card-header>\n        <ion-card-content>\n            <form (ngSubmit)="register()" #registerForm="ngForm">                \n                <ion-list no-line>\n                    <ion-item>\n                        <ion-input type="text" placeholder="First Name" name="firstName" [(ngModel)]="registerCredentials.firstName" required></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Last Name" name="lastName" [(ngModel)]="registerCredentials.lastName" required></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Mobile" name="mobile" [(ngModel)]="registerCredentials.mobile" required></ion-input>\n                    </ion-item>                    \n                    <ion-item>\n                        <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" ></ion-input>\n                    </ion-item>                    \n                    <button ion-button block outline color="light" type="submit" [disabled]="!registerForm.form.valid">Register</button>\n                </ion-list>\n            </form>\n        </ion-card-content>\n    </ion-card>\n    <button class="bottom" ion-button clear full color="light" (click)="login()">Already have an account? Log In</button>\n</ion-content>'/*ion-inline-end:"/home/gritsa/ionic/PrinceTailor/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_tabs_admin_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminHome = (function () {
    function AdminHome(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.initializeItems();
    }
    AdminHome.prototype.initializeItems = function () {
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
    };
    AdminHome.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.mobile.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    AdminHome.prototype.customer_click = function (customerId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__admin_tabs_admin_tabs__["a" /* AdminTabsPage */], customerId);
    };
    AdminHome.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function (success) {
            if (success) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                _this.navCtrl.popToRoot();
            }
        });
    };
    return AdminHome;
}());
AdminHome = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/gritsa/ionic/PrinceTailor/src/pages/admin/admin-home/admin-home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Search Customer\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button clear small color="danger" (click)="logout()" icon-start>\n              <ion-icon name="power"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n        <button ion-item *ngFor="let item of items" (click)="customer_click(item.id)">\n            {{ item.name }}\n            <br>\n            {{ item.mobile }}\n        </button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/gritsa/ionic/PrinceTailor/src/pages/admin/admin-home/admin-home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */]])
], AdminHome);

//# sourceMappingURL=admin-home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_orders_my_orders__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_auth_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminTabsPage = (function () {
    function AdminTabsPage(authService, navCtrl, navPrams) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navPrams = navPrams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__my_orders_my_orders__["a" /* MyOrdersPage */];
        this.tab1Params = navPrams.data;
    }
    return AdminTabsPage;
}());
AdminTabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/gritsa/ionic/PrinceTailor/src/pages/admin/admin-tabs/admin-tabs.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Customer Information\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-tabs>\n    <ion-tab [root]="tab1Root" [rootParams]="tab1Params" tabTitle="Profile" tabIcon="person"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Orders" tabIcon="cart"></ion-tab>\n</ion-tabs>\n  '/*ion-inline-end:"/home/gritsa/ionic/PrinceTailor/src/pages/admin/admin-tabs/admin-tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], AdminTabsPage);

//# sourceMappingURL=admin-tabs.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_my_orders_my_orders__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_order_details_order_details__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_data_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_app_constants__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_register_register__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_admin_admin_home_admin_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_admin_admin_tabs_admin_tabs__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_my_orders_my_orders__["a" /* MyOrdersPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_order_details_order_details__["a" /* OrderDetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_admin_admin_home_admin_home__["a" /* AdminHome */],
            __WEBPACK_IMPORTED_MODULE_19__pages_admin_admin_tabs_admin_tabs__["a" /* AdminTabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_my_orders_my_orders__["a" /* MyOrdersPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_order_details_order_details__["a" /* OrderDetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_admin_admin_home_admin_home__["a" /* AdminHome */],
            __WEBPACK_IMPORTED_MODULE_19__pages_admin_admin_tabs_admin_tabs__["a" /* AdminTabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_14__app_app_constants__["a" /* Configuration */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["j" /* TitleCasePipe */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/gritsa/ionic/PrinceTailor/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/gritsa/ionic/PrinceTailor/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, email, mobile, userId, role) {
        this.fullName = name;
        this.email = email;
        this.mobile = mobile;
        this.userId = userId;
        this.role = role;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_data_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_profile__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MODEL_NAME = 'Customers';
var ProfileService = (function () {
    function ProfileService(service, authService, datePipe, titleCasePipe) {
        this.service = service;
        this.authService = authService;
        this.datePipe = datePipe;
        this.titleCasePipe = titleCasePipe;
        service.setModel(MODEL_NAME);
    }
    ProfileService.prototype.getCustomerInfo = function (customerId) {
        var _this = this;
        if (typeof (customerId) == "object") {
            this.user = this.authService.getUserInfo();
            customerId = this.user.userId;
        }
        var profile = new __WEBPACK_IMPORTED_MODULE_4__model_profile__["a" /* ProfileViewModel */]();
        this.service
            .getById(customerId)
            .subscribe(function (data) {
            _this.updateProfileModel(data, profile);
        }, function (error) { return function () {
            console.log('Error');
        }; });
        return profile;
    };
    ProfileService.prototype.getFullAddress = function (addressObject) {
        var fullAddress;
        fullAddress = addressObject.address_1;
        if (addressObject.address_2)
            fullAddress += ' ' + addressObject.address_2;
        fullAddress += ' ' + addressObject.city;
        fullAddress += ' ' + addressObject.state;
        fullAddress += ' ' + addressObject.zip;
        return fullAddress;
    };
    ProfileService.prototype.updateProfileModel = function (data, profile) {
        profile.FirstName = data.first_name;
        profile.MiddleName = data.middle_name;
        profile.LastName = data.last_name;
        profile.FullName = data.full_name;
        profile.Gender = this.titleCasePipe.transform(data.gender);
        profile.MobileNumber = data.mobile;
        profile.Address1 = data.address_info.address_1;
        profile.Address2 = data.address_info.address_2;
        profile.City = data.address_info.city;
        profile.State = data.address_info.state;
        profile.Zip = data.address_info.zip;
        profile.Address = this.getFullAddress(data.address_info);
        profile.BirthDate = this.datePipe.transform(new Date(data.birth_date), 'yyyy-MM-dd');
        profile.Email = data.email;
        profile.IsAdmin = data.role == "admin" ? true : false;
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* TitleCasePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* TitleCasePipe */]) === "function" && _d || Object])
], ProfileService);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileViewModel; });
var ProfileViewModel = (function () {
    function ProfileViewModel() {
    }
    return ProfileViewModel;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_orders_model__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_details_order_details_model__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MODEL_NAME = 'Orders';
var MyOrdersService = (function () {
    function MyOrdersService(service) {
        this.service = service;
        service.setModel(MODEL_NAME);
    }
    MyOrdersService.prototype.getOrders = function (customerId) {
        var queryString = "findCustomerOrders?customerId=" + customerId;
        var myOrderList = new Array();
        this.service
            .getByQueryString(queryString)
            .subscribe(function (data) {
            data.forEach(function (order) {
                order.order_detail.forEach(function (orderDetail) {
                    var myOrders = new __WEBPACK_IMPORTED_MODULE_2__my_orders_model__["a" /* MyOrdersModel */]();
                    var myOrderDetails = new __WEBPACK_IMPORTED_MODULE_3__order_details_order_details_model__["a" /* OrderDetailsModel */]();
                    myOrders.OrderNumber = order.id;
                    myOrders.OrderName = orderDetail.order_name;
                    myOrders.OrderDate = new Date(order.order_date);
                    myOrderDetails.OrderNumber = order.id;
                    myOrderDetails.OrderDetailNumber = orderDetail.id;
                    myOrderDetails.SequenceNumber = orderDetail.sequence_number;
                    myOrderDetails.OrderName = orderDetail.order_name;
                    myOrderDetails.Quantity = orderDetail.quantity;
                    myOrderDetails.Amount = orderDetail.amount;
                    myOrderDetails.OrderStatus = orderDetail.order_status;
                    myOrderDetails.DeliveryDate = new Date(orderDetail.delivery_date);
                    myOrderDetails.OrderDate = new Date(order.order_date);
                    myOrders.OrderDetails = new Array();
                    myOrders.OrderDetails.push(myOrderDetails);
                    myOrderList.push(myOrders);
                });
            });
        }, function (error) { return function () {
            console.log('Error');
        }; }, function () {
            console.log('success');
        });
        return myOrderList;
    };
    return MyOrdersService;
}());
MyOrdersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */]])
], MyOrdersService);

//# sourceMappingURL=my-orders.service.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersModel; });
var MyOrdersModel = (function () {
    function MyOrdersModel() {
    }
    return MyOrdersModel;
}());

//# sourceMappingURL=my-orders.model.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsModel; });
var OrderDetailsModel = (function () {
    function OrderDetailsModel() {
    }
    return OrderDetailsModel;
}());

//# sourceMappingURL=order-details.model.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_data_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MODEL_NAME = "Customers";
var REQUIRED_MESSAGE = "Please insert credentials";
var AuthService = (function () {
    function AuthService(service) {
        this.service = service;
        this.service.setModel(MODEL_NAME);
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.emailOrMobile === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(REQUIRED_MESSAGE);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                _this.service
                    .getByQueryString("checkCredentials?emailOrMobile=" + credentials.emailOrMobile + "&password=" + credentials.password)
                    .subscribe(function (data) {
                    var access = false;
                    if (data && data.length > 0) {
                        access = true;
                        _this.currentUser = new __WEBPACK_IMPORTED_MODULE_4__model_user__["a" /* User */](data[0].full_name, data[0].email, data[0].mobile, data[0].id, data[0].role);
                    }
                    observer.next(access);
                    observer.complete();
                }, function (error) { return function () {
                    console.log('Error');
                }; });
            });
        }
    };
    AuthService.prototype.register = function (registerCredentials) {
        var _this = this;
        if (registerCredentials.mobile === null || registerCredentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(REQUIRED_MESSAGE);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                _this.service
                    .add(registerCredentials)
                    .subscribe(function (data) {
                    console.log(data);
                    observer.next(true);
                    observer.complete();
                }, function (error) { return function () {
                    observer.next(false);
                    observer.complete();
                }; });
            });
        }
    };
    AuthService.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_data_service__["a" /* DataService */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin_home_admin_home__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, authService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.credentials = { emailOrMobile: '9958893293', password: '123456' };
    }
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.authService.login(this.credentials).subscribe(function (allowed) {
            if (allowed) {
                if (_this.authService.getUserInfo().role == "admin") {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__admin_admin_home_admin_home__["a" /* AdminHome */]);
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
            }
            else {
                _this.showError("Access Denied");
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/gritsa/ionic/PrinceTailor/src/pages/login/login.html"*/'<ion-content class="background">\n	<ion-card>\n		<ion-card-header>\n			Login Form\n		</ion-card-header>\n		<ion-card-content>\n			<form (ngSubmit)="login()" #registerForm="ngForm">\n				<ion-list no-line>\n					<ion-item>\n						<ion-input type="text" placeholder="Email Or Mobile" name="emailOrMobile" [(ngModel)]="credentials.emailOrMobile" required></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="password" placeholder="Password" name="password" [(ngModel)]="credentials.password" required></ion-input>\n					</ion-item>\n					<button ion-button block outline color="light" type="submit" [disabled]="!registerForm.form.valid">Log in</button>\n				</ion-list>\n			</form>\n		</ion-card-content>\n	</ion-card>\n	<button class="bottom" ion-button clear full color="light" (click)="createAccount()">Don\'t have an account? Sign up</button>\n</ion-content>'/*ion-inline-end:"/home/gritsa/ionic/PrinceTailor/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_constants__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http, configuration) {
        var _this = this;
        this.http = http;
        this.configuration = configuration;
        this.apiModelName = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.apiModelName.subscribe(function (model) {
            _this.actionUrl = _this.configuration.ServerWithApiUrl + model + '/';
        });
    }
    DataService.prototype.setModel = function (apiModelName) {
        this.apiModelName.next(apiModelName);
    };
    DataService.prototype.getAll = function () {
        return this.http.get(this.actionUrl);
    };
    DataService.prototype.getById = function (id) {
        return this.http.get(this.actionUrl + id);
    };
    DataService.prototype.getByQueryString = function (queryString) {
        var apiUrl = this.actionUrl + queryString;
        return this.http.get(apiUrl);
    };
    DataService.prototype.add = function (item) {
        //const toAdd = JSON.stringify({ ItemName: itemName });
        return this.http.post(this.actionUrl, JSON.stringify(item));
    };
    DataService.prototype.update = function (id, itemToUpdate) {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate));
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this.actionUrl + id);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* Configuration */]])
], DataService);

//# sourceMappingURL=data-service.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map