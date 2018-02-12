import { User } from 'firebase/app';
import { DataProvider } from './../../providers/data/data';
import { LoginResponse } from './../../models/login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    private dataProvider: DataProvider,
    private toast: ToastController,
    private navCtrl: NavController,
    private navParams: NavParams) {
  }

  login(event: LoginResponse) {
    if(!event.error) {
      this.toast.create({
        message: `Welcome, ${event.result.email}`,
        duration: 3000
      }).present();

      this.dataProvider.getProfile(<User>event.result).subscribe(profile => {
        profile ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage');
      })
    } else {
      this.toast.create({
        message: event.error.message,
        duration:3000
      }).present();
    }
  }

}
