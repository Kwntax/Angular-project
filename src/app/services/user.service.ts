import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
export interface User{
  id: number;
  name: string;
  age: number;
  email: string;
  profile_picture: string;
  is_active: number;
  password: string;
  phonenumber: number;
  partner_id: number;
  created_at: Date;
  updated_at: Date;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor( private http: HttpClient){

  }

  public getData(){
  return this.http.get<User>('http://127.0.0.1:8000/api/userprofiles/partner/1')

  }
}
