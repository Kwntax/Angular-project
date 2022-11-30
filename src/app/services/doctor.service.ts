import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Doctor{
  id: number;
  name: string;
  profile_picture: string;
  phonenumber: number;
  created_at: Date;
  updated_at: Date;
}

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor( private http: HttpClient){}

  public getDoctorsData(){
    return this.http.get<Doctor>('http://127.0.0.1:8000/api/partners');
    }

}
