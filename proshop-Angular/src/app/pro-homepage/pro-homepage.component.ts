import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../_service/auth.service';
import {NotificationService} from '../_service/notification.service';
import {User} from '../_model/user';
import {UserService} from '../_service/user.service';
import {proInfo} from '../_model/proInfo';


@Component({
  selector: 'app-pro-homepage',
  templateUrl: './pro-homepage.component.html',
  styleUrls: ['./pro-homepage.component.css']
})
export class ProHomepageComponent implements OnInit {

  opened: boolean;
  private currentUser: User;
  private proData: proInfo;
  constructor(private route: Router,
              private authService: AuthService,
              private userService: UserService,
              private notifService: NotificationService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
    this.userService.getProInfo(this.currentUser._id).subscribe( data => this.proData = data);
  }

  ngOnInit(): void {
    this.opened = false;
  }


}
