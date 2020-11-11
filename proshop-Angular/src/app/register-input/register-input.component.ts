import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-input',
  templateUrl: './register-input.component.html',
  styleUrls: ['./register-input.component.css']
})
export class RegisterInputComponent implements OnInit {

  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  register(){

  }

}
