import { LoginResponse } from './../../models/login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    private toast: ToastController,
    private navCtrl: NavController,
    private navParams: NavParams) {
  }

  register(event: LoginResponse) {
    console.log(event);
    if(!event.error) {
      this.toast.create({
        message: `Account create: ${event.result.email}`,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('EditProfilePage');
    } else {
      this.toast.create({
        message: `Account create: ${event.error.message}`,
        duration: 3000
      }).present();
    }
  }
}
