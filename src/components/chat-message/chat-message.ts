import { Message } from './../../models/message/message';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the ChatMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-message',
  templateUrl: 'chat-message.html'
})
export class ChatMessageComponent {

 @Input() chatMessage: Message;
 @Input() chatIndex: number;

  constructor() {
    
  }

}
