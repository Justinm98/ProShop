import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clientForms: FormGroup[];
  professionalForms: FormGroup[];
  jobForms: FormGroup[];

  constructor(private http: HttpClient,
              private formBuilder: FormBuilder) {}

  populateUsers(): void {


    this.clientForms = [
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client1'],
        lastName: ['client1'],
        email: ['client1@gmail.com'],
        username: ['client1'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client2'],
        lastName: ['client2'],
        email: ['client2@gmail.com'],
        username: ['client2'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client3'],
        lastName: ['client3'],
        email: ['client3@gmail.com'],
        username: ['client3'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client4'],
        lastName: ['client4'],
        email: ['client1@gmail.com'],
        username: ['client4'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client5'],
        lastName: ['client5'],
        email: ['client5@gmail.com'],
        username: ['client5'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client6'],
        lastName: ['client6'],
        email: ['client6@gmail.com'],
        username: ['client6'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client7'],
        lastName: ['client7'],
        email: ['client7@gmail.com'],
        username: ['client7'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client8'],
        lastName: ['client8'],
        email: ['client8@gmail.com'],
        username: ['client8'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client9'],
        lastName: ['client9'],
        email: ['client9@gmail.com'],
        username: ['client9'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client10'],
        lastName: ['client10'],
        email: ['client10@gmail.com'],
        username: ['client10'],
        password: ['123']
      })
    ];

    this.professionalForms = [
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional1'],
        lastName: ['professional1'],
        email: ['professional1@gmail.com'],
        username: ['professional'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional2'],
        lastName: ['professional2'],
        email: ['professional2@gmail.com'],
        username: ['professional2'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional3'],
        lastName: ['professional3'],
        email: ['professional3@gmail.com'],
        username: ['professional3'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional4'],
        lastName: ['professional4'],
        email: ['professional4@gmail.com'],
        username: ['professional4'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional5'],
        lastName: ['professional5'],
        email: ['professional5@gmail.com'],
        username: ['professional5'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional6'],
        lastName: ['professional6'],
        email: ['professional6@gmail.com'],
        username: ['professional'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional7'],
        lastName: ['professional7'],
        email: ['professional7@gmail.com'],
        username: ['professional7'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional8'],
        lastName: ['professional8'],
        email: ['professional8@gmail.com'],
        username: ['professional8'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional9'],
        lastName: ['professional9'],
        email: ['professional9@gmail.com'],
        username: ['professional9'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional10'],
        lastName: ['professional10'],
        email: ['professional10@gmail.com'],
        username: ['professional10'],
        password: ['123']
      })
    ];

    this.jobForms = [
      this.formBuilder.group({
        title: ['Job1'],
        budget: ['$1'],
        description: ['This is job1'],
        completionDate: [Date.now()],
        skillCategory: ['Programming'],
        firstName: ['Bob'],
        lastName: ['Billy']
      }),
      this.formBuilder.group({
        title: ['Job2'],
        budget: ['$2'],
        description: ['This is job2'],
        completionDate: [Date.now()],
        skillCategory: ['Programming'],
        firstName: ['Bob'],
        lastName: ['Billy']
      }),
      this.formBuilder.group({
        title: ['Job3'],
        budget: ['$3'],
        description: ['This is job3'],
        completionDate: [Date.now()],
        skillCategory: ['Web Development'],
        firstName: ['Bob'],
        lastName: ['Billy']
      }),
      this.formBuilder.group({
        title: ['Job4'],
        budget: ['$4'],
        description: ['This is job4'],
        completionDate: [Date.now()],
        skillCategory: ['Web Development'],
        firstName: ['Bob'],
        lastName: ['Billy']
      }),
      this.formBuilder.group({
        title: ['Job5'],
        budget: ['$5'],
        description: ['This is job5'],
        completionDate: [Date.now()],
        skillCategory: ['Graphic Design'],
        firstName: ['Bob'],
        lastName: ['Billy']
      }),
      this.formBuilder.group({
        title: ['Job6'],
        budget: ['$6'],
        description: ['This is job6'],
        completionDate: [Date.now()],
        skillCategory: ['Graphic'],
        firstName: ['Bob'],
        lastName: ['Billy']
      }),
      this.formBuilder.group({
        title: ['Job7'],
        budget: ['$7'],
        description: ['This is job7'],
        completionDate: [Date.now()],
        skillCategory: ['Digital Marketing'],
        firstName: ['Bob'],
        lastName: ['Billy']
      }),
      this.formBuilder.group({
        title: ['Job8'],
        budget: ['$8'],
        description: ['This is job8'],
        completionDate: [Date.now()],
        skillCategory: ['Business'],
        firstName: ['Bob'],
        lastName: ['Billy']
      }),
      this.formBuilder.group({
        title: ['Job9'],
        budget: ['$9'],
        description: ['This is job9'],
        completionDate: [Date.now()],
        skillCategory: ['Music / Audio'],
        firstName: ['Bob'],
        lastName: ['Billy']
      }),
      this.formBuilder.group({
        title: ['Job10'],
        budget: ['$10'],
        description: ['This is job10'],
        completionDate: [Date.now()],
        skillCategory: ['Video'],
        firstName: ['Bob'],
        lastName: ['Billy']
      })
    ];

    for( let i = 0; i < this.clientForms.length; i++) {
      this.http.post(`http://localhost:4000/user/register`, this.clientForms[i].value)
        .pipe(first())
        .subscribe(
          data => {
            console.log('Success:', data);
          },
          error => {
            console.log('Error:', error);
          });
    }

    for( let i = 0; i < this.professionalForms.length; i++) {
      this.http.post(`http://localhost:4000/user/register`, this.professionalForms[i].value)
        .pipe(first())
        .subscribe(
          data => {
            console.log('Success:', data);
          },
          error => {
            console.log('Error:', error);
          });
    }
    console.log('All users have been populated');

    for( let i = 0; i < this.professionalForms.length; i++) {
      this.http.post(`http://localhost:4000/job/createjob`, this.jobForms[i].value)
        .pipe(first())
        .subscribe(
          data => {
            console.log('Success:', data);
          },
          error => {
            console.log('Error:', error);
          });
    }
  }

  populateClients() {


    this.clientForms = [
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client1'],
        lastName: ['client1'],
        email: ['client1@gmail.com'],
        username: ['client1'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client2'],
        lastName: ['client2'],
        email: ['client2@gmail.com'],
        username: ['client2'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client3'],
        lastName: ['client3'],
        email: ['client3@gmail.com'],
        username: ['client3'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client4'],
        lastName: ['client4'],
        email: ['client1@gmail.com'],
        username: ['client4'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client5'],
        lastName: ['client5'],
        email: ['client5@gmail.com'],
        username: ['client5'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client6'],
        lastName: ['client6'],
        email: ['client6@gmail.com'],
        username: ['client6'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client7'],
        lastName: ['client7'],
        email: ['client7@gmail.com'],
        username: ['client7'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client8'],
        lastName: ['client8'],
        email: ['client8@gmail.com'],
        username: ['client8'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client9'],
        lastName: ['client9'],
        email: ['client9@gmail.com'],
        username: ['client9'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Client'],
        firstName: ['client10'],
        lastName: ['client10'],
        email: ['client10@gmail.com'],
        username: ['client10'],
        password: ['123']
      })
    ];

    for( let i = 0; i < this.clientForms.length; i++) {
      this.http.post(`http://localhost:4000/user/register`, this.clientForms[i].value)
        .pipe(first())
        .subscribe(
          data => {
            console.log('Success:', data);
          },
          error => {
            console.log('Error:', error);
          });
    }
    console.log('Clients have been populated');
  }

  populateProfessionals() {
    this.professionalForms = [
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional1'],
        lastName: ['professional1'],
        email: ['professional1@gmail.com'],
        username: ['professional'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional2'],
        lastName: ['professional2'],
        email: ['professional2@gmail.com'],
        username: ['professional2'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional3'],
        lastName: ['professional3'],
        email: ['professional3@gmail.com'],
        username: ['professional3'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional4'],
        lastName: ['professional4'],
        email: ['professional4@gmail.com'],
        username: ['professional4'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional5'],
        lastName: ['professional5'],
        email: ['professional5@gmail.com'],
        username: ['professional5'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional6'],
        lastName: ['professional6'],
        email: ['professional6@gmail.com'],
        username: ['professional'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional7'],
        lastName: ['professional7'],
        email: ['professional7@gmail.com'],
        username: ['professional7'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional8'],
        lastName: ['professional8'],
        email: ['professional8@gmail.com'],
        username: ['professional8'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional9'],
        lastName: ['professional9'],
        email: ['professional9@gmail.com'],
        username: ['professional9'],
        password: ['123']
      }),
      this.formBuilder.group({
        role: ['Professional'],
        firstName: ['professional10'],
        lastName: ['professional10'],
        email: ['professional10@gmail.com'],
        username: ['professional10'],
        password: ['123']
      })
    ];

    for( let i = 0; i < this.professionalForms.length; i++) {
      this.http.post(`http://localhost:4000/user/register`, this.professionalForms[i].value)
        .pipe(first())
        .subscribe(
          data => {
            console.log('Success:', data);
          },
          error => {
            console.log('Error:', error);
          });
    }

    console.log('Professionals have been populated');
  }

  populateJobs() {

  }

  populateProposals() {

  }
}




