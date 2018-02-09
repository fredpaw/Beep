import { User } from './../../models/user/user';

const userList: User [] = [
  {
    firstName: 'Paul',
    lastName: 'Halliday',
    avatar: 'assets/imgs/avatar.png',
    email: 'paul@paul.com'
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'assets/imgs/avatar.png',
    email: 'john@doe.com'
  },
  {
    firstName: 'Sarah',
    lastName: 'Smith',
    avatar: 'assets/imgs/avatar.png',
    email: 'sarah@smith.com'
  },
  {
    firstName: 'Roger',
    lastName: 'Reynolds',
    avatar: 'assets/imgs/avatar.png',
    email: 'roger@reynolds.com'
  }
]

export const USER_LIST = userList;