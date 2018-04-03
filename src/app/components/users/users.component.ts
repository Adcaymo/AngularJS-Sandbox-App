import { Component, OnInit, ViewChild } from '@angular/core';

import { UserService } from './../../services/user.service';

import { User } from './../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User;
  users: User[];
  showExtended: boolean;
  loaded: boolean;
  enableAdd: boolean;
  showUserForm: boolean;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    };
    this.userService.getData().subscribe(data => {
      console.log(data);
    });
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
    this.showExtended = true;
    this.showUserForm = false;
    this.enableAdd = false;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.registered = new Date();
      value.isActive = true;
      value.hide = true;
      this.userService.addUser(value);
      this.form.reset();
    }
  }
}
