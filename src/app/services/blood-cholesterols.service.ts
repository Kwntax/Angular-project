import { Injectable } from '@angular/core';


interface Blood_cholesterol{
  id: number;
  hdl: number;
  ldl: number;
  total: number;
  tryglyceride: number;
  measurement_unit: number;
  comparison_to_normal: number;
}

@Injectable({
  providedIn: 'root'
})
export class BloodCholesterolsService {

  constructor() { }
}
