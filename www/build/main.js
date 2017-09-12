webpackJsonp([9],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeleHealthPage; });
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
 * Generated class for the TeleHealthPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TeleHealthPage = (function () {
    function TeleHealthPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        this.itemExpandHeight = 100;
        this.data = this.navParams.get('param1');
        debugger;
        this.items = [
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false }
        ];
    }
    TeleHealthPage.prototype.expandItem = function (item) {
        this.items.map(function (listItem) {
            if (item == listItem) {
                listItem.expanded = !listItem.expanded;
            }
            else {
                listItem.expanded = false;
            }
            return listItem;
        });
    };
    return TeleHealthPage;
}());
TeleHealthPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tele-health',template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\tele-health\tele-health.html"*/'<!--\n  Generated template for the TeleHealthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="background: #5090c1">\n\n  <ion-navbar>\n    <ion-title> Tele Health</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-list>\n          <ion-item *ngFor="let teledata of data">\n          <button detail-none (click)="expandItem(item)" ion-item *ngFor="let item of items">\n            <!-- <ion-thumbnail item-start>\n              <img src="./assets/img/profile/profile-cover.jpg">\n            </ion-thumbnail> -->\n            <h2>Status • {{teledata.Status}}</h2>\n            <h3>Physician name:{{teledata[\'First name\']}}  {{teledata[\'Last name\']}}</h3>\n            <p>Appointment created:{{teledata[\'Appointment Created\']}}<br/>\n              Appointment assign time:{{teledata[\'Assigned Appointment Time\']}}</p>\n            <expandable [expandHeight]="itemExpandHeight" [expanded]="item.expanded">\n              Staff Name:{{teledata[\'Staff Name\']}}\n               Reasoona fro TeleHealth consult:{{teledata[\'Reason for Tele Health Consult\']}}<br/>\n              Physician phone:{{teledata[\'Physician Phone#\']}}<br/>\n            </expandable>\n            <button ion-button clear item-end>View</button>\n          </button>\n          </ion-item>\n        </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\tele-health\tele-health.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], TeleHealthPage);

//# sourceMappingURL=tele-health.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tele_health_tele_health__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(49);
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
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(storage, navParams, navCtrl, toastCtrl, modalCtrl, authService) {
        var _this = this;
        this.storage = storage;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.rootPage = 'ProfilePage';
        this.following = false;
        this.background = {
            coverImage: './assets/img/background/card-amsterdam.png'
        };
        this.user = this.navParams.get('param1');
        this.storage.set('Login_userid', this.user.Id);
        this.storage.get('Login_userid').then(function (val) {
            console.log('Your name is', val);
            _this.Id = val;
        });
        debugger;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('Hello Profile Four Page');
    };
    ProfilePage.prototype.getTeleHealthdata = function () {
        var _this = this;
        this.authService.TeleHealthdata(this.Id).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            console.log(_this.responseData.TeleHealthAppoinmentHistoryList);
            debugger;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tele_health_tele_health__["a" /* TeleHealthPage */], {
                param1: _this.responseData.TeleHealthAppoinmentHistoryList
            });
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.presentProfileModal = function () {
        // let profileModal = this.modalCtrl.create(ChatPage, { userId: 8675309 });
        // profileModal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        //this.nav.setRoot(ChatPage).catch(err => console.error(err));
    };
    ProfilePage.prototype.follow = function () {
        this.following = !this.following;
        this.toastCtrl.create('Follow user clicked');
    };
    ProfilePage.prototype.imageTapped = function (post) {
        this.toastCtrl.create('Post image clicked');
    };
    ProfilePage.prototype.comment = function (post) {
        this.toastCtrl.create('Comments clicked');
    };
    ProfilePage.prototype.like = function (post) {
        this.toastCtrl.create('Like clicked');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    \n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="transparent-header">\n\n<div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + background.coverImage +\')\'}"></div>\n<div id="content">\n  <div id="profile-info" padding>\n    <img id="profile-image" src="./assets/img/avatar/ian-avatar.png" >\n    <h3 id="profile-name">Name :{{user.FirstName}}{{user.LastName}}</h3>\n    <p> DateOfBirth :{{user.DOB}} Age :{{user.Age}} </p>\n     <p class="profile-InsuranceCompany">InsuranceCompany:{{user.InsuranceCompany}}</p>\n        <p class="profile-description">PolicyNumber :{{user.PolicyNumber}}</p>\n    <!-- <button ion-button *ngIf="!following" small color="purple" (click)="follow()">Follow</button>\n    <button ion-button *ngIf="following" class="follow-button" small color="purple" (click)="follow()">Following<ion-icon name="checkmark"></ion-icon></button> -->\n  </div>\n  <hr/>\n  <!-- <ion-row class="profile-numbers">\n    <ion-col col-4>\n      <p>Followers</p>\n      <span>{{user.followers}}</span>\n    </ion-col>\n    <ion-col col-4>\n      <p>Following</p>\n      <span>{{user.following}}</span>\n    </ion-col>\n    <ion-col col-4>\n      <p>Posts</p>\n      <span>{{user.posts}}</span>\n    </ion-col>\n  </ion-row> -->\n  <!-- <div id="posts">\n    <ion-card *ngFor="let post of posts">\n      <ion-item>\n        <ion-avatar item-start>\n          <img [src]="user.profileImage">\n        </ion-avatar>\n        <h2 class="sticky">{{user.name}}</h2>\n        <p>{{post.date}}</p>\n      </ion-item>\n      <img [src]="post.postImageUrl" (click)="imageTapped(post)">\n      <ion-card-content>\n        <p>{{post.text}}</p>\n      </ion-card-content>\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button color="purple" clear small icon-left (click)="like(post)">\n              <ion-icon name=\'thumbs-up\'></ion-icon>\n              {{post.likes}} Likes\n            </button>\n        </ion-col>\n        <ion-col col-5>\n          <button ion-button no-padding color="purple" clear small icon-left (click)="comment(post)">\n              <ion-icon name=\'text\'></ion-icon>\n              {{post.comments}} Comments\n            </button>\n        </ion-col>\n        <ion-col col-3 align-self-center text-center>\n          <p>\n            {{post.timestamp}}\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div> -->\n\n<ion-row class="row">\n<ion-col>\n    <ion-card responsive-sm style="background: coral" (click)="presentProfileModal()">\n      <ion-card-content class="card-content">\n        <h1 style="text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;">Video Chat</h1>\n  <!-- <ion-icon name="git-network" role="img" style="\n  float: right;\n  color: gray;\n  font-size: 20px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon> -->\n          </ion-card-content>\n    </ion-card>\n  </ion-col>\n  \n</ion-row>\n<ion-row class="row"> \n<ion-col width-50>\n    <ion-card  responsive-sm  style="background: blueviolet" (click)="getTeleHealthdata()">  \n      <ion-card-content class="card-content">\n        <h1 style="text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;">Tele Health</h1>\n <!-- <ion-icon name="git-network" role="img" style="\n  float: right;\n  color: gray;\n  font-size: 20px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon> -->\n          </ion-card-content>\n    </ion-card> \n  </ion-col>\n</ion-row>\n<ion-row class="row">\n<ion-col >\n    <ion-card responsive-sm  style="background: aqua">\n      <ion-card-content class="card-content">\n        <h1 style="text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;">My Reports</h1>\n  <!-- <ion-icon name="git-network" role="img" style="\n  float: right;\n  color: gray;\n  font-size: 20px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon> -->\n          </ion-card-content>\n    </ion-card>\n  </ion-col>\n  \n</ion-row>\n<ion-row class="row">\n<ion-col >\n    <ion-card responsive-sm  style="background: brown">\n      <ion-card-content class="card-content">\n        <h1 style="text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;">My vitals</h1>\n <!-- <ion-icon name="git-network" role="img" style="\n  float: right;\n  color: gray;\n  font-size: 20px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon> -->\n          </ion-card-content>\n    </ion-card>\n  </ion-col>\n</ion-row>\n\n<ion-row class="row">\n<ion-col >\n    <ion-card responsive-sm  style="background: cadetblue">\n      <ion-card-content class="card-content">\n        <h1 style="text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;">My Hospital admits/discharges</h1>\n  <!-- <ion-icon name="git-network" role="img" style="\n  float: right;\n  color: gray;\n  font-size: 20px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon> -->\n          </ion-card-content>\n    </ion-card>\n  </ion-col>\n \n</ion-row>\n<ion-row class="row">\n<ion-col >\n    <ion-card responsive-sm  style="background: darkcyan">\n      <ion-card-content class="card-content">\n        <h1 style="text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;">My health care providers</h1>\n <!-- <ion-icon name="git-network" role="img" style="\n  float: right;\n  color: gray;\n  font-size: 20px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon> -->\n          </ion-card-content>\n    </ion-card>\n  </ion-col> \n\n\n</ion-row>\n<ion-row class="row">\n<ion-col >\n    <ion-card responsive-sm  style="background:rosybrown">\n      <ion-card-content class="card-content">\n        <h1 style="text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;">My Medications</h1>\n  <!-- <ion-icon name="git-network" role="img" style="\n  float: right;\n  color: gray;\n  font-size: 20px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon> -->\n          </ion-card-content>\n    </ion-card>\n  </ion-col>\n \n</ion-row>\n<ion-row class="row">\n<ion-col >\n    <ion-card responsive-sm  style="background: forestgreen">\n      <ion-card-content class="card-content">\n        <h1 style="text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;">My Medical Problems</h1>\n <!-- <ion-icon name="git-network" role="img" style="\n  float: right;\n  color: gray;\n  font-size: 20px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  " class="icon icon-md ion-md-git-network" aria-label="git network" ng-reflect-name="git-network"></ion-icon> -->\n          </ion-card-content>\n    </ion-card>\n  </ion-col> \n</ion-row>\n</div>\n</ion-content>\n'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_util_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat-users/chat-users.module": [
		416,
		8
	],
	"../pages/chat/chat.module": [
		165
	],
	"../pages/forgot/forgot.module": [
		413,
		2
	],
	"../pages/grid-home/grid-home.module": [
		418,
		1
	],
	"../pages/login/login.module": [
		414,
		7
	],
	"../pages/profile/profile.module": [
		411,
		6
	],
	"../pages/register/register.module": [
		412,
		0
	],
	"../pages/tele-health/tele-health.module": [
		410,
		5
	],
	"../pages/text-chating/text-chating.module": [
		417,
		4
	],
	"../pages/video-chat-modal/video-chat-modal.module": [
		415,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
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


var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.create = function (message, ok, duration) {
        if (ok === void 0) { ok = false; }
        if (duration === void 0) { duration = 2000; }
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: ok ? null : duration,
            position: 'bottom',
            showCloseButton: ok,
            closeButtonText: 'OK'
        });
        this.toast.present();
    };
    return ToastService;
}());
ToastService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
], ToastService);

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_relative_time__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_emoji_picker_emoji_picker_module__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_emoji__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* Chat */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_relative_time__["a" /* RelativeTime */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__components_emoji_picker_emoji_picker_module__["a" /* EmojiPickerComponentModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* Chat */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* Chat */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__providers_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_emoji__["a" /* EmojiProvider */]
        ]
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_opentok_opentok__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Chat = (function () {
    function Chat(modalCtrl, navParams, chatService, events, navCtrl, alerCtrl, opentokV) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.chatService = chatService;
        this.events = events;
        this.navCtrl = navCtrl;
        this.alerCtrl = alerCtrl;
        this.opentokV = opentokV;
        this.streamArray = [];
        this.startDisable = false;
        this.stopDisable = true;
        this.msgList = [];
        this.editorMsg = '';
        this.msgFromList = [];
        this._isOpenEmojiPicker = false;
        this.session = navParams.get('session');
        this.subscriberId = navParams.get('subscriberId');
        this.publisherId = navParams.get('publisherId');
        this.connectionEvent = navParams.get('connectionEvent');
        this.msgFromList = [];
        this.msgSenderList = [];
        //debugger;
        // Get the navParams toUserId parameter
        this.isGroupChat = navParams.get('isGroupChat');
        this.toUserId = navParams.get('toUserId');
        if (this.connectionEvent != "") {
            this.toUserName = this.connectionEvent.connection.data;
        }
        //------------------------------------------------------
        // Get mock user information
        this.chatService.getUserInfo()
            .then(function (res) {
            _this.userId = _this.subscriberId;
            _this.userName = res.userName;
            _this.userImgUrl = res.userImgUrl;
        });
        //debugger;
    }
    Chat.prototype.ionViewDidEnter = function () {
        var _this = this;
        // Subscribe to received  new message events
        this.session.on("signal:textChat", function (e) { return _this.signalTextReceived(e); });
        this.session.on("signal:groupChat", function (e) { return _this.signalGroupReceived(e); });
        this.session.on("signal:videoChatText", function (e) { return _this.signalVideoTextReceived(e); });
        this.session.on("signal:videoChatGroup", function (e) { return _this.signalVideoGroupReceived(e); });
        this.session.on('streamCreated', function (e) { return _this.onStreamCreated(e); });
        this.session.on('streamDestroyed', function (e) { return _this.onStreamDestroyed(e); });
        this.presentProfileModal();
    };
    Chat.prototype.presentProfileModal = function () {
        var opts = {
            showBackdrop: false,
            enableBackdropDismiss: false
        };
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { userId: 8675309 }, opts);
        profileModal.present();
    };
    Chat.prototype.chatConfig = function (message, isVideo) {
        var config;
        if (this.isGroupChat) {
            if (!isVideo) {
                config = {
                    type: 'groupChat',
                    data: message
                };
            }
            else {
                config = {
                    type: 'videoChatGroup',
                    data: message
                };
            }
        }
        else {
            if (!isVideo) {
                config = {
                    type: 'textChat',
                    to: this.connectionEvent.connection,
                    data: message
                };
            }
            else {
                config = {
                    type: 'videoChatText',
                    data: message
                };
            }
        }
        return config;
    };
    Chat.prototype.signalVideoTextReceived = function (e) {
        if (e.from.id != this.session.connection.connectionId) {
            console.log("eee" + e);
            if (e.data == "1") {
                console.log("Accepted");
                this.publishVideo();
                this.subscribeVideo();
            }
            else if (e.data == "0") {
                console.log("0");
            }
            else {
                this.presentConfirm();
            }
        }
    };
    Chat.prototype.signalVideoGroupReceived = function (e) {
        if (e.from.id != this.session.connection.connectionId) {
            console.log("eee" + e);
            this.presentConfirm();
        }
    };
    Chat.prototype.signalGroupReceived = function (event) {
        var newMsg = {
            messageId: Date.now().toString(),
            userId: this.publisherId,
            userName: 'SNT',
            userImgUrl: './assets/to_user.png',
            toUserId: null,
            time: Date.now(),
            data: event.data,
            status: 'Group Received',
            left: true
        };
        console.log(newMsg);
        if (event.from.id != this.session.connection.connectionId && this.isGroupChat) {
            this.pushNewMsg(newMsg);
        }
    };
    Chat.prototype.signalTextReceived = function (event) {
        var newMsg = {
            messageId: Date.now().toString(),
            userId: this.session.connection.connectionId,
            userName: 'SNT',
            userImgUrl: './assets/to_user.png',
            toUserId: event.from.id,
            time: Date.now(),
            data: event.data,
            status: 'Text Received',
            left: true
        };
        console.log("-->" + newMsg);
        if (event.from.id != this.session.connection.connectionId) {
            this.pushNewMsg(newMsg);
        }
    };
    //Other Data
    Chat.prototype._focus = function () {
        this._isOpenEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    Chat.prototype.switchEmojiPicker = function () {
        this._isOpenEmojiPicker = !this._isOpenEmojiPicker;
        if (!this._isOpenEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    /**
     * @name sendMsg
     */
    Chat.prototype.sendMsg = function () {
        var _this = this;
        console.log("Subscriber ID: " + this.subscriberId);
        if (!this.editorMsg.trim())
            return;
        // Mock message
        var newMsg = {
            messageId: Date.now().toString(),
            userId: this.publisherId,
            userName: 'SNT',
            userImgUrl: './assets/from_user.png',
            toUserId: this.subscriberId,
            time: Date.now(),
            data: this.editorMsg,
            status: 'pending',
            left: false
        };
        this.session.signal(this.chatConfig(this.editorMsg, false), function (e) { return _this.signalSent(e, newMsg); });
        this.pushNewMsg(newMsg); // keeping in message list
    };
    Chat.prototype.signalSent = function (e, newMsg) {
        if (e) {
            console.log("signal error (" + e.name + "): " + e.message);
        }
        else {
            console.log("signal sent.");
            //debugger;
            this.editorMsg = '';
            if (!this._isOpenEmojiPicker) {
                this.messageInput.setFocus();
            }
            var index = this.getMsgIndexById(newMsg.messageId);
            if (index !== -1) {
                this.msgList[index].status = 'success';
            }
        }
    };
    Chat.prototype.getMsgIndexById = function (id) {
        return this.msgList.findIndex(function (e) { return e.messageId === id; });
    };
    /**
     * @name pushNewMsg
     * @param msg
     */
    Chat.prototype.pushNewMsg = function (msg) {
        // debugger;
        // Verify user relationships
        this.msgList.push(msg);
        this.scrollToBottom();
    };
    Chat.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    /*************************Video Chat Module Started****************************************************** */
    //for prompt alerts
    Chat.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alerCtrl.create({
            title: 'Srinadh Calling',
            message: 'Do you want to accept the call?',
            buttons: [
                {
                    text: 'Reject',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.session.signal(_this.chatConfig("0", true), function (e) { return _this.signalResponseSent(e); });
                    }
                },
                {
                    text: 'Accept',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.session.signal(_this.chatConfig("1", true), function (e) { return _this.signalResponseSent(e); });
                    }
                }
            ]
        });
        alert.present();
    };
    //Signla request send
    Chat.prototype.signalResponseSent = function (e) {
        console.log("video signal sent");
    };
    //To start signalling
    Chat.prototype.startVideoChat = function () {
        this.startDisable = true;
        this.stopDisable = false;
        this.session.signal(this.chatConfig("Call", true), function (e) { console.log("Sending Video Signal"); });
    };
    Chat.prototype.publishVideo = function () {
        var _this = this;
        if (this.session.capabilities.publish == 1) {
            this.publisher = this.opentokV.initializePublisher('publisher');
            this.publisher.on("accessAllowed", function (e) { _this.session.publish(_this.publisher); console.log("Aceess allowed"); });
            this.publisher.on("accessDenied", function (e) { console.log("Aceess rejected"); });
            this.publisher.on("streamDestroyed", function (e) {
                if (e.reason === 'networkDisconnected') {
                    alert('Your publisher lost its connection. Please check your internet connection and try publishing again.' + e.reason);
                }
                else {
                    alert('Your publisher lost its connection. Please check.' + e.reason);
                }
            });
            this.publisher.on("streamCreated", function (e) {
                console.log("Publisher started streaming.");
            });
            console.log("video signal Publish");
        }
        else {
            console.log("You cannot publish an audio-video stream.");
        }
    };
    Chat.prototype.unPublishVideo = function () {
        this.session.unpublish(this.publisher);
        document.getElementById("publisher").innerHTML = "";
        console.log("video signal Un Publish");
    };
    //Subscriber Event
    Chat.prototype.onStreamCreated = function (e) {
        var _this = this;
        console.log(e);
        if (e.stream.connection.connectionId === this.connectionEvent.connection.connectionId) {
            this.streamArray.push(e);
            var subscriberProperties = { insertMode: 'append', width: (document.documentElement.clientWidth / 3), height: 240 };
            setTimeout(function () {
                _this.subscriber = _this.session.subscribe(e.stream, e.stream.id, {
                    insertMode: 'append',
                    showControls: true,
                });
                _this.subscriber.setAudioVolume(0);
            }, 10);
        }
    };
    Chat.prototype.onStreamDestroyed = function (e) {
        var number;
        for (var i = 0; i < this.streamArray.length; i++) {
            if (this.streamArray[i].stream.id == e.stream.id) {
                number = i;
            }
        }
        this.streamArray.splice(number, 1);
    };
    Chat.prototype.subscribeVideo = function () {
        console.log("video signal Subscribe");
    };
    Chat.prototype.unSubscribeVideo = function () {
        console.log("video signal Unsubscribe");
        this.session.unsubscribe(this.streamArray);
        this.streamArray = [];
    };
    Chat.prototype.sendSignal = function () {
    };
    Chat.prototype.stopVideoChat = function () {
        this.startDisable = false;
        this.stopDisable = true;
        this.unPublishVideo();
        this.session.off('streamCreated');
        this.session.off('sessionConnected');
        this.session.unsubscribe(this.streamArray);
        //this.session.streamDestroyed();
        this.streamArray = [];
    };
    return Chat;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], Chat.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('chat_input'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* TextInput */])
], Chat.prototype, "messageInput", void 0);
Chat = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\chat\chat.html"*/'<!--\n  Generated template for the Chat page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{publisherId}}</ion-title>\n  </ion-navbar>\n  <!-- <ion-toolbar>\n    <ion-title style="background-color: aquamarine;" (click)="goback()" >Tap to Return to Video </ion-title>\n  </ion-toolbar> -->\n  <!-- <ion-grid>\n    <ion-row>\n\n      <ion-col col-6>\n        <button ion-button round outline [disabled]="startDisable" (click)="startVideoChat()">Start Video Chat</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button round outline [disabled]="stopDisable" (click)="stopVideoChat()">Stop Video Chat</button>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n\n      <ion-col col-6>\n        <div id="publisher"></div>\n        <button ion-button round outline (click)="publishVideo()">Start Publishing</button>\n        <button ion-button round outline (click)="unPublishVideo()">Stop Publishing</button>\n      </ion-col>\n      <ion-col col-6>\n        <div id="subscriber"></div> \n        <div id="allStreams">\n          <div id="layout"></div>\n        </div>       \n\n        <ion-grid>\n      \n          <ion-row>\n            <ion-col *ngFor="let item of streamArray">\n              <ion-item>\n         \n               <div [id]="item.stream.id" style="height:264px;width:198px"></div>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <button ion-button round outline (click)="subscribeVideo()">start streaming</button>\n        <button ion-button round outline (click)="unSubscribeVideo()">stop streaming</button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid> -->\n</ion-header>\n\n\n\n<ion-content>\n  <div class="message-wrap" *ngIf="isGroupChat">\n    <div *ngFor="let msg of msgList" class="message" [class.left]=" msg.left " [class.right]="!msg.left">\n      <img class="user-img" [src]="msg.userImgUrl" alt="" src="">\n      <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n      <div class="msg-detail">\n        <div class="msg-info">\n          <p>\n            {{msg.time | relativeTime}}</p>\n        </div>\n        <div class="msg-content">\n          <span class="triangle"></span>\n          <p class="line-breaker ">{{msg.data}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="message-wrap" *ngIf="!isGroupChat">\n    <div *ngFor="let msg of msgList" class="message" [class.left]=" msg.left " [class.right]="!msg.left">\n      <img class="user-img" [src]="msg.userImgUrl" alt="" src="">\n      <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n      <div class="msg-detail">\n        <div class="msg-info">\n          <p>\n            {{msg.time | relativeTime}}</p>\n        </div>\n        <div class="msg-content">\n          <span class="triangle"></span>\n          <p class="line-breaker ">{{msg.data}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer no-border [style.height]="_isOpenEmojiPicker ? \'255px\' : \'55px\'">\n  <ion-grid class="input-wrap">\n    <ion-row>\n\n      <ion-col col-2>\n        <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n          <ion-icon  name="md-happy"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8>\n        <ion-textarea #chat_input placeholder="Text Input" [(ngModel)]="editorMsg" (keyup.enter)="sendMsg()" (focus)="_focus()"></ion-textarea>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button clear icon-only item-right (click)="sendMsg()">\n          <ion-icon  name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <emoji-picker *ngIf="_isOpenEmojiPicker" [(ngModel)]="editorMsg"></emoji-picker>\n</ion-footer>'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__["a" /* ChatService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_opentok_opentok__["a" /* OpentokProvider */]])
], Chat);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatMessage = (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var ChatService = (function () {
    function ChatService(http, events) {
        this.http = http;
        this.events = events;
    }
    ChatService.prototype.mockNewMsg = function (msg) {
        var _this = this;
        var mockMsg = {
            messageId: Date.now().toString(),
            userId: '',
            userName: 'Hancock',
            userImgUrl: './assets/to-user.jpg',
            toUserId: '',
            time: Date.now(),
            data: msg.message,
            status: 'success',
            left: false
        };
        //debugger;
        setTimeout(function () {
            _this.events.publish('chat:received', mockMsg, Date.now());
        }, Math.random() * 1800);
    };
    ChatService.prototype.getMsgList = function () {
        debugger;
        var msgListUrl = './assets/mock/msg-list.json';
        return this.http.get(msgListUrl)
            .toPromise()
            .then(function (response) { return response.json().array; })
            .catch(function (err) { return Promise.reject(err || 'err'); });
    };
    ChatService.prototype.sendMsg = function (msg) {
        var _this = this;
        // debugger;
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(msg); }, Math.random() * 1000); })
            .then(function () { return _this.mockNewMsg(msg); });
    };
    ChatService.prototype.getUserInfo = function () {
        var userInfo = {
            userId: '',
            userName: 'Luff',
            userImgUrl: './assets/user.jpg'
        };
        // debugger;
        return new Promise(function (resolve) { return resolve(userInfo); });
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
], ChatService);

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EmojiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var EmojiProvider = (function () {
    function EmojiProvider(http) {
        this.http = http;
        console.log('Hello EmojiProvider Provider');
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    return EmojiProvider;
}());
EmojiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], EmojiProvider);

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpentokService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OpentokService = (function () {
    function OpentokService() {
        this.openTokSessionId = '2_MX40NTk0NzMwMn5-MTUwMzkwMTcyMjQyOH52TFZWa3drZVJFM01GYzN0d3N4Nk5aUmd-fg';
        this.tokenId = 'T1==cGFydG5lcl9pZD00NTk0NzMwMiZzaWc9YzFkMWYwOWJjMjhhNGU3NjRjYTA0MGNhODNkMDdkYmE3NjZhOTg3ZTpzZXNzaW9uX2lkPTJfTVg0ME5UazBOek13TW41LU1UVXdNemt3TVRjeU1qUXlPSDUyVEZaV2EzZHJaVkpGTTAxR1l6TjBkM040Tms1YVVtZC1mZyZjcmVhdGVfdGltZT0xNTAzOTAxNzU1Jm5vbmNlPTAuODUzMDQyMTI1MzExMjMwNCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA2NDkzNzUyJmNvbm5lY3Rpb25fZGF0YT1OYW1lJTNBJTIwU3JpbmFkaCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
        this.apiKey = '45947302';
    }
    OpentokService.prototype.initSession = function () {
        var _this = this;
        this.session = OT.initSession(this.apiKey, this.openTokSessionId);
        this.session.connect(this.tokenId, function (e) { return _this.tryingToConnect(e); });
        this.session.on('sessionConnected', function (e) { return _this.onSessionConnect(e); });
    };
    OpentokService.prototype.onSessionConnect = function (e) {
        console.log('session connected');
    };
    OpentokService.prototype.tryingToConnect = function (e) {
        var _this = this;
        this.session.on('streamCreated', function (e) { return _this.streamCreated(e); });
        this.session.on('streamDestroyed', function (e) { return _this.streamDestroyed(e); });
    };
    OpentokService.prototype.streamCreated = function (stream) {
        var subscriberProperties = { insertMode: 'append' };
        if (document.getElementById('layout') == null)
            document.getElementById('allStreams').innerHTML = '<div id="layout"></div>';
        this.videoSubscriber = this.session.subscribe(stream.stream, 'layout', subscriberProperties);
    };
    OpentokService.prototype.streamDestroyed = function (stream) {
    };
    OpentokService.prototype.destroy = function () {
        this.session.unsubscribe(this.videoSubscriber);
        this.session.off('streamCreated');
        this.session.off('sessionConnected');
    };
    return OpentokService;
}());
OpentokService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], OpentokService);

