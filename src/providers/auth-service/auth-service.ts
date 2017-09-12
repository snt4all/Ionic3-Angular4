import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { HttpModule, JsonpModule, Jsonp, Response, Http, Headers, RequestOptions } from '@angular/http';
import {ToastService} from '../../providers/util/toast.service';
import { HTTP } from '@ionic-native/http';
//let IP_ADDRESS = 'https://demoapp.itsguardian.com:59000/api/';
let IP_ADDRESS2 = 'http://192.168.1.88:3239/api/';
//let  local_url='http://192.168.1.88/api/Chat/GenerateToken';
//let  local_url='http://192.168.1.88:3239/api/Chat/IndexOptions';
let local_url = 'http://192.168.1.88:3239/api/Chat/GenerateToken';
let IP_ADDRESS = 'http://192.168.1.88/api/';
@Injectable()
export class AuthServiceProvider {
  token: any;
  user:any;
  constructor(public http: Http, public httpNew: HTTP,public storage: Storage, public jsonp: Jsonp,public toast:ToastController) {
    console.log('Hello AuthServiceProvider Provider');
    this.storage.get('token').then((val) => {
      console.log('Your token is:----', val);
      this.token = val;
      debugger;
    });
  }



  getSessionDetails() {
    console.log("ajax 1 started");
    let testingV = 'Bearer ' + localStorage.getItem('data');
    let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('data') });
    let options = new RequestOptions({ headers: headers, method: 'post' });
    let body = JSON.parse(localStorage.getItem('data'));
    alert("this data" + localStorage.getItem('data'));
    this.httpNew.setHeader("Authorization", 'Bearer ' + localStorage.getItem('data'));
    this.httpNew.post(local_url, body, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });

    console.log("ajax 1 Ended");
    console.log("ajax 2 started");
    this.http.post(local_url, body, options).
      subscribe(res => {
        alert("coming here");
        alert(JSON.stringify(res.json()));
        console.log("data" + res.json());

      }, (err) => {
        alert("error" + err);
        console.log("error" + err);
      });


    console.log("ajax 2 Ended");
    console.log("ajax 3 started");

    return new Promise((resolve, reject) => {

      //headers.append('Content-Type','application/x-www-form-urlencoded');

      alert("calling");
      this.http.post(local_url, body, options).
        subscribe(res => {
          alert("coming here");
          alert(JSON.stringify(res.json()));
          resolve(res.json())

        }, (err) => {
          reject(err)
        });
    });

  }

  getProfile() {
    debugger;
    let user;
    alert(this.token);
   return new Promise((resolve, reject) => {
      let options = new RequestOptions();
      options.headers = new Headers();
      options.headers.append('Authorization', 'Bearer ' + this.token);
      this.http.get(IP_ADDRESS + 'PatientUser/Index',options)
     .subscribe(res => {
        alert('got');
       resolve(res.json())
      user = res;
      console.log(res);
        debugger;
      }, (err) => {
        reject(err)
      console.log("Error occured:"+err);
        debugger;
      });
   });


  }
  postData(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      //headers.append('Content-Type','application/x-www-form-urlencoded');
 
      // let options = new RequestOptions();
      // options.headers = new Headers();

      //    options.headers.append('Content-Type', 'application/x-www-form-urlencoded');
      //   options.headers.append('Access-Control-Allow-Origin','*')
      var body = 'username=' + credentials.username + '&password=' + credentials.password + '&grant_type=password'
      this.http.post(IP_ADDRESS + 'Token', body, { headers: headers }).
        subscribe(res => {
          resolve(res.json())

        }, (err) => {
          reject(err)
        });
    });
  }
  getresetPassword(resetcredentials){
    return new Promise((resolve,reject)=>{
   alert(resetcredentials)
  let options = new RequestOptions();
   options.headers = new Headers();
  //  options.headers.append('Authorization', 'Bearer ' + this.token);

   //var body='EmailId='+resetcredentials;
   debugger;
      this.http.post(IP_ADDRESS+'UserManager/ForgotPassword?EmailId='+resetcredentials,null,options).
      subscribe(res =>{
    resolve(res.json())
   /// this.toastr.success('Please contact support if you are unable to remember password.','Success!');
      },(err) =>{
        reject(err)
        if(err.status===503){
          //this.toastr.error('Please contact support if you are unable to remember password.','Oops!');
          let toast = this.toast.create({
            message: 'Please contact support team.',
            duration: 3000,
            position: 'middle'
          });
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });
        
          toast.present();
        }
       
      });
    });
  }
  TeleHealthdata(id){ 
    alert(id);
    return new Promise((resolve,reject)=>{
      let options = new RequestOptions();
      options.headers = new Headers();
      options.headers.append('Authorization', 'Bearer ' + this.token);
    //var body='username='+credentials;
      this.http.post(IP_ADDRESS+'PatientUser/PatientPortalTeleHealthGridView?PatientId='+id,null,options).
      subscribe(res =>{
  resolve(res.json())

      },(err) =>{
        reject(err)
      });
    });
  }
}
