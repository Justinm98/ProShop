import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './material-module';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginInputComponent } from './login-input/login-input.component';
import { RegisterInputComponent } from './register-input/register-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { ProHomepageComponent } from './pro-homepage/pro-homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginInputComponent,
    RegisterInputComponent,
    UserProfileComponent,
    UserHomepageComponent,
    ProHomepageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
