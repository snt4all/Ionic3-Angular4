import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';
import { Events, Content, TextInput, NavController, ModalController } from 'ionic-angular';
import { ChatService, ChatMessage } from "../../providers/chat-service";
import { OpentokProvider } from "../../providers/opentok/opentok";
import { VideoChatModalPage } from "../video-chat-modal/video-chat-modal";
import { HomePage } from "../home/home";


@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class Chat {
    subscriber: any;
    public streamArray: any = [];
    publisher: any;
    msgSenderList: any[];
    connectionEvent: any;
    publisherId: any;
    subscriberId: any;
    session: any;
    public startDisable: boolean = false;
    public stopDisable: boolean = true;
    @ViewChild(Content) content: Content;
    @ViewChild('chat_input') messageInput: TextInput;
    msgList: ChatMessage[] = [];
    userId: string;
    userName: string;
    userImgUrl: string;
    toUserId: string;
    toUserName: string;
    isGroupChat: boolean;
    editorMsg: string = '';
    publisherIdInfo: any;
    public msgFromList: any = [];
    _isOpenEmojiPicker = false;

    constructor(public modalCtrl: ModalController,
        public navParams: NavParams,
        public chatService: ChatService,
        public events: Events, public navCtrl: NavController, public alerCtrl: AlertController, public opentokV: OpentokProvider) {
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
            .then((res) => {
                this.userId = this.subscriberId;
                this.userName = res.userName;
                this.userImgUrl = res.userImgUrl;
            });
        //debugger;
    }

    ionViewDidEnter() {
        // Subscribe to received  new message events
        this.session.on("signal:textChat", (e) => this.signalTextReceived(e));
        this.session.on("signal:groupChat", (e) => this.signalGroupReceived(e));
        this.session.on("signal:videoChatText", (e) => this.signalVideoTextReceived(e));
        this.session.on("signal:videoChatGroup", (e) => this.signalVideoGroupReceived(e));
        this.session.on('streamCreated', (e) => this.onStreamCreated(e));
        this.session.on('streamDestroyed', (e) => this.onStreamDestroyed(e));
       this.presentProfileModal();
    }

    presentProfileModal() {
        let opts: any = {
            showBackdrop: false,
            enableBackdropDismiss: false
          }
        let profileModal = this.modalCtrl.create(HomePage, { userId: 8675309 },opts);
        profileModal.present();
      }

    chatConfig(message, isVideo) {
        let config;
        if (this.isGroupChat) {
            if (!isVideo) {
                config = {
                    type: 'groupChat',
                    data: message
                };
            } else {
                config = {
                    type: 'videoChatGroup',
                    data: message
                };
            }
        } else {
            if (!isVideo) {
                config = {
                    type: 'textChat',
                    to: this.connectionEvent.connection,
                    data: message
                };
            } else {
                config = {
                    type: 'videoChatText',
                    data: message
                };
            }
        }
        return config;
    }

    signalVideoTextReceived(e) {
        if (e.from.id != this.session.connection.connectionId) {
            console.log("eee" + e);
            if (e.data == "1") {
                console.log("Accepted");
                this.publishVideo();
                this.subscribeVideo();
            } else if (e.data == "0") {
                console.log("0");
            } else {
                this.presentConfirm();
            }
        }
    }

    signalVideoGroupReceived(e) {
        if (e.from.id != this.session.connection.connectionId) {
            console.log("eee" + e);
            this.presentConfirm();

        }

    }

    signalGroupReceived(event) {
        let newMsg: ChatMessage = {
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

    }

    signalTextReceived(event) {
        let newMsg: ChatMessage = {
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

    }
    //Other Data
    _focus() {
        this._isOpenEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    }

    switchEmojiPicker() {
        this._isOpenEmojiPicker = !this._isOpenEmojiPicker;
        if (!this._isOpenEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.content.resize();
        this.scrollToBottom();
    }

    /**
     * @name sendMsg
     */
    sendMsg() {
        console.log("Subscriber ID: " + this.subscriberId);
        if (!this.editorMsg.trim()) return;
        // Mock message
        let newMsg: ChatMessage = {
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
        this.session.signal(this.chatConfig(this.editorMsg, false), (e) => this.signalSent(e, newMsg));
        this.pushNewMsg(newMsg);// keeping in message list
    }

    signalSent(e, newMsg) {
        if (e) {
            console.log("signal error (" + e.name + "): " + e.message);
        } else {
            console.log("signal sent.");
            //debugger;

            this.editorMsg = '';
            if (!this._isOpenEmojiPicker) {
                this.messageInput.setFocus();
            }

            let index = this.getMsgIndexById(newMsg.messageId);
            if (index !== -1) {
                this.msgList[index].status = 'success';
            }
        }
    }

    getMsgIndexById(id: string) {
        return this.msgList.findIndex(e => e.messageId === id)
    }


    /**
     * @name pushNewMsg
     * @param msg
     */
    pushNewMsg(msg: ChatMessage) {
        // debugger;
        // Verify user relationships
        this.msgList.push(msg);

        this.scrollToBottom();
    }


    scrollToBottom() {
        setTimeout(() => {
            if (this.content.scrollToBottom) {
                this.content.scrollToBottom();
            }
        }, 400)
    }

    /*************************Video Chat Module Started****************************************************** */
    //for prompt alerts
    presentConfirm() {
        let alert = this.alerCtrl.create({
            title: 'Srinadh Calling',
            message: 'Do you want to accept the call?',
            buttons: [
                {
                    text: 'Reject',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                        this.session.signal(this.chatConfig("0", true), (e) => this.signalResponseSent(e));
                    }
                },
                {
                    text: 'Accept',
                    handler: () => {
                        console.log('Buy clicked');
                        this.session.signal(this.chatConfig("1", true), (e) => this.signalResponseSent(e));
                    }
                }
            ]
        });
        alert.present();
    }
    

    //Signla request send
    signalResponseSent(e) {
        console.log("video signal sent");
    }
    //To start signalling
    startVideoChat() {
        this.startDisable = true;
        this.stopDisable = false;
        this.session.signal(this.chatConfig("Call", true), (e) => { console.log("Sending Video Signal") });
    }

    publishVideo() {
        if (this.session.capabilities.publish == 1) {
            this.publisher = this.opentokV.initializePublisher('publisher');
            this.publisher.on("accessAllowed", (e) => { this.session.publish(this.publisher); console.log("Aceess allowed"); });
            this.publisher.on("accessDenied", (e) => { console.log("Aceess rejected"); });
            this.publisher.on("streamDestroyed", (e) => {
                if (e.reason === 'networkDisconnected') {
                    alert('Your publisher lost its connection. Please check your internet connection and try publishing again.' + e.reason);
                } else {
                    alert('Your publisher lost its connection. Please check.' + e.reason);
                }
            });
            this.publisher.on("streamCreated", (e) => {
                console.log("Publisher started streaming.");
            });
            console.log("video signal Publish");

        } else {
            console.log("You cannot publish an audio-video stream.");
        }

    }

    unPublishVideo() {
        this.session.unpublish(this.publisher);
        document.getElementById("publisher").innerHTML="";
        console.log("video signal Un Publish");
    }


    //Subscriber Event
    onStreamCreated(e){
        console.log(e);
        if(e.stream.connection.connectionId===this.connectionEvent.connection.connectionId){
            this.streamArray.push(e);
            let subscriberProperties = { insertMode: 'append', width: (document.documentElement.clientWidth / 3), height: 240 };
            setTimeout(() => {
              this.subscriber = this.session.subscribe(e.stream, e.stream.id, {
                insertMode: 'append',
                showControls: true,
              });
              this.subscriber.setAudioVolume(0);        
            }, 10)
        }        
    }

    onStreamDestroyed(e){
        let number;
        for (let i = 0; i < this.streamArray.length; i++) {
          if (this.streamArray[i].stream.id == e.stream.id) {
            number = i;
          }
        }
        this.streamArray.splice(number, 1);
    }

    subscribeVideo() {
        console.log("video signal Subscribe");
      
    }

    unSubscribeVideo() {
        console.log("video signal Unsubscribe");
        this.session.unsubscribe(this.streamArray);
        this.streamArray = [];
    }

    sendSignal() {

    }

    stopVideoChat() {
        this.startDisable = false;
        this.stopDisable = true;
        this.unPublishVideo();
        this.session.off('streamCreated');
        this.session.off('sessionConnected');
        this.session.unsubscribe(this.streamArray);
        //this.session.streamDestroyed();
        this.streamArray = [];
    }
}