//# sourceMappingURL=opentok.service.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublisherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
// i don't really think this needed a service, but somehow i ended up writing a service. 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PublisherService = (function () {
    function PublisherService() {
        this.openTokSessionId = '2_MX40NTk0NzMwMn5-MTUwMzkwMTcyMjQyOH52TFZWa3drZVJFM01GYzN0d3N4Nk5aUmd-fg';
        this.tokenId = 'T1==cGFydG5lcl9pZD00NTk0NzMwMiZzaWc9YzFkMWYwOWJjMjhhNGU3NjRjYTA0MGNhODNkMDdkYmE3NjZhOTg3ZTpzZXNzaW9uX2lkPTJfTVg0ME5UazBOek13TW41LU1UVXdNemt3TVRjeU1qUXlPSDUyVEZaV2EzZHJaVkpGTTAxR1l6TjBkM040Tms1YVVtZC1mZyZjcmVhdGVfdGltZT0xNTAzOTAxNzU1Jm5vbmNlPTAuODUzMDQyMTI1MzExMjMwNCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA2NDkzNzUyJmNvbm5lY3Rpb25fZGF0YT1OYW1lJTNBJTIwU3JpbmFkaCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
        this.apiKey = '45947302';
        this.publisherProperties = { width: 800, height: 500, name: '' };
        this.publishStatus = 0; //0=not ready, 1=ready,2=publsihed,3=not published
    }
    PublisherService.prototype.bootstrapPublisher = function () {
        var _this = this;
        this.session = OT.initSession(this.apiKey, this.openTokSessionId);
        this.session.connect(this.tokenId, function (e) { console.log('connection established'); });
        this.session.on('sessionConnected', function (e) { return _this.onSessionConnect(); });
    };
    PublisherService.prototype.onSessionConnect = function () {
        var _this = this;
        //next two lines are very bad, need some improvement here. 
        if (document.getElementById('myPublisherDivd') == null)
            document.getElementById('publisherHolder').innerHTML = '<div id="myPublisherDiv"></div>';
        this.publisher = OT.initPublisher('myPublisherDiv', this.publisherProperties, function (e) { _this.publishStatus = 1; });
        this.publisherInit();
    };
    PublisherService.prototype.publisherInit = function () {
        var _this = this;
        this.session.publish(this.publisher, function (e) { return _this.sessionTryingToPublish(e); });
    };
    PublisherService.prototype.sessionTryingToPublish = function (e) {
        this.publishStatus = 2;
    };
    PublisherService.prototype.stopPublishing = function () {
        this.publishStatus = 3;
        this.session.unpublish(this.publisher);
        this.onSessionConnect();
    };
    PublisherService.prototype.destroy = function () {
        if (this.publisher)
            this.stopPublishing();
        this.session.off('sessionConnected');
    };
    return PublisherService;
}());
PublisherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], PublisherService);

