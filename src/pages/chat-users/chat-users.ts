import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { OpentokService } from "../../providers/opentok/opentok.service";
import { PublisherService } from "../../providers/opentok/publisher.service";
import { OpentokProvider } from "../../providers/opentok/opentok";
import { Chat } from "../chat/chat";

declare const OT;
/**
 * Generated class for the ChatUsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-users',
  templateUrl: 'chat-users.html',
})
export class ChatUsersPage {
  userNames: any = [];
  userIds: any = [];
  connectedUserList: any = [];
  makeChatVisible: boolean;
  sessionDetails: { 'session': any; 'subscriberId': any; 'publisherId': any; 'connectionEvent': any;'isGroupChat':boolean };
  connectedUserId: any;
  connectionCount: any;
  public session: any;
  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, public opentokV: OpentokProvider, public service: OpentokService, public publisher: PublisherService) {
    this.session = undefined;
    platform.ready().then(() => {
      this.session = this.opentokV.initializeSession();
      console.log("coming here" + this.session);
      this.session.on('connectionCreated', (e) => this.onConnectionConnected(e));
      this.session.on("connectionDestroyed", (e) => this.onConnectionDestroyed(e));
    });
  }

  onConnectionDestroyed(e) {
    let number;
    for (let i = 0; i < this.connectedUserList.length; i++) {
      if (this.connectedUserList[i].connection.connectionId == (e.connection.connectionId)) {
        number = i;
        break;
      }
    }
    this.connectedUserList.splice(number, 1);
    this.userNames.splice(number, 1);
  }

  onConnectionConnected(e) {
    if (e.connection.connectionId != this.session.connection.connectionId) {
      this.connectedUserId = (e.connection.data);
      this.connectedUserList.push(e);
      this.userIds.push(e.connection.connectionId);
      this.userNames.push(this.connectedUserId + "''" + e.connection.connectionId);
    }
  }

  stopTextChat(){
    this.session.disconnect();
    this.navCtrl.pop();
  }

  startTextChat(e,isGroupChat) {
    if(e!=""){
      this.sessionDetails = {  'session': this.session, 'subscriberId': e.connection.connectionId, 'publisherId': this.session.connection.connectionId, 'connectionEvent': e, 'isGroupChat':isGroupChat };
    }else{
      this.sessionDetails = {  'session': this.session, 'subscriberId': "", 'publisherId': this.session.connection.connectionId, 'connectionEvent': "", 'isGroupChat':isGroupChat };
    }
    
    this.makeChatVisible = true;    
    this.navCtrl.push(Chat,this.sessionDetails);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatUsersPage');
  }

}
