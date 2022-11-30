import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Recommended{
  id: number;
  beats_per_minute: number;
  blood_pressure: number;
  moisture: number;
  oxygen: number;
  created_at: number;
  updated_at: number;
}

@Injectable({
  providedIn: 'root'
})
export class RecommendedValuesService {

  constructor(private http: HttpClient) { }


  getRecommended(){
    return this.http.get<Recommended>('http://127.0.0.1:8000/api/recommendedhealthvalues')
  }
}