//# sourceMappingURL=publisher.service.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoChatModalPage; });
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
 * Generated class for the VideoChatModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VideoChatModalPage = (function () {
    function VideoChatModalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VideoChatModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoChatModalPage');
    };
    return VideoChatModalPage;
}());
VideoChatModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-video-chat-modal',template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\video-chat-modal\video-chat-modal.html"*/'<!--\n  Generated template for the VideoChatModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>videoChatModal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\video-chat-modal\video-chat-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], VideoChatModalPage);

//# sourceMappingURL=video-chat-modal.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatUsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_opentok_opentok_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_opentok_publisher_service__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_opentok_opentok__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(166);
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
 * Generated class for the ChatUsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChatUsersPage = (function () {
    function ChatUsersPage(platform, navCtrl, navParams, opentokV, service, publisher) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.opentokV = opentokV;
        this.service = service;
        this.publisher = publisher;
        this.userNames = [];
        this.userIds = [];
        this.connectedUserList = [];
        this.session = undefined;
        platform.ready().then(function () {
            _this.session = _this.opentokV.initializeSession();
            console.log("coming here" + _this.session);
            _this.session.on('connectionCreated', function (e) { return _this.onConnectionConnected(e); });
            _this.session.on("connectionDestroyed", function (e) { return _this.onConnectionDestroyed(e); });
        });
    }
    ChatUsersPage.prototype.onConnectionDestroyed = function (e) {
        var number;
        for (var i = 0; i < this.connectedUserList.length; i++) {
            if (this.connectedUserList[i].connection.connectionId == (e.connection.connectionId)) {
                number = i;
                break;
            }
        }
        this.connectedUserList.splice(number, 1);
        this.userNames.splice(number, 1);
    };
    ChatUsersPage.prototype.onConnectionConnected = function (e) {
        if (e.connection.connectionId != this.session.connection.connectionId) {
            this.connectedUserId = (e.connection.data);
            this.connectedUserList.push(e);
            this.userIds.push(e.connection.connectionId);
            this.userNames.push(this.connectedUserId + "''" + e.connection.connectionId);
        }
    };
    ChatUsersPage.prototype.stopTextChat = function () {
        this.session.disconnect();
        this.navCtrl.pop();
    };
    ChatUsersPage.prototype.startTextChat = function (e, isGroupChat) {
        if (e != "") {
            this.sessionDetails = { 'session': this.session, 'subscriberId': e.connection.connectionId, 'publisherId': this.session.connection.connectionId, 'connectionEvent': e, 'isGroupChat': isGroupChat };
        }
        else {
            this.sessionDetails = { 'session': this.session, 'subscriberId': "", 'publisherId': this.session.connection.connectionId, 'connectionEvent': "", 'isGroupChat': isGroupChat };
        }
        this.makeChatVisible = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* Chat */], this.sessionDetails);
    };
    ChatUsersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatUsersPage');
    };
    return ChatUsersPage;
}());
ChatUsersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat-users',template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\chat-users\chat-users.html"*/'<!--\n  Generated template for the ChatUsersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Chat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <button ion-button icon-end style="display:none;" (click)="stopTextChat()">\n        Close Text Chat\n        <ion-icon name="square"></ion-icon>\n      </button>\n\n      <ion-list>\n          <ion-list-header>\n            Group Chat\n          </ion-list-header>\n      \n          <ion-item (click)="startTextChat(\'\',true)" >\n            <ion-avatar item-start>\n              <img src="../../assets/avatar-poe.png">\n            </ion-avatar>\n            <h2>OpenTOK Group Chat</h2>\n            <h3>Now you can chat with all users like broadcast</h3>\n            <p>Every message will sent to all people</p>     \n            <ion-icon name=\'text\' item-end color="secondary"></ion-icon>\n          </ion-item>   \n      </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Online\n    </ion-list-header>\n\n    <ion-item (click)="startTextChat(e,false)" *ngFor="let e of connectedUserList">\n      <ion-avatar item-start>\n        <img src="../../assets/avatar-poe.png">\n      </ion-avatar>\n      <h2>{{e.connection.data}}-{{e.connection.connectionId}}</h2>\n      <h3>New Ride</h3>\n      <p>I just upgraded my X-Wing. Next time...</p>     \n      <ion-icon name=\'text\' item-end color="secondary"></ion-icon>\n    </ion-item>   \n</ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\chat-users\chat-users.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_opentok_opentok__["a" /* OpentokProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_opentok_opentok_service__["a" /* OpentokService */], __WEBPACK_IMPORTED_MODULE_3__providers_opentok_publisher_service__["a" /* PublisherService */]])
], ChatUsersPage);

