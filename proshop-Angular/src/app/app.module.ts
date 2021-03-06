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
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './_interceptors/jwt.interceptor';
import {ErrorInterceptor} from './_interceptors/error.interceptor';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { ProHomepageComponent } from './pro-homepage/pro-homepage.component';
import { ProInfoRegisterComponent } from './pro-info-register/pro-info-register.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { JobItemComponent } from './job-item/job-item.component';
import { CreateProposalComponent } from './create-proposal/create-proposal.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';

import { ViewJobInfoComponent } from './view-job-info/view-job-info.component';
import { JobProposalListComponent } from './job-proposal-list/job-proposal-list.component';
import { ProposalItemComponent } from './proposal-item/proposal-item.component';

import { ProProfileComponent } from './pro-profile/pro-profile.component';
import { ProInfoDialogComponent } from './pro-info-dialog/pro-info-dialog.component';
import { ProProposalDialogComponent } from './pro-proposal-dialog/pro-proposal-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginInputComponent,
    RegisterInputComponent,
    UserProfileComponent,
    UserHomepageComponent,
    ProHomepageComponent,
    ProInfoRegisterComponent,
    CreateListingComponent,
    JobItemComponent,
    CreateProposalComponent,
    SearchResultItemComponent,

    ViewJobInfoComponent,
    JobProposalListComponent,
    ProposalItemComponent,

    ProProfileComponent,
    ProInfoDialogComponent,
    ProProposalDialogComponent

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
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
