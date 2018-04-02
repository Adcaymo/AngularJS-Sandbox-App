import { Component, OnInit } from '@angular/core';

import { User } from './../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean;
  loaded: boolean;
  enableAdd: boolean;
  showUserForm: boolean;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main Street',
          city: 'Boston',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '20 School Street',
          city: 'Lynn',
          state: 'MA'
        },
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill Street',
          city: 'Miami',
          state: 'FL'
        },
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];

    this.loaded = true;
    this.showExtended = true;
    this.enableAdd = true;
    this.showUserForm = false;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }

  onSubmit(e) {
    console.log('Submit clicked');
    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
}
