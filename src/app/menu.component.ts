import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'menu.html'
})
export class MenuComponent {
  @ViewChild('content') nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor() {
    this.pages = [
      { title: 'Page One', component: LoginPage },
      { title: 'Page two', component: HomePage },
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