//# sourceMappingURL=chat-users.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextChatingPage; });
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
 * Generated class for the TextChatingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TextChatingPage = (function () {
    function TextChatingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userList = [
            { name: 'Yash', lastseen: '10:15PM' },
            { name: 'Yash2', lastseen: '01:15PM' },
            { name: 'Yash3', lastseen: '10:00PM' },
            { name: 'Yash3', lastseen: '11:15AM' },
            { name: 'Yash5', lastseen: '10:15AM' }
        ];
    }
    TextChatingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TextChatingPage');
    };
    return TextChatingPage;
}());
TextChatingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-text-chating',template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\text-chating\text-chating.html"*/'<!--\n  Generated template for the TextChatingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>textChating</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-content>\n      <ion-list>\n        <ion-item navPush="Chat" *ngFor="let user of userList"  [navParams]="user"  >\n          <ion-avatar item-left>\n            <img src="./assets/to-user.jpg">\n          </ion-avatar>\n          <h2>{{user.name}}</h2>\n          <p>last seen {{user.lastseen}}</p>\n        </ion-item>\n      </ion-list>\n  \n      <ion-fab bottom right >\n        <button ion-fab color="danger" (click)="textChat()">  <ion-icon name="text"></ion-icon></button>\n      </ion-fab>\n    </ion-content>\n</ion-content>\n'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\text-chating\text-chating.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], TextChatingPage);

