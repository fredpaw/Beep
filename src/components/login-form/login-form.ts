import { AuthProvider } from './../../providers/auth/auth';
import { LoginResponse } from './../../models/login/login';
import { Account } from './../../models/account/account';
import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(
    private navCtrl: NavController,
    private auth: AuthProvider) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login() {
    const result: LoginResponse = await this.auth.signInWithEmailAndPassword(this.account)
    this.loginStatus.emit(result);
  }

  navToRegister() {
    this.navCtrl.push('RegisterPage');
  }

}
