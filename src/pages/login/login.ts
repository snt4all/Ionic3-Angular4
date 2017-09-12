import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { ProfilePage } from "../profile/profile";
import { RegisterPage } from '../register/register';
import { ForgotPage } from '../forgot/forgot';
import { FormBuilder, Validators } from '@angular/forms';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public backgroundImage: any = "./assets/bg1.jpg";
  responseData :any;
  public loginForm: any;
  loginParameters = {
                 'grant_type': 'password',
                 'username': 'test@gmail.com',
                 'password': 'Dts@123456'
             }
 
             constructor(private storage:Storage, private nativePageTransitions: NativePageTransitions,public navCtrl: NavController,public authService:AuthServiceProvider, public fb: FormBuilder, public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
              let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
              this.loginForm = fb.group({
                    email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
                    password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
              });
          }

         
  login(){
    // this.authService.getProfile();
    this.authService.postData(this.loginParameters).then((result)=>{
    this.responseData = result;
    console.log(this.responseData)
   // localStorage.setItem('data',JSON.stringify(this.responseData));
    this.storage.set('name', 'Max');
    this.storage.set('token',this.responseData.access_token);
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
    });
    console.log('local storage value has been set');
   // this.navCtrl.push(ProfilePage);
   
   this.getProfile();
     },(err)=>{
      console.log(err)
    });
     
    }
    user :object;
    getProfile(){
      this.authService.getProfile().then((result)=>{
        this.responseData = result
       console.log(this.responseData);
       this.user = this.responseData;
       debugger;
       this.navCtrl.push(ProfilePage,{
        param1:this.user  
    });
     
     },(err)=>{
      console.log(err)
      });
      return this.user;

    }
    forgot(){
      
      this.authService.getresetPassword(this.loginParameters.username).then((result)=>{
     this.responseData = result;
     console.log(this.responseData)
     
     },(err)=>{
     console.log(err);
     if(err.status===500){
       alert(err.statusText);
     }
     });
         //this.navCtrl.push('ForgotPage');
       }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  createAccount(){
    this.navCtrl.push('RegisterPage');
  }

}