//# sourceMappingURL=text-chating.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_util_toast_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tele_health_tele_health__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chat_users_chat_users__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_opentok_opentok__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_opentok_opentok_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_opentok_publisher_service__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_chat_chat_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_video_chat_modal_video_chat_modal__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_page_transitions__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_text_chating_text_chating__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_expandable_expandable__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__menu_component__ = __webpack_require__(409);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_chat_users_chat_users__["a" /* ChatUsersPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_video_chat_modal_video_chat_modal__["a" /* VideoChatModalPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_text_chating_text_chating__["a" /* TextChatingPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tele_health_tele_health__["a" /* TeleHealthPage */],
            __WEBPACK_IMPORTED_MODULE_24__components_expandable_expandable__["a" /* ExpandableComponent */],
            __WEBPACK_IMPORTED_MODULE_25__menu_component__["a" /* MenuComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["e" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_19__pages_chat_chat_module__["ChatModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/tele-health/tele-health.module#TeleHealthPageModule', name: 'TeleHealthPage', segment: 'tele-health', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/video-chat-modal/video-chat-modal.module#VideoChatModalPageModule', name: 'VideoChatModalPage', segment: 'video-chat-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatModule', name: 'Chat', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-users/chat-users.module#ChatUsersPageModule', name: 'ChatUsersPage', segment: 'chat-users', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/text-chating/text-chating.module#TextChatingPageModule', name: 'TextChatingPage', segment: 'text-chating', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/grid-home/grid-home.module#GridHomePageModule', name: 'GridHomePage', segment: 'grid-home', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_chat_users_chat_users__["a" /* ChatUsersPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_video_chat_modal_video_chat_modal__["a" /* VideoChatModalPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_text_chating_text_chating__["a" /* TextChatingPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tele_health_tele_health__["a" /* TeleHealthPage */],
            __WEBPACK_IMPORTED_MODULE_24__components_expandable_expandable__["a" /* ExpandableComponent */],
            __WEBPACK_IMPORTED_MODULE_25__menu_component__["a" /* MenuComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_12__providers_util_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_http__["a" /* HTTP */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__providers_opentok_opentok__["a" /* OpentokProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_opentok_opentok_service__["a" /* OpentokService */],
            __WEBPACK_IMPORTED_MODULE_18__providers_opentok_publisher_service__["a" /* PublisherService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the RelativeTime pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var RelativeTime = (function () {
    function RelativeTime() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RelativeTime.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).toNow();
    };
    return RelativeTime;
}());
RelativeTime = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'relativeTime',
    })
], RelativeTime);

//# sourceMappingURL=relative-time.js.map

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 168,
	"./af.js": 168,
	"./ar": 169,
	"./ar-dz": 170,
	"./ar-dz.js": 170,
	"./ar-kw": 171,
	"./ar-kw.js": 171,
	"./ar-ly": 172,
	"./ar-ly.js": 172,
	"./ar-ma": 173,
	"./ar-ma.js": 173,
	"./ar-sa": 174,
	"./ar-sa.js": 174,
	"./ar-tn": 175,
	"./ar-tn.js": 175,
	"./ar.js": 169,
	"./az": 176,
	"./az.js": 176,
	"./be": 177,
	"./be.js": 177,
	"./bg": 178,
	"./bg.js": 178,
	"./bn": 179,
	"./bn.js": 179,
	"./bo": 180,
	"./bo.js": 180,
	"./br": 181,
	"./br.js": 181,
	"./bs": 182,
	"./bs.js": 182,
	"./ca": 183,
	"./ca.js": 183,
	"./cs": 184,
	"./cs.js": 184,
	"./cv": 185,
	"./cv.js": 185,
	"./cy": 186,
	"./cy.js": 186,
	"./da": 187,
	"./da.js": 187,
	"./de": 188,
	"./de-at": 189,
	"./de-at.js": 189,
	"./de-ch": 190,
	"./de-ch.js": 190,
	"./de.js": 188,
	"./dv": 191,
	"./dv.js": 191,
	"./el": 192,
	"./el.js": 192,
	"./en-au": 193,
	"./en-au.js": 193,
	"./en-ca": 194,
	"./en-ca.js": 194,
	"./en-gb": 195,
	"./en-gb.js": 195,
	"./en-ie": 196,
	"./en-ie.js": 196,
	"./en-nz": 197,
	"./en-nz.js": 197,
	"./eo": 198,
	"./eo.js": 198,
	"./es": 199,
	"./es-do": 200,
	"./es-do.js": 200,
	"./es.js": 199,
	"./et": 201,
	"./et.js": 201,
	"./eu": 202,
	"./eu.js": 202,
	"./fa": 203,
	"./fa.js": 203,
	"./fi": 204,
	"./fi.js": 204,
	"./fo": 205,
	"./fo.js": 205,
	"./fr": 206,
	"./fr-ca": 207,
	"./fr-ca.js": 207,
	"./fr-ch": 208,
	"./fr-ch.js": 208,
	"./fr.js": 206,
	"./fy": 209,
	"./fy.js": 209,
	"./gd": 210,
	"./gd.js": 210,
	"./gl": 211,
	"./gl.js": 211,
	"./gom-latn": 212,
	"./gom-latn.js": 212,
	"./he": 213,
	"./he.js": 213,
	"./hi": 214,
	"./hi.js": 214,
	"./hr": 215,
	"./hr.js": 215,
	"./hu": 216,
	"./hu.js": 216,
	"./hy-am": 217,
	"./hy-am.js": 217,
	"./id": 218,
	"./id.js": 218,
	"./is": 219,
	"./is.js": 219,
	"./it": 220,
	"./it.js": 220,
	"./ja": 221,
	"./ja.js": 221,
	"./jv": 222,
	"./jv.js": 222,
	"./ka": 223,
	"./ka.js": 223,
	"./kk": 224,
	"./kk.js": 224,
	"./km": 225,
	"./km.js": 225,
	"./kn": 226,
	"./kn.js": 226,
	"./ko": 227,
	"./ko.js": 227,
	"./ky": 228,
	"./ky.js": 228,
	"./lb": 229,
	"./lb.js": 229,
	"./lo": 230,
	"./lo.js": 230,
	"./lt": 231,
	"./lt.js": 231,
	"./lv": 232,
	"./lv.js": 232,
	"./me": 233,
	"./me.js": 233,
	"./mi": 234,
	"./mi.js": 234,
	"./mk": 235,
	"./mk.js": 235,
	"./ml": 236,
	"./ml.js": 236,
	"./mr": 237,
	"./mr.js": 237,
	"./ms": 238,
	"./ms-my": 239,
	"./ms-my.js": 239,
	"./ms.js": 238,
	"./my": 240,
	"./my.js": 240,
	"./nb": 241,
	"./nb.js": 241,
	"./ne": 242,
	"./ne.js": 242,
	"./nl": 243,
	"./nl-be": 244,
	"./nl-be.js": 244,
	"./nl.js": 243,
	"./nn": 245,
	"./nn.js": 245,
	"./pa-in": 246,
	"./pa-in.js": 246,
	"./pl": 247,
	"./pl.js": 247,
	"./pt": 248,
	"./pt-br": 249,
	"./pt-br.js": 249,
	"./pt.js": 248,
	"./ro": 250,
	"./ro.js": 250,
	"./ru": 251,
	"./ru.js": 251,
	"./sd": 252,
	"./sd.js": 252,
	"./se": 253,
	"./se.js": 253,
	"./si": 254,
	"./si.js": 254,
	"./sk": 255,
	"./sk.js": 255,
	"./sl": 256,
	"./sl.js": 256,
	"./sq": 257,
	"./sq.js": 257,
	"./sr": 258,
	"./sr-cyrl": 259,
	"./sr-cyrl.js": 259,
	"./sr.js": 258,
	"./ss": 260,
	"./ss.js": 260,
	"./sv": 261,
	"./sv.js": 261,
	"./sw": 262,
	"./sw.js": 262,
	"./ta": 263,
	"./ta.js": 263,
	"./te": 264,
	"./te.js": 264,
	"./tet": 265,
	"./tet.js": 265,
	"./th": 266,
	"./th.js": 266,
	"./tl-ph": 267,
	"./tl-ph.js": 267,
	"./tlh": 268,
	"./tlh.js": 268,
	"./tr": 269,
	"./tr.js": 269,
	"./tzl": 270,
	"./tzl.js": 270,
	"./tzm": 271,
	"./tzm-latn": 272,
	"./tzm-latn.js": 272,
	"./tzm.js": 271,
	"./uk": 273,
	"./uk.js": 273,
	"./ur": 274,
	"./ur.js": 274,
	"./uz": 275,
	"./uz-latn": 276,
	"./uz-latn.js": 276,
	"./uz.js": 275,
	"./vi": 277,
	"./vi.js": 277,
	"./x-pseudo": 278,
	"./x-pseudo.js": 278,
	"./yo": 279,
	"./yo.js": 279,
	"./zh-cn": 280,
	"./zh-cn.js": 280,
	"./zh-hk": 281,
	"./zh-hk.js": 281,
	"./zh-tw": 282,
	"./zh-tw.js": 282
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 387;

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emoji_picker__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmojiPickerComponentModule = (function () {
    function EmojiPickerComponentModule() {
    }
    return EmojiPickerComponentModule;
}());
EmojiPickerComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */]
        ]
    })
], EmojiPickerComponentModule);

