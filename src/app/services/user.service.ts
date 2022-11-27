import { Injectable } from '@angular/core';

interface User{
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
  phonenumber: number;

}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private data: User[] = [];


}
