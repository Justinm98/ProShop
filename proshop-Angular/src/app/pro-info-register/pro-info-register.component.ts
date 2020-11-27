import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../_service/user.service';
import {AuthService} from '../_service/auth.service';
import {NotificationService} from '../_service/notification.service';
import {User} from '../_model/user';

@Component({
  selector: 'app-pro-info-register',
  templateUrl: './pro-info-register.component.html',
  styleUrls: ['./pro-info-register.component.css']
})
export class ProInfoRegisterComponent implements OnInit {

  InfoRegisterForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  currentUser: User;
  description: '';
  skill1: boolean;
  skill2: boolean;
  skill3: boolean;
  skill4: boolean;
  skill5: boolean;
  skill6: boolean;
  otherSkill = '';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private authService: AuthService,
              private notifService: NotificationService) { }

  ngOnInit(): void {
    this.InfoRegisterForm = this.formBuilder.group({
      link1: [' '],
      link2: [' '],
      link3: [' '],
      description: [' '],
      skill1: [' '],
      skill2: [' '],
      skill3: [' '],
      skill4: [' '],
      skill5: [' '],
      skill6: [' '],

    });
  }

  submit(){

  }
}