//# sourceMappingURL=emoji-picker.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_emoji__ = __webpack_require__(283);
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



/**
 * Generated class for the EmojiPickerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var EMOJI_PICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* forwardRef */])(function () { return EmojiPickerComponent; }),
    multi: true
};
var EmojiPickerComponent = (function () {
    function EmojiPickerComponent(emojiProvider) {
        this.emojiArr = [];
        this.emojiArr = emojiProvider.getEmojis();
    }
    EmojiPickerComponent.prototype.writeValue = function (obj) {
        this._content = obj;
        console.log(this._content);
    };
    EmojiPickerComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
        this.setValue(this._content);
    };
    EmojiPickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    EmojiPickerComponent.prototype.setValue = function (val) {
        this._content += val;
        if (this._content) {
            this._onChanged(this._content);
        }
    };
    return EmojiPickerComponent;
}());
EmojiPickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'emoji-picker',
        providers: [EMOJI_PICKER_VALUE_ACCESSOR],template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\components\emoji-picker\emoji-picker.html"*/'<!-- Generated template for the EmojiPickerComponent component -->\n<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let items of emojiArr">\n        <span class="emoji-item"\n              (click)="setValue(item)"\n              *ngFor="let item of items">\n          {{item}}\n        </span>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</div>\n'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\components\emoji-picker\emoji-picker.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_emoji__["a" /* EmojiProvider */]])
], EmojiPickerComponent);

//# sourceMappingURL=emoji-picker.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableComponent = (function () {
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
    };
    return ExpandableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('expandWrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] }),
    __metadata("design:type", Object)
], ExpandableComponent.prototype, "expandWrapper", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('expanded'),
    __metadata("design:type", Object)
], ExpandableComponent.prototype, "expanded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('expandHeight'),
    __metadata("design:type", Object)
], ExpandableComponent.prototype, "expandHeight", void 0);
ExpandableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'expandable',template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\components\expandable\expandable.html"*/'<!-- Generated template for the ExpandableComponent component -->\n<div #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded">\n  <ng-content></ng-content>\n</div>\n'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\components\expandable\expandable.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
], ExpandableComponent);

