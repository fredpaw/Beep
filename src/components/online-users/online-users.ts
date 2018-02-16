import { Observable } from 'rxjs/Observable';
import { Profile } from './../../models/profile/profile';
import { DataProvider } from './../../providers/data/data';
import { Component, OnInit } from '@angular/core';

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'online-users',
  templateUrl: 'online-users.html'
})
export class OnlineUsersComponent implements OnInit {

  userList$;

  constructor(private data: DataProvider) {

  }

  setUserOnline() {
    this.data.getAuthenticateduserProfile().subscribe((profile: Profile) => {
      this.data.setUserOnline(profile);
    })
    //Call to a service that sets the user online within Firebase
  }

  getOnlineUser() {
    this.userList$ = this.data.getOnlineUser().valueChanges();
  }

  ngOnInit() {
    this.setUserOnline();
    this.getOnlineUser();
  }

}
