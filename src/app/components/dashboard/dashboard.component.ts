import { Component, Input, IterableDiffers, OnInit } from '@angular/core';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { BrowserModule } from '@angular/platform-browser';
import { User, UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { Health, HealthService } from 'src/app/services/health.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { RecommendedValuesService } from 'src/app/services/recommended-values.service';
import { map } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';

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
  //health:Health[];
  health:any[];
  doctors:any;
  recommended:any;
  lastElement:any;

  data:any[]=[];




  constructor( private UserService: UserService,
     private HealthService: HealthService,
     private DoctorService: DoctorService,
     private RecommendedValuesService: RecommendedValuesService,
     private toast:ToastrService){}


  
/*
  get healthData(){
    return this.HealthService.healthData;
  }*/
  ngOnInit(){
    console.log('Initializing dashboard component')
    //this.data = data2;
    console.log(this.faHeartPulse);
    const icon = document.getElementById('user-icon');
    if (icon!==null){
      icon.style.backgroundColor = 'red';
    }
    this.getUsersData();
    this.getDoctorsData();
    this.getRecommended();

    
    //console.log(blood_pressure)
    if(blood_pressure>120){
      const card1 = document.getElementById('card1');
      if (card1!==null){
        card1.style.backgroundColor = '#972F2F';
      }
    }

    




 }

 getDoctorsData(){
  this.DoctorService.getDoctorsData()
  .subscribe(res => {
    this.doctors = res
    //console.log(this.doctors)
  });

 }

 getRecommended(){
    this.RecommendedValuesService.getRecommended()
    .subscribe(res => {
      this.recommended = res;
      //console.log(this.recommended)
      moisture = res.moisture
      oxygen = res.oxygen;
      bpm = res.beats_per_minute;
      blood_pressure = res.blood_pressure
    });
}

 getUsersData(){
  this.UserService.getData()
  .subscribe((users) => {
    console.log(users);
    this.users = users;
  });
  
}

  bloodPressureUp(){
    this.toast.success('Click to send him a message','Warning');
  }

  bloodPressureLow(){
    console.log('bloodPressureUp initialized')
    blood_pressure=80;
    this.health[0].blood_pressure = blood_pressure;
    if(blood_pressure>120){
      const card1 = document.getElementById('card1');
      if (card1!==null){
        card1.style.backgroundColor = '#972F2F';
      }
    } else {
      const card1 = document.getElementById('card1');
      if (card1!==null){
        card1.style.backgroundColor = '';
      }
    }
  }


}
