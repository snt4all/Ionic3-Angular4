import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

declare var cordova: any;
declare const window;
declare const OT;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  connectionCount: any;
  makeChatVisible: boolean;
  number: string;
  config: any;
  public session: any;
  public publisher: any;
  public subscriber: any;
  myList: any[];
  public isSubscribing: boolean = false;
  public streamArray: any = [];
  public API_SECRET: any;
  public sessionId: any;
  public startDisable: boolean = false;
  public stopDisable: boolean = true;
  public tokenG: any;
  public sessionDetails: any = [];
  public connectedUserId: any;
  public userIds: any = [];
  public userNames: any = [];
  public connectedUserList: any = [];
  public openTokSessionId: string = '2_MX40NTk0NzMwMn5-MTUwMzkwMTcyMjQyOH52TFZWa3drZVJFM01GYzN0d3N4Nk5aUmd-fg';
  // public tokenId:string            = 'T1==cGFydG5lcl9pZD00NTk0MzAzMiZzaWc9NGEzNmI0ZDVhZDU2MWE3NDI5YWQxNmUzZWIxMDUxZDhhODUyMjkwOTpzZXNzaW9uX2lkPTFfTVg0ME5UazBNekF6TW41LU1UVXdNek14TmpBd01UQTVNbjVVTWxKSGVHTmFZamgwZWpORmNuSnhRakpJUWxrM2NHMS1mZyZjcmVhdGVfdGltZT0xNTAzMzE4Nzk4Jm5vbmNlPTAuMTg1MTkzOTc1MTQzNTY0MDYmcm9sZT1zdWJzY3JpYmVyJmV4cGlyZV90aW1lPTE1MDU5MTA3OTYmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';
  public apiKey: string = '45947302';

  public tokenId: string = 'T1==cGFydG5lcl9pZD00NTk0NzMwMiZzaWc9YzFkMWYwOWJjMjhhNGU3NjRjYTA0MGNhODNkMDdkYmE3NjZhOTg3ZTpzZXNzaW9uX2lkPTJfTVg0ME5UazBOek13TW41LU1UVXdNemt3TVRjeU1qUXlPSDUyVEZaV2EzZHJaVkpGTTAxR1l6TjBkM040Tms1YVVtZC1mZyZjcmVhdGVfdGltZT0xNTAzOTAxNzU1Jm5vbmNlPTAuODUzMDQyMTI1MzExMjMwNCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA2NDkzNzUyJmNvbm5lY3Rpb25fZGF0YT1OYW1lJTNBJTIwU3JpbmFkaCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
  public checklists: any;
  public laregerVideo: any;
  constructor(public auth: AuthServiceProvider, public navCtrl: NavController, public platform: Platform, public androidPermissions: AndroidPermissions) {
    platform.ready().then(() => {
      this.session = undefined;
      this.publisher = undefined;
      this.subscriber = undefined;
      this.isSubscribing = false;
      this.myList = [];

      for (let i = 0; i < 20; i++) {
        this.myList.push(i);
      }

      // this.OT = cordova.require("cordova-plugin-opentokjs.OpenTokClient");
      console.log('The wikitude object: ', OT);
      console.log('The wikitude test method: ', OT);
      this.checklists = [this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.RECORD_AUDIO, this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS];
      //check permissions
      /* this.androidPermissions.checkPermission(this.checklists).then(
         success => this.androidPermissions.requestPermissions(this.checklists),
         err => this.androidPermissions.requestPermissions(this.checklists)
       );*/
      this.androidPermissions.requestPermissions(this.checklists);
      // this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS,this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS]);
      //  this.initializePublisher();
      // this.initializeSession();    

    });
  }



  initializePublisher() {
    // alert("yess");
    // OT.createSession({}, (e)=>this.sessionCreation(e));
    this.publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      name: 'Kanugala',
      showControls: true
    });
  }
  initializeSession() {
    this.auth.getSessionDetails().then((result) => {
      alert(JSON.stringify(result));
      //localStorage.setItem('data',JSON.stringify(this.responseData));
      // this.navCtrl.push(ProfilePage);
    }, (err) => {
      //alert(err);
    });
    this.session = OT.initSession("45947302", this.openTokSessionId);
    this.session.on('streamCreated', this.onStreamCreated);
    this.session.on('streamDestroyed', this.onStreamDestroyed);

    this.session.connect(this.tokenId, (e) => this.tryingToConnect(e));
  }

  tryingToConnect(e) {
    this.session.publish(this.publisher);
    this.session.on('streamCreated', (e) => this.onStreamCreated(e));
    this.session.on('streamDestroyed', (e) => this.onStreamDestroyed(e));
    this.session.on('connectionCreated', (e) => this.onSessionCreatedEvent(e));
    this.session.on('connectionCreated', (e) => this.onConnectionConnected(e))
    this.session.on('signal', (e) => this.gotSignal(e));
    //this.sendSignal();      
  }

  onConnectionConnected(event) {
    this.connectionCount++;
    //console.log('--------------connection count: '+this.connectionCount)
    if (event.connection.connectionId != this.session.connection.connectionId) {
      this.connectedUserId = event.connection.connectionId;
      this.sessionDetails = { 'session': this.session, 'subscriberId': this.connectedUserId, 'publisherId': this.session.connection.connectionId, 'connectionEvent': event };
      ////debugger;
      this.makeChatVisible = true;
    }
  }

  onSessionCreatedEvent(e) {
    // alert(e);       
    if (e.connection.connectionId != this.session.connection.connectionId) {
      console.log("New User Got Entered" + e);
      this.connectedUserId = (e.connection.data);
      console.log(this.connectedUserId);
      this.connectedUserList.push(this.connectedUserId);
      this.userIds.push(e.connection.connectionId);
      this.userNames.push(this.connectedUserId + "''" + e.connection.connectionId);

    }
  }

  sendSignal() {
    this.session.signal({
      data: "Some One Given Signal KSNT"
    }, (error) => {
      console.log(error);
    })
  }

  gotSignal(e) {
    console.log("Signal got from connection " + e + "data :" + e.data);

  }

  onSessionConnected(event) {
    //  alert(this.isSubscribing);
    this.session.publish(this.publisher);
  }



  onStreamCreated(event) {
    //this.subscriber = this.session.subscribe(event.stream, 'subscriber');
    /*	if (!this.isSubscribing) {
        this.subscriber = this.session.subscribe(event.stream, 'subscriber');
        this.isSubscribing = true;
      }*/

    this.streamArray.push(event);
    let subscriberProperties = { insertMode: 'append', width: (document.documentElement.clientWidth / 3), height: 240 };
    setTimeout(() => {
      this.subscriber = this.session.subscribe(event.stream, event.stream.id, {
        insertMode: 'append',
        width: '100%',
        height: '100%',

        showControls: true,
        fitMode: "cover"

      });
      this.subscriber.setAudioVolume(0);

    }, 10)
    this.getTriples();
  }

  onStreamDestroyed(event) {
    let number;
    for (let i = 0; i < this.streamArray.length; i++) {
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
  }

  bigScreen(stream) {
    this.session.signal({
      data: "joined",
      to: stream.connection,
    }, (error) => {
      console.log(error);
    })
    let subscriberProperties = { insertMode: 'append', width: window.innerWidth, height: window.innerHeight };
    if (document.getElementById('bigvideo') == null)
      document.getElementById('bigvideoholder').innerHTML = '<div id="bigvideo"></div><div class="closeBigVideo" ></div>';
    this.laregerVideo = this.session.subscribe(stream, 'bigvideo', subscriberProperties);
    let closebutton = document.getElementsByClassName('closeBigVideo')[0].addEventListener('click', (e) => this.addCloseButton(stream));
  }
  addCloseButton(stream) {
    this.session.signal({
      data: "removed",
      to: stream.connection,
    }, (error) => {
      console.log(error);
    })
    this.laregerVideo.destroy();
    let elem = document.getElementById('bigvideo');
    let elem2 = document.getElementsByClassName('closeBigVideo')[0];
    elem.remove();
    elem2.remove();
  }
  minimizeVideo(stream) {
    let subscriberProperties = { insertMode: 'append', width: (document.documentElement.clientWidth / 3) - 110, height: 240 };
    if (document.getElementById('layout') == null)
      document.getElementById('allStreams').innerHTML = '<div id="layout"></div>';
    this.subscriber = this.session.subscribe(stream.stream, 'layout', { insertMode: 'append' });
  }
  ngOnDestroy() {
    this.session.unpublish(this.publisher);
    this.session.off('streamCreated');
    this.session.off('sessionConnected');
    this.session.unsubscribe(this.streamArray);
    //this.session.streamDestroyed();
    this.streamArray = [];
    this.userNames = [];
    this.session.disconnect();
  }

  startChat() {
    this.startDisable = true;
    this.stopDisable = false;
    this.initializePublisher();
    this.initializeSession();

  }
  getTriples() {
    let triples = [];
    let length = this.streamArray.length;
    for (let i = 0; i < length; i += 3) {
      let trio = [];
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
  }
  ionViewDidLoad() {
      this.initializePublisher();
       this.initializeSession(); 
  }

     

  stopChat() {
    this.startDisable = false;
    this.stopDisable = true;
    this.ngOnDestroy();
  }

}
