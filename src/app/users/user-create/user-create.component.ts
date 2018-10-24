import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { JsonResp } from '../../json-resp.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user : User = new User();

  save() : void {
    this.service.create(this.user).subscribe(jsonResp => {
      console.log(jsonResp);
      this.router.navigateByUrl('/users/list');
    });
  }

  constructor(private service : UserService, private router: Router) {
  }

  ngOnInit() {
  }

}
