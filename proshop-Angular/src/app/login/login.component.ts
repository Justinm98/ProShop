import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
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

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

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
      usernameRegister: [this.usernameRegister, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      passwordRegister: [this.passwordRegister, [Validators.required, Validators.minLength(6)]]
    });
    console.log(this.isInputTypeLogin);
  }

  // tslint:disable-next-line:typedef
  submit(){
    this.submitted = true;

    if(!this.loginRegisterForm.valid){
      console.log('Something went wrong, the login/register form is not valid');
    }

    if (this.isInputTypeLogin){
      // the input type is login, get data from login-input child component
      console.log(this.loginRegisterForm.value.usernameLogin);
      console.log(this.loginRegisterForm.value.passwordLogin);
      this.router.navigate(['profile']);
    } else {
      console.log(this.loginRegisterForm.value.firstName);
      console.log(this.loginRegisterForm.value.lastName);
      console.log(this.loginRegisterForm.value.email);
      console.log(this.loginRegisterForm.value.lastName);
      console.log(this.loginRegisterForm.value.usernameRegister);
      console.log(this.loginRegisterForm.value.passwordRegister);
      this.router.navigate(['profile']);
    }
  }
}
