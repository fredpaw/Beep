import { Profile } from './../../models/profile/profile';
import { AuthProvider } from './../../providers/auth/auth';
import { DataProvider } from './../../providers/data/data';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit {

  userProfile: Profile;
  loader: Loading;
  @Output() existingProfile: EventEmitter<Profile>;

  constructor(
    private loading: LoadingController,
    private data: DataProvider,
    private auth: AuthProvider) {
    this.loader = this.loading.create({
      content: 'Loading profile...'
    });
    this.existingProfile = new EventEmitter<Profile>();
  }

  ngOnInit(): void {
    this.loader.present();

    this.data.getAuthenticateduserProfile().subscribe((profile: Profile) => {
      this.userProfile = profile;
      this.existingProfile.emit(this.userProfile);
      this.loader.dismiss();
    });    
  }
}
