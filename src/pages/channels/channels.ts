import { Observable } from 'rxjs/Observable';
import { Channel } from './../../models/channel/channel';
import { ChatProvider } from './../../providers/chat/chat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelList$: Observable<Channel[]>;

  constructor(
    private chat: ChatProvider,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewWillLoad() {
    //get channels
    this.getChannels();
  }

  getChannels() {
    this.channelList$ = this.chat.getChannelListRef().snapshotChanges()
      .map(results => {return results.map( result => {return {
        name: result.payload.val().name,
        $key: result.key
        }})
      });
  }

  addChannelDialog() {
    this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.chat.addChannel(data.channelName);
          }
        }
      ]
    }).present();
  }

  selectChannel(channel: Channel) {
    this.navCtrl.push('ChannelChatPage', {channel});
  }
}
