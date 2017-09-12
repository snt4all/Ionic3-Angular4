import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextChatingPage } from './text-chating';

@NgModule({
  declarations: [
    TextChatingPage,
  ],
  imports: [
    IonicPageModule.forChild(TextChatingPage),
  ],
})
export class TextChatingPageModule {}
