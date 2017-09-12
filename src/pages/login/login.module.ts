// import { NgModule } from '@angular/core';
// import { IonicPageModule } from 'ionic-angular';
// import { LoginPage } from './login';

// @NgModule({
//   declarations: [
//     LoginPage,
//   ],
//   imports: [
//     IonicPageModule.forChild(LoginPage),
//   ],
// })
// export class LoginPageModule {}
import { NgModule } from '@angular/core';
import { LoginPage } from "./login";
import { IonicModule ,IonicPageModule} from 'ionic-angular';


@NgModule({
  imports: [IonicModule,IonicPageModule.forChild(LoginPage)],
  declarations: [LoginPage],
  entryComponents: [LoginPage],
  
})
export class LoginModule {}