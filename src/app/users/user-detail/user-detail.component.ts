import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { JsonResp } from '../../json-resp.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user : User;

  constructor (private service: UserService, private route: ActivatedRoute) {

   }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.service.get(id).subscribe(jsonResp => {
      console.log(jsonResp);
      this.user = jsonResp.data;
    })
  }
}
