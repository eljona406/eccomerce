import { Component, OnInit } from '@angular/core';
import { SharedUserService } from '../../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public sharedUserService: SharedUserService) { }

  ngOnInit() {
  }

  logout() {
    this.sharedUserService.logout();
  }
}
