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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorInterceptor} from './_interceptors/error.interceptor';
import {JwtInterceptor} from './_interceptors/jwt.interceptor';


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
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
