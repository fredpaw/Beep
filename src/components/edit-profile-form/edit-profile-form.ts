import { User } from 'firebase/app';
import { AuthProvider } from './../../providers/auth/auth';
import { DataProvider } from './../../providers/data/data';
import { Profile } from './../../models/profile/profile';
import { Component, OnDestroy, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  @Input() profile: Profile;

  @Output() saveProfileResult: EventEmitter<Boolean>;

  constructor(private dataProvider: DataProvider, private authProvider: AuthProvider) {
    this.authenticatedUser$ = this.authProvider.getAuthenticatedUser().subscribe((user: User) => this.authenticatedUser = user);
    this.saveProfileResult = new EventEmitter<Boolean>();
  }

  async saveProfile() {
    if(this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      const result = await this.dataProvider.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
    }
  }

  ngOnInit(): void {
    if(!this.profile) this.profile = {} as Profile;
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }
}
