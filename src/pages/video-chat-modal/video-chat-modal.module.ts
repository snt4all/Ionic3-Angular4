import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoChatModalPage } from './video-chat-modal';

@NgModule({
  declarations: [
    VideoChatModalPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoChatModalPage),
  ],
})
export class VideoChatModalPageModule {}
