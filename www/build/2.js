webpackJsonp([2],{

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forgot__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPageModule = (function () {
    function ForgotPageModule() {
    }
    return ForgotPageModule;
}());
ForgotPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__forgot__["a" /* ForgotPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__forgot__["a" /* ForgotPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__forgot__["a" /* ForgotPage */]
        ]
    })
], ForgotPageModule);

//# sourceMappingURL=forgot.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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



var ForgotPage = (function () {
    function ForgotPage(fb, nav, loadingCtrl, alertCtrl) {
        this.fb = fb;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.backgroundImage = "./assets/bg3.jpg";
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.resetPasswordForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])],
        });
    }
    ForgotPage.prototype.resetPassword = function () {
        if (!this.resetPasswordForm.valid) {
            console.log("form is invalid = " + this.resetPasswordForm.value);
        }
        else {
            var loadingPopup = this.loadingCtrl.create({
                spinner: 'crescent',
                content: ''
            });
            this.nav.setRoot('LoginPage');
            //loadingPopup.present();
            /*this.authData.resetPassword(this.resetPasswordForm.value.email)
            .then((user) => {
                loadingPopup.dismiss();
                this.presentAlert("We just sent you a reset link to your email");
                this.nav.setRoot('LoginPage');
            }, (error) => {
                loadingPopup.dismiss();
                var errorMessage: string = error.message;
                this.presentAlert(errorMessage);
            });*/
        }
    };
    ForgotPage.prototype.presentAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: title,
            buttons: ['OK']
        });
        alert.present();
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-forgot',template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\forgot\forgot.html"*/'<ion-header no-border>\n  <ion-navbar transparent color="light">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content [ngStyle]="{\'background-image\': \'url(\' + backgroundImage +\')\'}">\n  <div class="login-container">\n    <img class="logo" src="./assets/medium_150.70391061453px_1202562_easyicon.net.png" />\n    <form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>\n\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input tappable formControlName="email" type="email" placeholder="Your email address" [class.invalid]="!resetPasswordForm.controls.email.valid && resetPasswordForm.controls.email.dirty"></ion-input>\n      </ion-item>\n\n      <ion-item class="error-message">\n        <p  *ngIf="!resetPasswordForm.controls.email.valid  && resetPasswordForm.controls.email.dirty">Please enter a valid email.</p>\n      </ion-item>\n\n      <button ion-button block type="submit" color="blue2">\n        Reset your Password\n      </button>\n\n    </form>\n\n  </div>\n</ion-content>'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\forgot\forgot.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ })

});
//# sourceMappingURL=2.js.map