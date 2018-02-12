import { Profile_LIST } from './../profiles/profiles.mock';
import { Message } from './../../models/message/message';

const profileList = Profile_LIST;
const messageList: Message[] = [];

profileList.forEach((user) => {
  messageList.push({user: user, date: new Date(), lastMessage: 'Hello'})
});

export const MESSAGE_LIST = messageList;