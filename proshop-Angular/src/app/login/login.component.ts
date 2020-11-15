import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from '../_service/user.service';
import {AuthService} from '../_service/auth.service';
import { NotificationService } from '../_service/notification.service';
import { first } from 'rxjs/operators';
import {User} from '../_model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isInputTypeLogin = true;
  loginRegisterForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  usernameLogin: string;
  usernameRegister: string;
  passwordLogin: string;
  email: string;
  passwordRegister: string;
  firstName: string;
  lastName: string;
  registerClient: boolean;
  registerPro: boolean;
  currentUser: User;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private authService: AuthService,
              private notifService: NotificationService) {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
    });
  }

  ngOnInit(): void {
    // start the login page with a login formBuilder
    this.loginRegisterForm = this.formBuilder.group({
      usernameLogin: [this.usernameLogin],
      passwordLogin: [this.passwordLogin]
    });
  }

  // tslint:disable-next-line:typedef
  inputTypeIsLogin() {
    this.isInputTypeLogin = true;
    this.loginRegisterForm = this.formBuilder.group({
      usernameLogin: [this.usernameLogin],
      passwordLogin: [this.passwordLogin]
    });
    console.log(this.isInputTypeLogin);
  }

  // tslint:disable-next-line:typedef
  inputTypeIsRegister(){
    this.isInputTypeLogin = false;
    this.loginRegisterForm = this.formBuilder.group({
      firstName: [this.firstName, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: [this.lastName, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: [this.email, [Validators.required, Validators.email]],
      username: [this.usernameRegister, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      password: [this.passwordRegister, [Validators.required, Validators.minLength(6)]],
      registerClient: [null],
      registerPro: [null],
      role: ['']
    });
    console.log(this.isInputTypeLogin);
  }
  get f() { return this.loginRegisterForm.controls; }
  // tslint:disable-next-line:typedef
  submit(){
    this.submitted = true;

    if (!this.loginRegisterForm.valid ){
      console.log('Something went wrong, the login/register form is not valid');

    }

    if (this.isInputTypeLogin){
      // the input type is login, get data from login-input child component
      console.log(this.loginRegisterForm.value.usernameLogin);
      console.log(this.loginRegisterForm.value.passwordLogin);

      this.authService.login(this.f.usernameLogin.value, this.f.passwordLogin.value)
        .pipe(first())
        .subscribe(
          data => {
            if (data.role === 'Client') {
              this.router.navigate(['client/homepage']);
            }
            else if (data.role === 'Professional') {
              this.router.navigate(['pro/homepage']);
            }
          },
          error => {
            this.notifService.showNotif(error, 'error');
            console.log('Error:', error);
            this.loading = false;
          });
    } else {
      if ((this.loginRegisterForm.value.registerClient === null && this.loginRegisterForm.value.registerPro === null)
        || (this.loginRegisterForm.value.registerClient !== null && this.loginRegisterForm.value.registerPro !== null)){
        console.log('You may only select one role');
      }

      if (this.loginRegisterForm.value.registerClient && !this.loginRegisterForm.value.registerPro){
        console.log("Registering a Client");
        this.loginRegisterForm.value.role = 'Client';
      } else if (!this.loginRegisterForm.value.registerClient && this.loginRegisterForm.value.registerPro){
        console.log("Registering a Pro");
        this.loginRegisterForm.value.role = 'Professional';
      } else {
        console.log("Not a valid option");
        return;
      }

      console.log(this.loginRegisterForm.value.firstName);
      console.log(this.loginRegisterForm.value.lastName);
      console.log(this.loginRegisterForm.value.email);
      console.log(this.loginRegisterForm.value.lastName);
      console.log(this.loginRegisterForm.value.username);
      console.log(this.loginRegisterForm.value.password);

      this.userService.register(this.loginRegisterForm.value)
        .pipe(first())
        .subscribe(
          data => {
            console.log('Success:', data);
            this.inputTypeIsLogin();
          },
          error => {

            console.log('Error:', error);
            this.loading = false;
          });
    }
  }
}
