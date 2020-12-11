import { Role } from './role';

export class User {
  username: string;
  firstName: string;
  lastName: string;
  _id: string;
  password: string;
  email: string;
  role: Role;
  token?: string;
}
