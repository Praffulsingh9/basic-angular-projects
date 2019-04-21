import { Injectable } from "@angular/core";
import { User } from "../models/User";
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of'
@Injectable()
export class UserService {
  users: User[];
  

  constructor() {
    this.users = [
      {
        firstname: "Prafful",
        lastname: "Singh",
        email: "prafful.singh017@gmail.com",
        isActive: true,
        hide: true,
        registered: new Date("07/02/2018 08:34:00")
      },
      {
        firstname: "Bhaveet",
        lastname: "Yadav",
        email: "bhaveet.seekin@gmail.com",
        isActive: false,
        hide: true,
        registered: new Date("09/05/2017 06:39:00")
      },
      {
        firstname: "Rishabh",
        lastname: "Garg",
        email: "grg.rshbh@gmail.com",
        isActive: true,
        hide: true,
        registered: new Date("11/08/2019 07:56:00")
      }
    ];
  }

  

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
