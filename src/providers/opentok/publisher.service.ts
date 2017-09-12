// i don't really think this needed a service, but somehow i ended up writing a service. 

import { Injectable } from '@angular/core';
declare const OT;
declare const document;
declare var cordova: any;
declare const window;


@Injectable()

export class PublisherService {

    public openTokSessionId:string   = '2_MX40NTk0NzMwMn5-MTUwMzkwMTcyMjQyOH52TFZWa3drZVJFM01GYzN0d3N4Nk5aUmd-fg';
    public tokenId:string            = 'T1==cGFydG5lcl9pZD00NTk0NzMwMiZzaWc9YzFkMWYwOWJjMjhhNGU3NjRjYTA0MGNhODNkMDdkYmE3NjZhOTg3ZTpzZXNzaW9uX2lkPTJfTVg0ME5UazBOek13TW41LU1UVXdNemt3TVRjeU1qUXlPSDUyVEZaV2EzZHJaVkpGTTAxR1l6TjBkM040Tms1YVVtZC1mZyZjcmVhdGVfdGltZT0xNTAzOTAxNzU1Jm5vbmNlPTAuODUzMDQyMTI1MzExMjMwNCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA2NDkzNzUyJmNvbm5lY3Rpb25fZGF0YT1OYW1lJTNBJTIwU3JpbmFkaCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
    public apiKey: string            = '45947302';
    public publisher:any;
    public publisherProperties = {width: 800, height:500, name: ''};
    public session:any;
    public publishStatus:number =    0; //0=not ready, 1=ready,2=publsihed,3=not published

    bootstrapPublisher(){
        this.session = OT.initSession(this.apiKey, this.openTokSessionId);
        this.session.connect(this.tokenId, (e) => {console.log('connection established'); });
        this.session.on('sessionConnected',(e) => this.onSessionConnect());
    }

    onSessionConnect() {
        //next two lines are very bad, need some improvement here. 
         if(document.getElementById('myPublisherDivd') == null) 
            document.getElementById('publisherHolder').innerHTML = '<div id="myPublisherDiv"></div>';
        this.publisher = OT.initPublisher('myPublisherDiv', this.publisherProperties, (e) => {this.publishStatus = 1});
        this.publisherInit();
    }
    publisherInit() {
        this.session.publish(this.publisher, (e) => this.sessionTryingToPublish(e));
    }
    sessionTryingToPublish(e) {
        this.publishStatus = 2;
    }
    stopPublishing() {
        this.publishStatus = 3;
        this.session.unpublish(this.publisher);
        this.onSessionConnect();
    }
    destroy() {
        if (this.publisher) this.stopPublishing();
        this.session.off('sessionConnected'); 
    }

}
