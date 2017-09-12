import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AndroidPermissions } from "@ionic-native/android-permissions";

declare var cordova: any;
declare const window;
declare const OT;
/*
  Generated class for the OpentokProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OpentokProvider {
  session: any;

  public openTokSessionId: string = '1_MX40NTk0NzMwMn5-MTUwNDc4MTU1MDM3MH5DRExqaDRRL2N4azBCL1dGUmZNSkZ5emt-fg';
  public apiKey: string = '45947302';
  public tokenId: string = 'T1==cGFydG5lcl9pZD00NTk0NzMwMiZzaWc9MjI5MTZkOTMwNjYzZmE0ZTA2NTJkZGZiMzk4NjkzODI5YWY0YTlkMDpzZXNzaW9uX2lkPTFfTVg0ME5UazBOek13TW41LU1UVXdORGM0TVRVMU1ETTNNSDVEUkV4cWFEUlJMMk40YXpCQ0wxZEdVbVpOU2taNWVtdC1mZyZjcmVhdGVfdGltZT0xNTA0NzgxNTk5Jm5vbmNlPTAuOTc0OTI4NzUzOTA5MjQ2OCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA3MzczNTk1JmNvbm5lY3Rpb25fZGF0YT1TcmluYWRoJTIwS2FudWdhbGEmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';
  //public openTokSessionId: string = '1_MX40NTkzNDA2Mn5-MTUwNTExNTU5MDY1Mn5TalAwREJheXo1QUl3UWdXZXQ2ZVF4SXZ-fg';
  //public apiKey: string = '45934062';
  //public tokenId: string = 'T1==cGFydG5lcl9pZD00NTkzNDA2MiZzaWc9YjUyMTMwYzhkNGJkYTQwMTA0NmNiZTdhYjYzMjg1ZGRkYmQ4MzdhOTpzZXNzaW9uX2lkPTFfTVg0ME5Ua3pOREEyTW41LU1UVXdOVEV4TlRVNU1EWTFNbjVUYWxBd1JFSmhlWG8xUVVsM1VXZFhaWFEyWlZGNFNYWi1mZyZjcmVhdGVfdGltZT0xNTA1MTE1NTkyJm5vbmNlPTU4MzY0NyZyb2xlPVBVQkxJU0hFUg==';

  public checklists: any;
  public laregerVideo: any;
  constructor(public http: Http, public androidPermissions: AndroidPermissions) {
    console.log('Hello OpentokProvider Provider');
    this.session = undefined;
    this.checklists = [this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.RECORD_AUDIO, this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS];
    this.androidPermissions.requestPermissions(this.checklists);
  }
  initializePublisher(divElement) {
    return OT.initPublisher(divElement, {
      insertMode: 'append',
      name: 'Kanugala',
      showControls: true
    });
  }

  initializeSession() {
    this.session = OT.initSession(this.apiKey, this.openTokSessionId);
    this.session.connect(this.tokenId, (e) => this.tryingToConnect(e));
    return this.session;
  }

  tryingToConnect(e) {
    console.log("your successfully connected to Session");
  }


}
