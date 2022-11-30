import { Injectable } from '@angular/core';
import { User } from './user.service';
import { HttpClient } from '@angular/common/http';

interface health{
  id: number;
  beats_per_minute: number;
  blood_pressure:number;
  moisture:number;
  oxygen:number;
  user_profiles:Array<User>;
}

interface HealthData{
  id: number;
  beats_per_minute: number;
  blood_pressure:number;
  moisture:number;
  oxygen:number;
}


@Injectable({
  providedIn: 'root'
})





export class HealthService {

  private healthdata: HealthData[] = [
    {
      "id": 1,
      "beats_per_minute": 70,
      "blood_pressure": 125,
      "moisture": 90,
      "oxygen": 98,
    },
    {
      "id": 2,
      "beats_per_minute": 70,
      "blood_pressure": 80,
      "moisture": 90,
      "oxygen": 98,
    },
    {
      "id": 3,
      "beats_per_minute": 70,
      "blood_pressure": 80,
      "moisture": 90,
      "oxygen": 98,
    },
    {
      "id": 4,
      "beats_per_minute": 70,
      "blood_pressure": 80,
      "moisture": 90,
      "oxygen": 98,
    }
  ];

  get healthData(){
    return this.healthdata;
  }

  constructor(private http: HttpClient) { }


  public getHealth(){
    return this.http.get<health>('http://127.0.0.1:8000/api/healthdetails');
  }
}



