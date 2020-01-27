import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/service/shared.service';
import { SharedUserService } from 'src/app/shared/helpers/user/service/user.service';
import { UserRole } from 'src/app/shared/helpers/user/model/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  Role = UserRole;
  constructor(public sharedService: SharedService, public sharedUserService: SharedUserService) {}
}
