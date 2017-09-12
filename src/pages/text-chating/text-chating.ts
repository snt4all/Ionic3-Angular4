import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TextChatingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text-chating',
  templateUrl: 'text-chating.html',
})
export class TextChatingPage {
  userList: { name: string; lastseen: string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userList = [
      { name: 'Yash', lastseen: '10:15PM' },
      { name: 'Yash2', lastseen: '01:15PM' },
      { name: 'Yash3', lastseen: '10:00PM' },
      { name: 'Yash3', lastseen: '11:15AM' },
      { name: 'Yash5', lastseen: '10:15AM' }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextChatingPage');
  }

}
