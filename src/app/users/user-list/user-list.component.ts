import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  sortBy = 'LastName';
  searchCriteria = '';

  constructor(private service : UserService) {

   }

  ngOnInit() {
    this.service.list().subscribe(jsonresp => {
      console.log(jsonresp);
      this.users = jsonresp.data;
    });
  }

}
