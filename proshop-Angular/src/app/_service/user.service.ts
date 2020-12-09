import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_model/user';
import {proInfo} from '../_model/proInfo';


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    console.log('getAll()');
    return this.http.get<User[]>(`http://localhost:4000/user/allusers`);
  }

  register(user: User) {
    return this.http.post(`http://localhost:4000/user/register`, user);
  }

  registerProInfo(info: proInfo){
    return this.http.post(`http://localhost:4000/proInfo/registerProInfo`, info);
  }

  getProInfo(id: string){
    return this.http.get<proInfo>(`http://localhost:4000/proInfo/getProInfo/${id}`);
  }

}
