
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Job } from '../_model/job';




@Injectable({ providedIn: 'root' })
export class JobService {
  constructor(private http: HttpClient) { }

  getAll() {
    console.log('getAll()');
    return this.http.get<Job[]>(`http://localhost:4000/job/getjobs`);
  }



  //TODO: notice this new function.
  getProposalsForJob(courseID: string) {
    return this.http.get<any>(`http://localhost:4000/job/getproposals${courseID}`);
  }


  delete(id: string) {
    return this.http.delete(`http://localhost:4000/job/${id}`);

  }

  //TODO: make a post request that will send the course object to the back end.
  createJob(job: Job) {
    return this.http.post(`http://localhost:4000/job/createjob`, job);
  }
}
