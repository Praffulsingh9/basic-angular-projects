import { Component, OnInit } from "@angular/core";
import { User } from '../../models/User';
@Component({
  selector: "app-user",
  //template: '<h2>Hello User</h2>',
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user: User
  //Methods
  constructor() {

  }

  ngOnInit() {
    this.user = {
      firstname: "Prafful",
      lastname: 'Singh',
      email:'prafful@gmail.com'
    }
  }


}

