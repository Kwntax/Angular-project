import { Injectable } from '@angular/core';

interface User{
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

  private data: User[] = [];


}
