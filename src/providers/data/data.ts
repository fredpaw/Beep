import { AuthProvider } from './../auth/auth';
import { Profile } from './../../models/profile/profile';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { User } from 'firebase/app';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  profileObject: AngularFireObject<Profile>;
  profileList: AngularFireList<Profile>;

  constructor(private auth: AuthProvider,private db: AngularFireDatabase) {
    
  }

  searchUser(firstName: string) {
    this.profileList = this.db.list('/profile', ref => ref.orderByChild('firstName').equalTo(firstName))

    return this.profileList.valueChanges();
  }

  getAuthenticateduserProfile() {
    return this.auth.getAuthenticatedUser()
      .map(user => user.uid)
      .mergeMap(authId => this.db.object(`profile/${authId}`).valueChanges())
      .take(1)
  }

  getProfile(user: User) {
    this.profileObject = this.db.object(`/profile/${user.uid}`);
    return this.profileObject.valueChanges().take(1);
  }

  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.db.object(`/profile/${user.uid}`);
    try {
      await this.profileObject.set(profile);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

}
