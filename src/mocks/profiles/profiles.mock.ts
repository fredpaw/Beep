import { Profile } from './../../models/profile/profile';

const profileList: Profile [] = [
  {
    firstName: 'Paul',
    lastName: 'Halliday',
    avatar: 'assets/imgs/avatar.png',
    email: 'paul@paul.com',
    dateOfBirth: new Date()
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'assets/imgs/avatar.png',
    email: 'john@doe.com',
    dateOfBirth: new Date()
  },
  {
    firstName: 'Sarah',
    lastName: 'Smith',
    avatar: 'assets/imgs/avatar.png',
    email: 'sarah@smith.com',
    dateOfBirth: new Date()
  },
  {
    firstName: 'Roger',
    lastName: 'Reynolds',
    avatar: 'assets/imgs/avatar.png',
    email: 'roger@reynolds.com',
    dateOfBirth: new Date()
  }
]

export const Profile_LIST = profileList;