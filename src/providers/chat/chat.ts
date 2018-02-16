import { ChannelMessage } from './../../models/channel/channel-message';
import { Channel } from './../../models/channel/channel';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
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

  getChannelListRef(): AngularFireList<Channel> {
    return this.db.list('/channel-names');
  }

  getChannelChatRef(channelKey: string): AngularFireList<ChannelMessage> {
    return this.db.list(`channels/${channelKey}`);
  }

  async sendChannelChatMessage(channelKey: string, message: ChannelMessage) {
    await this.db.list(`channels/${channelKey}`).push(message);
  }
}
