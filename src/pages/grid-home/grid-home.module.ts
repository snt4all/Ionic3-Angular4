import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GridHomePage } from './grid-home';

@NgModule({
  declarations: [
    GridHomePage,
  ],
  imports: [
    IonicPageModule.forChild(GridHomePage),
  ],
})
export class GridHomePageModule {}
