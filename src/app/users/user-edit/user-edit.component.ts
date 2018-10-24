import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {ActivatedRoute } from '@angular/router';
import { User } from '../user.class';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user : User;

  save() : void {
    this.service.change(this.user).subscribe(jsonresp => {
      console.log(jsonresp);
      if(jsonresp.rc === 200){
        this.router.navigateByUrl('/users/list');
      }
    });
  }

   ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.service.get(id).subscribe(jsonresp => {
      console.log(jsonresp);
      this.user = jsonresp.data;
    })
  }

  constructor(private service: UserService, private route: ActivatedRoute, private router: Router) { }
}
