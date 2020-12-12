import {Proposal} from '../_model/Proposal';

export class Job {
  title: string;
  description: string;
  createdByUser: {username: string, firstName: string, lastName: string};
  createdDate: Date;
  completionDate: Date;
  budget: number;
  skills: [string];
  _id: string;
  proposals: [Proposal];
}

