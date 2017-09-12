import { Component,ViewChild } from '@angular/core';
import { IonicPage,Nav, NavController, NavParams,ModalController } from 'ionic-angular';
import { ToastService } from '../../providers/util/toast.service';
import { HomePage } from "../home/home";
import {TeleHealthPage} from '../tele-health/tele-health';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 
  rootPage: string = 'ProfilePage';
  following = false;
user :any;
background={
  coverImage:'./assets/img/background/card-amsterdam.png'
}
 

  responseData :any;
  Id :any;
  constructor(public storage:Storage, private navParams: NavParams,public navCtrl: NavController, public toastCtrl: ToastService,public modalCtrl: ModalController,public authService: AuthServiceProvider) {
  
    
   this.user = this.navParams.get('param1');   
   this.storage.set('Login_userid',this.user.Id);
  
  
   this.storage.get('Login_userid').then((val) => {
    console.log('Your name is', val);
    this.Id = val;
  });
  debugger;
   }
  
  ionViewDidLoad() {
    console.log('Hello Profile Four Page');
   
  }
  getTeleHealthdata(){
    this.authService.TeleHealthdata(this.Id).then((result)=>{
      this.responseData = result;
      console.log(this.responseData);
      console.log(this.responseData.TeleHealthAppoinmentHistoryList);
      debugger;
     this.navCtrl.push(TeleHealthPage,{
      param1:this.responseData.TeleHealthAppoinmentHistoryList 
  });
       },(err)=>{
        console.log(err)
      });
 }
  presentProfileModal() {
 // let profileModal = this.modalCtrl.create(ChatPage, { userId: 8675309 });
   // profileModal.present();
   this.navCtrl.push(HomePage);
   //this.nav.setRoot(ChatPage).catch(err => console.error(err));
  }

  follow() {
    this.following = !this.following;
    this.toastCtrl.create('Follow user clicked');
  }

  imageTapped(post) {
    this.toastCtrl.create('Post image clicked');
  }


  comment(post) {
    this.toastCtrl.create('Comments clicked');
  }

  like(post) {
    this.toastCtrl.create('Like clicked');
  }

}
