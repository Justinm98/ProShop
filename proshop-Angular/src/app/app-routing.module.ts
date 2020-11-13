import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserHomepageComponent} from './user-homepage/user-homepage.component';
import {ProHomepageComponent} from './pro-homepage/pro-homepage.component';

const routes: Routes = [{path: '' , component: LoginComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'client/homepage', component: UserHomepageComponent},
  {path: 'pro/homepage', component: ProHomepageComponent},
  { path: '**', redirectTo: '' }];

//HW5 routes
// {path: '', component: HomeComponent, canActivate: [AuthGuard]}, {path: 'login', component: LoginComponent},
// { path: 'register', component: RegisterComponent },
// {
//   path: 'admin',
//     component: AdminComponent,
//   canActivate: [AuthGuard],
//   // The prof route also sets the roles data property to [Role.professor] so only admin users can access it.
//   data: { roles: [Role.professor] }
// },
//
// {
//   path: 'createAttendance',
//     component: AttendancecreatorComponent,
//   canActivate: [AuthGuard],
//   // The prof route also sets the roles data property to [Role.Admin] so only admin users can access it.
//   data: { roles: [Role.professor] }
// },
// {
//   path: 'studentAttendances',
//     component: StudentattendancesComponent,
//   canActivate: [AuthGuard],
//   // The prof route also sets the roles data property to [Role.Admin] so only admin users can access it.
//   data: { roles: [Role.student, Role.professor] }
// },
// {
//   path: 'classAttendances',
//     component: ClassattendancesComponent,
//   canActivate: [AuthGuard],
//   // The prof route also sets the roles data property to [Role.Admin] so only admin users can access it.
//   data: { roles: [Role.professor] }
// },
// {
//   path: 'coursecreator',
//     component: CoursecreatorComponent,
//   canActivate: [AuthGuard],
//   // The prof route also sets the roles data property to [Role.Admin] so only admin users can access it.
//   data: { roles: [Role.professor] }
// },
// {
//   path: 'attendancetracker',
//     component: AttendancetrackerComponent,
//   canActivate: [AuthGuard],
//   // The prof route also sets the roles data property to [Role.Admin] so only admin users can access it.
//   data: { roles: [Role.student] }
// },



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
