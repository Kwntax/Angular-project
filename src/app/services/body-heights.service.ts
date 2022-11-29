import { Injectable } from '@angular/core';

interface Body_height{
  id: number;
  height: number;
  measurement_unit: string;
}


@Injectable({
  providedIn: 'root'
})
export class BodyHeightsService {

  constructor() { }
}
