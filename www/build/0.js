webpackJsonp([0],{

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__register__["a" /* RegisterPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__register__["a" /* RegisterPage */]
        ]
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
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
    function RegisterPage(nav, fb, loadingCtrl, alertCtrl) {
        this.nav = nav;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.backgroundImage = "./assets/bg2.jpg";
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.registerForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])],
            profileName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    RegisterPage.prototype.registerUser = function () {
        console.log("call signopUser");
        if (!this.registerForm.valid) {
            console.log(this.registerForm.value);
            this.presentAlert("invalid form");
        }
        else {
            var loadingPopup = this.loadingCtrl.create({
                spinner: 'crescent',
                content: 'Creating..'
            });
            this.nav.setRoot('LoginPage');
            //loadingPopup.present();
            /* this.authData.registerUser(
                 this.registerForm.value.profileName,
                 this.registerForm.value.email,
                 this.registerForm.value.password,
                 this.registerForm.value.phone)
             .then(() => {
                 loadingPopup.dismiss();
                 this.nav.setRoot('AfterLoginPage');
             }, (error) => {
                var errorMessage: string = error.message;
                 loadingPopup.dismiss();
                 this.presentAlert(errorMessage);
             });*/
        }
    };
    RegisterPage.prototype.presentAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: title,
            buttons: ['OK']
        });
        alert.present();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\register\register.html"*/'\n<ion-header no-border>\n  <ion-navbar transparent color="light">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content [ngStyle]="{\'background-image\': \'url(\' + backgroundImage +\')\'}">\n  <div class="login-container">\n    <img class="logo" src="./assets/medium_150.70391061453px_1202562_easyicon.net.png" />\n    <!--*********** Form ***********-->\n\n    <form [formGroup]="registerForm" (submit)="registerUser()" novalidate>\n\n      <ion-item>\n        <ion-label stacked>Name</ion-label>\n        <ion-input tappable formControlName="profileName" type="text" placeholder="Your name" [class.invalid]="!registerForm.controls.profileName.valid && registerForm.controls.profileName.dirty"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input tappable formControlName="email" type="email" placeholder="Your email address" [class.invalid]="!registerForm.controls.email.valid && registerForm.controls.email.dirty"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Phone</ion-label>\n        <ion-input tappable formControlName="phone"  type="tel" placeholder="Phone number" [class.invalid]="!registerForm.controls.phone.valid && registerForm.controls.phone.dirty"></ion-input>\n      </ion-item>\n\n\n\n\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input tappable formControlName="password" type="password" placeholder="Your password" [class.invalid]="!registerForm.controls.password.valid && registerForm.controls.password.dirty"></ion-input>\n      </ion-item>\n\n\n      \n      <ion-item class="error-message">\n        <p *ngIf="!registerForm.controls.profileName.valid  &&\n                registerForm.controls.profileName.dirty">*Please enter your name.</p>\n        <p *ngIf="!registerForm.controls.email.valid  &&\n                registerForm.controls.email.dirty">*Please enter a valid email.</p>\n        <p *ngIf="!registerForm.controls.phone.valid  &&\n                registerForm.controls.phone.dirty">*Please enter phone number.</p>\n        <p *ngIf="!registerForm.controls.password.valid  &&\n        registerForm.controls.password.dirty">*Password needs more than 6 characters.</p>\n      </ion-item>\n        <button ion-button full type="submit" color="blue2">\n            Create an Account\n        </button>\n    </form>\n  </div>\n</ion-content>\n<ion-footer color="blue2">\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\register\register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=0.js.map