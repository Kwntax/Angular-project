import { Injectable } from '@angular/core';

interface Body_weight{
  id: number;
  weight: number;
  measurement_unit: string;
}

@Injectable({
  providedIn: 'root'
})
export class BodyWeightsService {

  constructor() { }
}
