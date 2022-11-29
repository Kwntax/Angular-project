import { Injectable } from '@angular/core';


interface Blood_glucose{
  id: number;
  measurement: number;
  measurement_unit: string;
  context_measurement: string;
  comparison_to_normal: number;
}

@Injectable({
  providedIn: 'root'
})
export class BloodGlucosesService {

  constructor() { }
}
