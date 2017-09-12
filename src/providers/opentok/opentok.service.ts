import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
declare var cordova: any;
declare const window;
declare const OT;

@Injectable()
export class OpentokService {

    public openTokSessionId:string   = '2_MX40NTk0NzMwMn5-MTUwMzkwMTcyMjQyOH52TFZWa3drZVJFM01GYzN0d3N4Nk5aUmd-fg';
    public tokenId:string            = 'T1==cGFydG5lcl9pZD00NTk0NzMwMiZzaWc9YzFkMWYwOWJjMjhhNGU3NjRjYTA0MGNhODNkMDdkYmE3NjZhOTg3ZTpzZXNzaW9uX2lkPTJfTVg0ME5UazBOek13TW41LU1UVXdNemt3TVRjeU1qUXlPSDUyVEZaV2EzZHJaVkpGTTAxR1l6TjBkM040Tms1YVVtZC1mZyZjcmVhdGVfdGltZT0xNTAzOTAxNzU1Jm5vbmNlPTAuODUzMDQyMTI1MzExMjMwNCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA2NDkzNzUyJmNvbm5lY3Rpb25fZGF0YT1OYW1lJTNBJTIwU3JpbmFkaCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
    public apiKey: string            = '45947302';
    public videoSubscriber:any;
    public session:any;
    
    constructor() {}
    
    initSession() {
        this.session = OT.initSession(this.apiKey, this.openTokSessionId);
        this.session.connect(this.tokenId, (e) => this.tryingToConnect(e));
        this.session.on('sessionConnected',(e) => this.onSessionConnect(e));
    }
    
    onSessionConnect(e) {
        console.log('session connected')
        
    }
    tryingToConnect(e) {
        this.session.on('streamCreated',(e) => this.streamCreated(e));
        this.session.on('streamDestroyed',(e) => this.streamDestroyed(e));
    }
    streamCreated(stream) {
        let subscriberProperties = {insertMode: 'append'};
        if(document.getElementById('layout') == null) 
            document.getElementById('allStreams').innerHTML = '<div id="layout"></div>';
        this.videoSubscriber = this.session.subscribe(stream.stream, 'layout', subscriberProperties);
    }
    streamDestroyed(stream) {

    }
    destroy() {
        this.session.unsubscribe(this.videoSubscriber);
        this.session.off('streamCreated');
        this.session.off('sessionConnected'); 
    }

}
