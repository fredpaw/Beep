import { ChannelMessage } from './../../models/channel/channel-message';
import { Observable } from 'rxjs/Observable';
import { ChatProvider } from './../../providers/chat/chat';
import { Channel } from './../../models/channel/channel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChannelChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel: Channel;
  channelMessages$: Observable<ChannelMessage[]>;

  constructor(
    private chat: ChatProvider,
    private navCtrl: NavController,
    private navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get('channel');
    this.channelMessages$ = this.chat.getChannelChatRef(this.channel.$key).valueChanges();
  }

  sendMessage(content: string) {
    let channelMessage: ChannelMessage = {content};

    this.chat.sendChannelChatMessage(this.channel.$key, channelMessage);
  }
}
