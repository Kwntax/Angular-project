import { Injectable } from '@angular/core';

interface Blood_pressure{
  id: number;
  measurement: number;
  diastolic: number;
  systolic: number;
  measurement_unit: string;
  comparison_to_normal: number;
}

@Injectable({
  providedIn: 'root'
})
export class BloodPressuresService {

  constructor() { }
}
