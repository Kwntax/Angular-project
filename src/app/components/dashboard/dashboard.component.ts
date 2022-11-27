import { Component, OnInit } from '@angular/core';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  faHeartPulse = faHeartPulse;
  faHome = faHome;

  lineChartdata ={
    labels  : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets : [
      {
         data: [89,34,43,54,28,74,93],
         label: 'Sales Percent'
      }
    ]

  };
  constructor(){

  }
  ngOnInit(){
    console.log(this.faHeartPulse);

    const icon = document.getElementById('user-icon');
    if (icon!==null){
      icon.style.backgroundColor = 'red';
    }

 }
}
