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
  programming: boolean;
  webDev: boolean;
  graphicDesign: boolean;
  digitalMarketing: boolean;
  business: boolean;
  musicAudio: boolean;
  video: boolean;
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
      programming: [null],
      webDev: [null],
      graphicDesign: [null],
      digitalMarketing: [null],
      business: [null],
      musicAudio: [null],
      video: [null],
      otherSkill: [' '],

    });
  }

  submit(){
    console.log('link1: ' + this.InfoRegisterForm.value.link1);
    console.log('link2: ' + this.InfoRegisterForm.value.link2);
    console.log('link3: ' + this.InfoRegisterForm.value.link3);
    console.log('description: ' + this.InfoRegisterForm.value.description);
    console.log('programming: ' + this.InfoRegisterForm.value.programming);
    console.log('webDev: ' + this.InfoRegisterForm.value.webDev);
    console.log('graphicDesign: ' + this.InfoRegisterForm.value.graphicDesign);
    console.log('digitalMarketing: ' + this.InfoRegisterForm.value.digitalMarketing);
    console.log('business: ' + this.InfoRegisterForm.value.business);
    console.log('musicAudio: ' + this.InfoRegisterForm.value.musicAudio);
    console.log('video: ' + this.InfoRegisterForm.value.video);
    console.log('otherSkill: ' + this.InfoRegisterForm.value.otherSkill);
  }
}
