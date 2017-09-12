import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Events} from 'ionic-angular';

import 'rxjs/add/operator/toPromise';

export class ChatMessage {
    messageId: string;
    userId: string;
    userName: string;
    userImgUrl: string;
    toUserId: string;
    time: number | string;
    data: string;
    status: string;
    left:boolean;
}

export class UserInfo {
    userId: string;
    userName: string;
    userImgUrl: string;
}

@Injectable()
export class ChatService {

    constructor(public http: Http,
                public events: Events) {
    }

    mockNewMsg(msg) {
        const mockMsg: ChatMessage = {
            messageId: Date.now().toString(),
            userId: '',
            userName: 'Hancock',
            userImgUrl: './assets/to-user.jpg',
            toUserId: '',
            time: Date.now(),
            data: msg.message,
            status: 'success',
            left:false
        };
        //debugger;

        setTimeout(() => {
            this.events.publish('chat:received', mockMsg, Date.now())
        }, Math.random() * 1800)
    }

    

    getMsgList(): Promise<ChatMessage[]> {
        debugger;
        const msgListUrl = './assets/mock/msg-list.json';
        return this.http.get(msgListUrl)
            .toPromise()
            .then(
        
                response => response.json().array as ChatMessage[])
            .catch(err => Promise.reject(err || 'err'));
    }
    

    sendMsg(msg: ChatMessage) {
       // debugger;
        return new Promise(resolve => setTimeout(() => resolve(msg), Math.random() * 1000))
            .then(() => this.mockNewMsg(msg));
    }

    getUserInfo(): Promise<UserInfo> {
        const userInfo: UserInfo = {
            userId: '',
            userName: 'Luff',
            userImgUrl: './assets/user.jpg'
        };
       // debugger;
        return new Promise(resolve => resolve(userInfo));
    }

}
