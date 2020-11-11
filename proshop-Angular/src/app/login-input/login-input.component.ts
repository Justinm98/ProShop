import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent implements OnInit {

  username: string;
  password: string;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {

  }

  gatherData(){

  }
}
