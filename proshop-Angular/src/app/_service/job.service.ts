import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../_model/job';
import { Proposal } from '../_model/Proposal';
import {User} from '../_model/user';
import {proInfo} from '../_model/proInfo';


@Injectable({ providedIn: 'root' })
export class JobService {
  constructor(private http: HttpClient) { }

  getAll() {
    console.log('getAll()');
    return this.http.get<Job[]>(`http://localhost:4000/job/getjobs`);
  }

  getProposalByProID(id: string){
    return this.http.get<Proposal[]>(`http://localhost:4000/proposal/getProposalsByProID/${id}`);
  }

  //TODO: notice this new function.
  getProposalsForJob(jobID: string) {
    return this.http.get<any>(`http://localhost:4000/proposal/getProposalsByJobID${jobID}`);
  }


  delete(id: string) {
    return this.http.delete(`http://localhost:4000/job/${id}`);

  }

  //TODO: make a post request that will send the course object to the back end.
  createJob(job: Job) {
    return this.http.post(`http://localhost:4000/job/createjob`, job);
  }

  createProposal(proposal: Proposal) {
    return this.http.post(`http://localhost:4000/proposal/create`, proposal);
  }

  selectProposal(id: string){
    return this.http.post(`http://localhost:4000/proposal/select`, id);
  }

  jobSearch(str: string){
    return this.http.get<Job[]>(`http://localhost:4000/jobSearch/search/${str}`);
  }

  deleteProposal(id: string) {
    return this.http.delete(`http://localhost:4000/proposal/${id}`);

  }

  recommenedJobSearch(info: proInfo){
    console.log(info);
    return this.http.post<Job[]>(`http://localhost:4000/jobSearch/search`, info);
  }
}
