import { Profile } from './../../models/profile/profile';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { User } from 'firebase/app';
import 'rxjs/add/operator/take';


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  profileObject: AngularFireObject<Profile>;

  constructor(private db: AngularFireDatabase) {
    
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