import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../_service/auth.service';
import {User} from '../_model/user';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateListingComponent } from '../create-listing/create-listing.component';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JobService} from '../_service/job.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {
  currentUser: User;
  opened: boolean;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              public dialog: MatDialog) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.opened = false;
    console.log(this.authService.currentUser);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateListingComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
