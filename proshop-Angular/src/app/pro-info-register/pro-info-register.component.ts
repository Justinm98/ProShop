import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../_service/user.service';
import {AuthService} from '../_service/auth.service';
import {NotificationService} from '../_service/notification.service';
import {User} from '../_model/user';
import {first} from 'rxjs/operators';
import {proInfo} from '../_model/proInfo';

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
  private req: proInfo;
  private skillsArray: string[] = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private authService: AuthService,
              private notifService: NotificationService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

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
  // tslint:disable-next-line:typedef
  get f() { return this.InfoRegisterForm.controls; }


  // tslint:disable-next-line:typedef
  createSkillsArray(){

    if (this.InfoRegisterForm.value.programming != null && this.InfoRegisterForm.value.programming !== false){
      this.skillsArray.push('Programming');
    }
    if (this.InfoRegisterForm.value.webDev != null && this.InfoRegisterForm.value.webDev !== false){
      this.skillsArray.push('Web Development');
    }
    if (this.InfoRegisterForm.value.graphicDesign != null && this.InfoRegisterForm.value.graphicDesign !== false){
      this.skillsArray.push('Graphic Design');
    }
    if (this.InfoRegisterForm.value.digitalMarketing != null && this.InfoRegisterForm.value.digitalMarketing !== false){
      this.skillsArray.push('Digital Marketing');
    }
    if (this.InfoRegisterForm.value.business != null && this.InfoRegisterForm.value.business !== false){
      this.skillsArray.push('Business');
    }
    if (this.InfoRegisterForm.value.musicAudio != null && this.InfoRegisterForm.value.musicAudio !== false){
      this.skillsArray.push('Music / Audio');
    }
    if (this.InfoRegisterForm.value.video != null && this.InfoRegisterForm.value.video !== false) {
      this.skillsArray.push('Video');
    }
    return this.skillsArray;
  }


  // tslint:disable-next-line:typedef
   formRequest(){
    this.req = {
      links: [this.InfoRegisterForm.value.link1,
                      this.InfoRegisterForm.value.link2,
                      this.InfoRegisterForm.value.link3],
      personalDes: this.InfoRegisterForm.value.description,
      skills: this.createSkillsArray(),
      otherSkills: this.InfoRegisterForm.value.otherSkill,
      proUser: this.currentUser._id,
      createdDate: new Date()

    };

  }

  // tslint:disable-next-line:typedef
  submit(){

    this.submitted = true;
    if (!this.InfoRegisterForm.valid ){
      console.log('Something went wrong, the login/register form is not valid');
      return;
    }
    this.formRequest();
    console.log('CURRENT USER: ' + this.currentUser);
    this.userService.registerProInfo(this.req).pipe(first()).subscribe(
      data => {
        console.log('Success:');
        this.router.navigate(['pro/homepage']);
      },
      error => {

        console.log('Error:', error);
        this.loading = false;
      });
  }
}