//# sourceMappingURL=expandable.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = (function () {
    function MenuComponent() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
        this.pages = [
            { title: 'Page One', component: __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */] },
            { title: 'Page two', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */] },
        ];
    }
    MenuComponent.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MenuComponent.prototype, "nav", void 0);
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\app\menu.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\app\menu.html"*/
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(49);
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
    function HomePage(auth, navCtrl, platform, androidPermissions) {
        var _this = this;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.isSubscribing = false;
        this.streamArray = [];
        this.startDisable = false;
        this.stopDisable = true;
        this.sessionDetails = [];
        this.userIds = [];
        this.userNames = [];
        this.connectedUserList = [];
        this.openTokSessionId = '2_MX40NTk0NzMwMn5-MTUwMzkwMTcyMjQyOH52TFZWa3drZVJFM01GYzN0d3N4Nk5aUmd-fg';
        // public tokenId:string            = 'T1==cGFydG5lcl9pZD00NTk0MzAzMiZzaWc9NGEzNmI0ZDVhZDU2MWE3NDI5YWQxNmUzZWIxMDUxZDhhODUyMjkwOTpzZXNzaW9uX2lkPTFfTVg0ME5UazBNekF6TW41LU1UVXdNek14TmpBd01UQTVNbjVVTWxKSGVHTmFZamgwZWpORmNuSnhRakpJUWxrM2NHMS1mZyZjcmVhdGVfdGltZT0xNTAzMzE4Nzk4Jm5vbmNlPTAuMTg1MTkzOTc1MTQzNTY0MDYmcm9sZT1zdWJzY3JpYmVyJmV4cGlyZV90aW1lPTE1MDU5MTA3OTYmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';
        this.apiKey = '45947302';
        this.tokenId = 'T1==cGFydG5lcl9pZD00NTk0NzMwMiZzaWc9YzFkMWYwOWJjMjhhNGU3NjRjYTA0MGNhODNkMDdkYmE3NjZhOTg3ZTpzZXNzaW9uX2lkPTJfTVg0ME5UazBOek13TW41LU1UVXdNemt3TVRjeU1qUXlPSDUyVEZaV2EzZHJaVkpGTTAxR1l6TjBkM040Tms1YVVtZC1mZyZjcmVhdGVfdGltZT0xNTAzOTAxNzU1Jm5vbmNlPTAuODUzMDQyMTI1MzExMjMwNCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA2NDkzNzUyJmNvbm5lY3Rpb25fZGF0YT1OYW1lJTNBJTIwU3JpbmFkaCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
        platform.ready().then(function () {
            _this.session = undefined;
            _this.publisher = undefined;
            _this.subscriber = undefined;
            _this.isSubscribing = false;
            _this.myList = [];
            for (var i = 0; i < 20; i++) {
                _this.myList.push(i);
            }
            // this.OT = cordova.require("cordova-plugin-opentokjs.OpenTokClient");
            console.log('The wikitude object: ', OT);
            console.log('The wikitude test method: ', OT);
            _this.checklists = [_this.androidPermissions.PERMISSION.CAMERA, _this.androidPermissions.PERMISSION.RECORD_AUDIO, _this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS];
            //check permissions
            /* this.androidPermissions.checkPermission(this.checklists).then(
               success => this.androidPermissions.requestPermissions(this.checklists),
               err => this.androidPermissions.requestPermissions(this.checklists)
             );*/
            _this.androidPermissions.requestPermissions(_this.checklists);
            // this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS,this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS]);
            //  this.initializePublisher();
            // this.initializeSession();    
        });
    }
    HomePage.prototype.initializePublisher = function () {
        // alert("yess");
        // OT.createSession({}, (e)=>this.sessionCreation(e));
        this.publisher = OT.initPublisher('publisher', {
            insertMode: 'append',
            name: 'Kanugala',
            showControls: true
        });
    };
    HomePage.prototype.initializeSession = function () {
        var _this = this;
        this.auth.getSessionDetails().then(function (result) {
            alert(JSON.stringify(result));
            //localStorage.setItem('data',JSON.stringify(this.responseData));
            // this.navCtrl.push(ProfilePage);
        }, function (err) {
            //alert(err);
        });
        this.session = OT.initSession("45947302", this.openTokSessionId);
        this.session.on('streamCreated', this.onStreamCreated);
        this.session.on('streamDestroyed', this.onStreamDestroyed);
        this.session.connect(this.tokenId, function (e) { return _this.tryingToConnect(e); });
    };
    HomePage.prototype.tryingToConnect = function (e) {
        var _this = this;
        this.session.publish(this.publisher);
        this.session.on('streamCreated', function (e) { return _this.onStreamCreated(e); });
        this.session.on('streamDestroyed', function (e) { return _this.onStreamDestroyed(e); });
        this.session.on('connectionCreated', function (e) { return _this.onSessionCreatedEvent(e); });
        this.session.on('connectionCreated', function (e) { return _this.onConnectionConnected(e); });
        this.session.on('signal', function (e) { return _this.gotSignal(e); });
        //this.sendSignal();      
    };
    HomePage.prototype.onConnectionConnected = function (event) {
        this.connectionCount++;
        //console.log('--------------connection count: '+this.connectionCount)
        if (event.connection.connectionId != this.session.connection.connectionId) {
            this.connectedUserId = event.connection.connectionId;
            this.sessionDetails = { 'session': this.session, 'subscriberId': this.connectedUserId, 'publisherId': this.session.connection.connectionId, 'connectionEvent': event };
            ////debugger;
            this.makeChatVisible = true;
        }
    };
    HomePage.prototype.onSessionCreatedEvent = function (e) {
        // alert(e);       
        if (e.connection.connectionId != this.session.connection.connectionId) {
            console.log("New User Got Entered" + e);
            this.connectedUserId = (e.connection.data);
            console.log(this.connectedUserId);
            this.connectedUserList.push(this.connectedUserId);
            this.userIds.push(e.connection.connectionId);
            this.userNames.push(this.connectedUserId + "''" + e.connection.connectionId);
        }
    };
    HomePage.prototype.sendSignal = function () {
        this.session.signal({
            data: "Some One Given Signal KSNT"
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.gotSignal = function (e) {
        console.log("Signal got from connection " + e + "data :" + e.data);
    };
    HomePage.prototype.onSessionConnected = function (event) {
        //  alert(this.isSubscribing);
        this.session.publish(this.publisher);
    };
    HomePage.prototype.onStreamCreated = function (event) {
        //this.subscriber = this.session.subscribe(event.stream, 'subscriber');
        /*	if (!this.isSubscribing) {
            this.subscriber = this.session.subscribe(event.stream, 'subscriber');
            this.isSubscribing = true;
          }*/
        var _this = this;
        this.streamArray.push(event);
        var subscriberProperties = { insertMode: 'append', width: (document.documentElement.clientWidth / 3), height: 240 };
        setTimeout(function () {
            _this.subscriber = _this.session.subscribe(event.stream, event.stream.id, {
                insertMode: 'append',
                width: '100%',
                height: '100%',
                showControls: true,
                fitMode: "cover"
            });
            _this.subscriber.setAudioVolume(0);
        }, 10);
        this.getTriples();
    };
    HomePage.prototype.onStreamDestroyed = function (event) {
        var number;
        for (var i = 0; i < this.streamArray.length; i++) {
            if (this.streamArray[i].stream.id == event.stream.id) {
                number = i;
            }
        }
        this.streamArray.splice(number, 1);
        this.getTriples();
        /*	if (this.isSubscribing && event.stream.streamId === this.subscriber.stream.streamId) {
            this.session.unsubscribe(this.subscriber);
            this.isSubscribing = false;
            this.subscriber = undefined;
          }*/
    };
    HomePage.prototype.bigScreen = function (stream) {
        var _this = this;
        this.session.signal({
            data: "joined",
            to: stream.connection,
        }, function (error) {
            console.log(error);
        });
        var subscriberProperties = { insertMode: 'append', width: window.innerWidth, height: window.innerHeight };
        if (document.getElementById('bigvideo') == null)
            document.getElementById('bigvideoholder').innerHTML = '<div id="bigvideo"></div><div class="closeBigVideo" ></div>';
        this.laregerVideo = this.session.subscribe(stream, 'bigvideo', subscriberProperties);
        var closebutton = document.getElementsByClassName('closeBigVideo')[0].addEventListener('click', function (e) { return _this.addCloseButton(stream); });
    };
    HomePage.prototype.addCloseButton = function (stream) {
        this.session.signal({
            data: "removed",
            to: stream.connection,
        }, function (error) {
            console.log(error);
        });
        this.laregerVideo.destroy();
        var elem = document.getElementById('bigvideo');
        var elem2 = document.getElementsByClassName('closeBigVideo')[0];
        elem.remove();
        elem2.remove();
    };
    HomePage.prototype.minimizeVideo = function (stream) {
        var subscriberProperties = { insertMode: 'append', width: (document.documentElement.clientWidth / 3) - 110, height: 240 };
        if (document.getElementById('layout') == null)
            document.getElementById('allStreams').innerHTML = '<div id="layout"></div>';
        this.subscriber = this.session.subscribe(stream.stream, 'layout', { insertMode: 'append' });
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.session.unpublish(this.publisher);
        this.session.off('streamCreated');
        this.session.off('sessionConnected');
        this.session.unsubscribe(this.streamArray);
        //this.session.streamDestroyed();
        this.streamArray = [];
        this.userNames = [];
        this.session.disconnect();
    };
    HomePage.prototype.startChat = function () {
        this.startDisable = true;
        this.stopDisable = false;
        this.initializePublisher();
        this.initializeSession();
    };
    HomePage.prototype.getTriples = function () {
        var triples = [];
        var length = this.streamArray.length;
        for (var i = 0; i < length; i += 3) {
            var trio = [];
            trio.push(this.streamArray[i]);
            if (i + 1 < length) {
                trio.push(this.streamArray[i + 1]);
            }
            if (i + 2 < length) {
                trio.push(this.streamArray[i + 2]);
            }
            triples.push(trio);
        }
        return triples;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.initializePublisher();
        this.initializeSession();
    };
    HomePage.prototype.stopChat = function () {
        this.startDisable = false;
        this.stopDisable = true;
        this.ngOnDestroy();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     Video Chat\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n\n   <!-- <ion-grid>\n        <ion-row *ngFor="let trio of userNames">\n            <ion-col >\n              \n                <ion-item>{{ trio }}</ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n  -->\n    <button ion-button icon-start  [disabled]="startDisable" (click)="startChat()"> \n        <ion-icon name="play"></ion-icon>\n        start\n      </button>\n      \n      <button ion-button icon-end  [disabled]="stopDisable" (click)="stopChat()">\n        stop\n        <ion-icon name="square"></ion-icon>\n      </button>\n <!-- <h1>Hello OpenTokJS</h1>\n	<p>Publisher:</p>\n	<div id="publisher"></div>\n	<p>Subscriber:</p>\n<div id="subscriber"></div>-->\n\n<h3>You:</h3>\n  <div id="videos">\n<div id="publisher"></div>\n<div id="subscriber"></div>\n  </div>\n\n\n<h3>Subscribers:</h3>\n<div id="allStreams">\n  <div id="layout"></div>\n</div>\n<div id="bigvideoholder">\n</div>\n\n<ion-grid id="bigvideoholder">\n  \n  <!--<ion-row *ngFor="let trio of getTriples();">-->\n      <ion-row >\n      <ion-col *ngFor="let item of streamArray">\n          <ion-item>\n            <div [id]="item.stream.id" style="height:550px"></div>\n            <button ion-fab color="danger" navPush="Chat"   [navParams]="sessionDetails"  >  <ion-icon name="text"></ion-icon></button></ion-item>\n            </ion-col>\n  </ion-row>\n</ion-grid>\n\n\n<!--\n<ion-grid id="bigvideoholder">\n  <ion-row >\n      <ion-col width-33 *ngFor="let item of streamArray">\n          <div [id]="item.stream.id" style="height:550px"></div>\n        </ion-col>\n      \n      <button md-icon-button color="accent" (click)="bigScreen(item.stream)">\n        <i class="material-icons">launch</i>\n      </button>\n  </ion-row>\n</ion-grid>\n-->\n<!--<ul class="heroes" id="bigvideoholder">s\n  <li *ngFor="let item of streamArray">\n    <div [id]="item.stream.id" style="height:200px"></div>\n    <button md-icon-button color="accent" (click)="bigScreen(item.stream)">\n      <i class="material-icons">launch</i>\n    </button>\n  </li>\n</ul>-->\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//let IP_ADDRESS = 'https://demoapp.itsguardian.com:59000/api/';
var IP_ADDRESS2 = 'http://192.168.1.88:3239/api/';
//let  local_url='http://192.168.1.88/api/Chat/GenerateToken';
//let  local_url='http://192.168.1.88:3239/api/Chat/IndexOptions';
var local_url = 'http://192.168.1.88:3239/api/Chat/GenerateToken';
var IP_ADDRESS = 'http://192.168.1.88/api/';
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http, httpNew, storage, jsonp, toast) {
        var _this = this;
        this.http = http;
        this.httpNew = httpNew;
        this.storage = storage;
        this.jsonp = jsonp;
        this.toast = toast;
        console.log('Hello AuthServiceProvider Provider');
        this.storage.get('token').then(function (val) {
            console.log('Your token is:----', val);
            _this.token = val;
            debugger;
        });
    }
    AuthServiceProvider.prototype.getSessionDetails = function () {
        var _this = this;
        console.log("ajax 1 started");
        var testingV = 'Bearer ' + localStorage.getItem('data');
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + localStorage.getItem('data') });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["f" /* RequestOptions */]({ headers: headers, method: 'post' });
        var body = JSON.parse(localStorage.getItem('data'));
        alert("this data" + localStorage.getItem('data'));
        this.httpNew.setHeader("Authorization", 'Bearer ' + localStorage.getItem('data'));
        this.httpNew.post(local_url, body, {})
            .then(function (data) {
            console.log(data.status);
            console.log(data.data); // data received by server
            console.log(data.headers);
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
        console.log("ajax 1 Ended");
        console.log("ajax 2 started");
        this.http.post(local_url, body, options).
            subscribe(function (res) {
            alert("coming here");
            alert(JSON.stringify(res.json()));
            console.log("data" + res.json());
        }, function (err) {
            alert("error" + err);
            console.log("error" + err);
        });
        console.log("ajax 2 Ended");
        console.log("ajax 3 started");
        return new Promise(function (resolve, reject) {
            //headers.append('Content-Type','application/x-www-form-urlencoded');
            alert("calling");
            _this.http.post(local_url, body, options).
                subscribe(function (res) {
                alert("coming here");
                alert(JSON.stringify(res.json()));
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.getProfile = function () {
        var _this = this;
        debugger;
        var user;
        alert(this.token);
        return new Promise(function (resolve, reject) {
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["f" /* RequestOptions */]();
            options.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            options.headers.append('Authorization', 'Bearer ' + _this.token);
            _this.http.get(IP_ADDRESS + 'PatientUser/Index', options)
                .subscribe(function (res) {
                alert('got');
                resolve(res.json());
                user = res;
                console.log(res);
                debugger;
            }, function (err) {
                reject(err);
                console.log("Error occured:" + err);
                debugger;
            });
        });
    };
    AuthServiceProvider.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            //headers.append('Content-Type','application/x-www-form-urlencoded');
            // let options = new RequestOptions();
            // options.headers = new Headers();
            //    options.headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //   options.headers.append('Access-Control-Allow-Origin','*')
            var body = 'username=' + credentials.username + '&password=' + credentials.password + '&grant_type=password';
            _this.http.post(IP_ADDRESS + 'Token', body, { headers: headers }).
                subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.getresetPassword = function (resetcredentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            alert(resetcredentials);
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["f" /* RequestOptions */]();
            options.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            //  options.headers.append('Authorization', 'Bearer ' + this.token);
            //var body='EmailId='+resetcredentials;
            debugger;
            _this.http.post(IP_ADDRESS + 'UserManager/ForgotPassword?EmailId=' + resetcredentials, null, options).
                subscribe(function (res) {
                resolve(res.json());
                /// this.toastr.success('Please contact support if you are unable to remember password.','Success!');
            }, function (err) {
                reject(err);
                if (err.status === 503) {
                    //this.toastr.error('Please contact support if you are unable to remember password.','Oops!');
                    var toast = _this.toast.create({
                        message: 'Please contact support team.',
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.onDidDismiss(function () {
                        console.log('Dismissed toast');
                    });
                    toast.present();
                }
            });
        });
    };
    AuthServiceProvider.prototype.TeleHealthdata = function (id) {
        var _this = this;
        alert(id);
        return new Promise(function (resolve, reject) {
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["f" /* RequestOptions */]();
            options.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            options.headers.append('Authorization', 'Bearer ' + _this.token);
            //var body='username='+credentials;
            _this.http.post(IP_ADDRESS + 'PatientUser/PatientPortalTeleHealthGridView?PatientId=' + id, null, options).
                subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(50);
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
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(storage, nativePageTransitions, navCtrl, authService, fb, alertCtrl, loadingCtrl) {
        this.storage = storage;
        this.nativePageTransitions = nativePageTransitions;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.backgroundImage = "./assets/bg1.jpg";
        this.loginParameters = {
            'grant_type': 'password',
            'username': 'test@gmail.com',
            'password': 'Dts@123456'
        };
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        // this.authService.getProfile();
        this.authService.postData(this.loginParameters).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            // localStorage.setItem('data',JSON.stringify(this.responseData));
            _this.storage.set('name', 'Max');
            _this.storage.set('token', _this.responseData.access_token);
            _this.storage.get('name').then(function (val) {
                console.log('Your name is', val);
            });
            console.log('local storage value has been set');
            // this.navCtrl.push(ProfilePage);
            _this.getProfile();
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.getProfile = function () {
        var _this = this;
        this.authService.getProfile().then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            _this.user = _this.responseData;
            debugger;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], {
                param1: _this.user
            });
        }, function (err) {
            console.log(err);
        });
        return this.user;
    };
    LoginPage.prototype.forgot = function () {
        var _this = this;
        this.authService.getresetPassword(this.loginParameters.username).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
        }, function (err) {
            console.log(err);
            if (err.status === 500) {
                alert(err.statusText);
            }
        });
        //this.navCtrl.push('ForgotPage');
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push('RegisterPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\login\login.html"*/'<script src=\'https://www.google.com/recaptcha/api.js\'></script>\n\n<ion-content [ngStyle]="{\'background-image\': \'url(\' + backgroundImage +\')\'}">\n  <div class="login-container">\n    <img class="logo" src="./assets/guardian.png" />\n    \n    <!--*********** Form ***********-->\n    <form  (submit)="login()" novalidate>\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input tappable color="light" aria-placeholder="RPatel@itsguardian.com" #email type="email" >\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input tappable #password aria-placeholder="Dts@123456" type="password">\n        </ion-input>\n      </ion-item>\n\n      <!-- <ion-item class="error-message">\n        <p *ngIf="!loginForm.controls.email.valid  &&\n                loginForm.controls.email.dirty">*Please enter a valid email.</p>\n        <p *ngIf="!loginForm.controls.password.valid  &&\n                loginForm.controls.password.dirty">*Password needs more than 6 characters.</p>\n      </ion-item> -->\n      <!-- <re-captcha\n      (resolved)="resolved($event)"\n      siteKey="6LcrWDAUAAAAALGGgrj3uf170oof-Tf7paZfDIB1"\n        ></re-captcha>  -->\n      <div class="submit-box">\n        <button ion-button block type="submit"\n        nav color="blue2">Log in</button>\n        \n        <button ion-button type="button" block icon-left color="light" outline (click)="createAccount()" margin-top>\n            <ion-icon name="ios-create"></ion-icon> Create new account\n        </button>\n      </div>\n    </form>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <button class="bottom" ion-button  type="button"  clear full color="light" (click)="forgot()">Forgot your password? </button>\n</ion-footer>'/*ion-inline-end:"E:\Guardian\29-08-2017\OpenTokFinale\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpentokProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_android_permissions__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the OpentokProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var OpentokProvider = (function () {
    function OpentokProvider(http, androidPermissions) {
        this.http = http;
        this.androidPermissions = androidPermissions;
        this.openTokSessionId = '1_MX40NTk0NzMwMn5-MTUwNDc4MTU1MDM3MH5DRExqaDRRL2N4azBCL1dGUmZNSkZ5emt-fg';
        this.apiKey = '45947302';
        this.tokenId = 'T1==cGFydG5lcl9pZD00NTk0NzMwMiZzaWc9MjI5MTZkOTMwNjYzZmE0ZTA2NTJkZGZiMzk4NjkzODI5YWY0YTlkMDpzZXNzaW9uX2lkPTFfTVg0ME5UazBOek13TW41LU1UVXdORGM0TVRVMU1ETTNNSDVEUkV4cWFEUlJMMk40YXpCQ0wxZEdVbVpOU2taNWVtdC1mZyZjcmVhdGVfdGltZT0xNTA0NzgxNTk5Jm5vbmNlPTAuOTc0OTI4NzUzOTA5MjQ2OCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA3MzczNTk1JmNvbm5lY3Rpb25fZGF0YT1TcmluYWRoJTIwS2FudWdhbGEmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';
        console.log('Hello OpentokProvider Provider');
        this.session = undefined;
        this.checklists = [this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.RECORD_AUDIO, this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS];
        this.androidPermissions.requestPermissions(this.checklists);
    }
    OpentokProvider.prototype.initializePublisher = function (divElement) {
        return OT.initPublisher(divElement, {
            insertMode: 'append',
            name: 'Kanugala',
            showControls: true
        });
    };
    OpentokProvider.prototype.initializeSession = function () {
        var _this = this;
        this.session = OT.initSession(this.apiKey, this.openTokSessionId);
        this.session.connect(this.tokenId, function (e) { return _this.tryingToConnect(e); });
        return this.session;
    };
    OpentokProvider.prototype.tryingToConnect = function (e) {
        console.log("your successfully connected to Session");
    };
    return OpentokProvider;
}());
OpentokProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
], OpentokProvider);

//# sourceMappingURL=opentok.js.map

/***/ })

},[330]);
//# sourceMappingURL=main.js.map