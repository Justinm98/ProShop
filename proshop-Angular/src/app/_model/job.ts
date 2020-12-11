export class Job {
  title: string;
  description: string;
  createdByUser: {username: string, firstName: string, lastName: string};
  createdDate: Date;
  completionDate: Date;
  budget: number;
  _id: string;
}

