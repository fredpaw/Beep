import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {

  constructor(private db: AngularFireDatabase) {
    
  }

  addChannel(channelName: string) {
    this.db.list('/channel-names').push({name: channelName});
  }

}
