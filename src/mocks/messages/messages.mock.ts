import { USER_LIST } from './../users/users.mock';
import { Message } from './../../models/message/message';

const userList = USER_LIST;
const messageList: Message[] = [];

userList.forEach((user) => {
  messageList.push({user: user, date: new Date(), lastMessage: 'Hello'})
});

export const MESSAGE_LIST = messageList;