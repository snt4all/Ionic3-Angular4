import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { ForgotPage } from '../pages/forgot/forgot';
import { HTTP } from '@ionic-native/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {ToastService } from '../providers/util/toast.service';
import {TeleHealthPage} from '../pages/tele-health/tele-health';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import { HttpModule,JsonpModule, Jsonp, Response } from '@angular/http';
import { ChatUsersPage } from "../pages/chat-users/chat-users";
import { OpentokProvider } from '../providers/opentok/opentok';
import { OpentokService } from "../providers/opentok/opentok.service";
import { PublisherService } from "../providers/opentok/publisher.service";
import { Chat } from "../pages/chat/chat";
import { ChatModule } from "../pages/chat/chat.module";
import { VideoChatModalPage } from "../pages/video-chat-modal/video-chat-modal";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { TextChatingPage } from "../pages/text-chating/text-chating";
import { IonicStorageModule } from '@ionic/storage';
import {ExpandableComponent} from '../components/expandable/expandable'
import { MenuComponent } from "./menu.component";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    ChatUsersPage,
    VideoChatModalPage,
    TextChatingPage,
    TeleHealthPage,
 ExpandableComponent,
    MenuComponent   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    ChatModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    ChatUsersPage,
    VideoChatModalPage,
    TextChatingPage,
    TeleHealthPage,
ExpandableComponent,
    MenuComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    AuthServiceProvider,
    NativePageTransitions,
    ToastService,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OpentokProvider,
    OpentokService,
    PublisherService
  ]
})
export class AppModule {}
