import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  user : User = new User;

  remove() : void {
    this.service.remove(this.user).subscribe(jsonResp => {
      console.log(jsonResp);
      this.router.navigateByUrl('/users/list');
    });
  }

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.service.get(id).subscribe(jsonresp => {
      console.log(jsonresp);
      this.user = jsonresp.data;
    })
  }

}
