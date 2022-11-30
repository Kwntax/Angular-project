import { Component, OnInit } from '@angular/core';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { HealthService } from 'src/app/services/health.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { RecommendedValuesService } from 'src/app/services/recommended-values.service';


var moisture: number;
var oxygen: number;
var bpm: number;
var blood_pressure: number;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  faHeartPulse = faHeartPulse;
  faHome = faHome;

  users:any;
  health:any;
  doctors:any;
  recommended:any;

  constructor( private UserService: UserService,
     private HealthService: HealthService,
     private DoctorService: DoctorService,
     private RecommendedValuesService: RecommendedValuesService){

  }

  

  get healthData(){
    return this.HealthService.healthData;
  }
  ngOnInit(){
    console.log(this.faHeartPulse);

    const icon = document.getElementById('user-icon');
    if (icon!==null){
      icon.style.backgroundColor = 'red';
    }
    this.health=this.healthData
    this.getUsersData();
    //this.getHealthData();
    this.getDoctorsData();
    this.getRecommended();

    if(this.healthData[0].blood_pressure>120){
      const card1 = document.getElementById('card-1');
      if (card1!==null){
        card1.style.color='red';
      }
    }



 }

 getDoctorsData(){
  this.DoctorService.getDoctorsData()
  .subscribe(res => {
    this.doctors = res
    console.log(this.doctors)
  });

 }

 getRecommended(){
    this.RecommendedValuesService.getRecommended()
    .subscribe(res => {
      this.recommended = res;
      console.log(this.recommended)
      moisture = res.moisture
      oxygen = res.oxygen;
      bpm = res.beats_per_minute;
      blood_pressure = res.blood_pressure
    });
}
/*
 getHealthData(){
  this.HealthService.getHealth()
  .subscribe(data =>{
    this.health = data;
    console.log(this.health)
  });

 }
*/
 getUsersData(){
  this.UserService.getData()
  .subscribe(response => {
    this.users = response;
    console.log(this.users);
  });
  
}
}
