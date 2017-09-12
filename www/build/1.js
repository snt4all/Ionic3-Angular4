webpackJsonp([1],{

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridHomePageModule", function() { return GridHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_home__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GridHomePageModule = (function () {
    function GridHomePageModule() {
    }
    return GridHomePageModule;
}());
GridHomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__grid_home__["a" /* GridHomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__grid_home__["a" /* GridHomePage */]),
        ],
    })
], GridHomePageModule);

//# sourceMappingURL=grid-home.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GridHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GridHomePage = (function () {
    function GridHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GridHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GridHomePage');
    };
    return GridHomePage;
}());
GridHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-grid-home',template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\grid-home\grid-home.html"*/'<!--\n  Generated template for the GridHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>GridHome</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-row class="row">\n<ion-col width-50>\n		\n				<ion-card-content>\n		<img src="assets/imgs/default_user.png" style="height: 30%;\n    margin-left: 15px;\n    width: 25%;"/>\n          	</ion-card-content>\n\n    </ion-col>\n    <ion-col width-50>\n\n				<ion-card-content>\n            <strong>Hello,</strong>\n                  <p>Test Patient F 12/02/1932 </p>\n                  \n          	</ion-card-content>\n\n    </ion-col>\n</ion-row>\n\n <ion-row class="row">\n    <ion-col style="margin-left: 15px;">\n      <strong>Phone Number :</strong>\n      <p>9900099000</p>\n    </ion-col>\n  </ion-row>\n  <ion-row class="row">\n    <ion-col>\n      <strong>Insurance Company :</strong>\n<p>	Aetna Gold HMO</p>\n    </ion-col>\n  </ion-row>\n<ion-row class="row">\n<ion-col >\n			<ion-card responsive-sm style="background: coral">\n				<ion-card-content class="card-content">\n					<h1 style="text-align: center;\n    margin-top: 30px;\n    margin-bottom: 30px;">Tele Health</h1>\n    <ion-icon name="git-network" role="img" style="\n    float: right;\n    color: gray;\n    font-size: 20px;\n    margin-right: 10px;\n    margin-bottom: 5px;\n    " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon>\n          	</ion-card-content>\n			</ion-card>\n    </ion-col>\n    \n</ion-row>\n  <ion-row class="row"> \n <ion-col width-50>\n			<ion-card  responsive-sm  style="background: blueviolet">\n				<ion-card-content class="card-content">\n					<h1 style="text-align: center;\n    margin-top: 30px;\n    margin-bottom: 30px;">Demographic</h1>\n   <ion-icon name="git-network" role="img" style="\n    float: right;\n    color: gray;\n    font-size: 20px;\n    margin-right: 10px;\n    margin-bottom: 5px;\n    " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon>\n          	</ion-card-content>\n			</ion-card> \n    </ion-col>\n  </ion-row>\n<ion-row class="row">\n<ion-col >\n			<ion-card responsive-sm  style="background: aqua">\n				<ion-card-content class="card-content">\n					<h1 style="text-align: center;\n    margin-top: 30px;\n    margin-bottom: 30px;">My Reports</h1>\n    <ion-icon name="git-network" role="img" style="\n    float: right;\n    color: gray;\n    font-size: 20px;\n    margin-right: 10px;\n    margin-bottom: 5px;\n    " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon>\n          	</ion-card-content>\n			</ion-card>\n    </ion-col>\n    \n</ion-row>\n  <ion-row class="row">\n <ion-col >\n			<ion-card responsive-sm  style="background: brown">\n				<ion-card-content class="card-content">\n					<h1 style="text-align: center;\n    margin-top: 30px;\n    margin-bottom: 30px;">My vitals</h1>\n   <ion-icon name="git-network" role="img" style="\n    float: right;\n    color: gray;\n    font-size: 20px;\n    margin-right: 10px;\n    margin-bottom: 5px;\n    " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon>\n          	</ion-card-content>\n			</ion-card>\n    </ion-col>\n  </ion-row>\n\n<ion-row class="row">\n<ion-col >\n			<ion-card responsive-sm  style="background: cadetblue">\n				<ion-card-content class="card-content">\n					<h1 style="text-align: center;\n    margin-top: 30px;\n    margin-bottom: 30px;">My Hospital admits/discharges</h1>\n    <ion-icon name="git-network" role="img" style="\n    float: right;\n    color: gray;\n    font-size: 20px;\n    margin-right: 10px;\n    margin-bottom: 5px;\n    " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon>\n          	</ion-card-content>\n			</ion-card>\n    </ion-col>\n   \n</ion-row>\n  <ion-row class="row">\n <ion-col >\n			<ion-card responsive-sm  style="background: darkcyan">\n				<ion-card-content class="card-content">\n					<h1 style="text-align: center;\n    margin-top: 30px;\n    margin-bottom: 30px;">My health care providers</h1>\n   <ion-icon name="git-network" role="img" style="\n    float: right;\n    color: gray;\n    font-size: 20px;\n    margin-right: 10px;\n    margin-bottom: 5px;\n    " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon>\n          	</ion-card-content>\n			</ion-card>\n    </ion-col> \n\n\n  </ion-row>\n  <ion-row class="row">\n<ion-col >\n			<ion-card responsive-sm  style="background:rosybrown">\n				<ion-card-content class="card-content">\n					<h1 style="text-align: center;\n    margin-top: 30px;\n    margin-bottom: 30px;">My Medications</h1>\n    <ion-icon name="git-network" role="img" style="\n    float: right;\n    color: gray;\n    font-size: 20px;\n    margin-right: 10px;\n    margin-bottom: 5px;\n    " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon>\n          	</ion-card-content>\n			</ion-card>\n    </ion-col>\n   \n</ion-row>\n  <ion-row class="row">\n<ion-col >\n			<ion-card responsive-sm  style="background: forestgreen">\n				<ion-card-content class="card-content">\n					<h1 style="text-align: center;\n    margin-top: 30px;\n    margin-bottom: 30px;">My Medical Problems</h1>\n   <ion-icon name="git-network" role="img" style="\n    float: right;\n    color: gray;\n    font-size: 20px;\n    margin-right: 10px;\n    margin-bottom: 5px;\n    " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon>\n          	</ion-card-content>\n			</ion-card>\n    </ion-col> \n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\grid-home\grid-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], GridHomePage);

//# sourceMappingURL=grid-home.js.map

/***/ })

});
//# sourceMappingURL=1.js.map