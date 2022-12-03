import { Component, Input, OnInit, Inject } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-modalpopupcomponent',
  templateUrl: './modalpopupcomponent.component.html',
  styleUrls: ['./modalpopupcomponent.component.css']
})
export class ModalpopupcomponentComponent implements OnInit{
  title = 'ng2-charts-demo';

  oxygen:any[] = [];
  bpm:any[] = [];
  bloodRate:any[] = [];
  bloodPressure:any[] = [];
  dateTime:any[] = [];
  public lineChartDataOxygen: ChartConfiguration<'line'>['data'] = {
    labels: this.dateTime,
    datasets: [
      {
        data: this.oxygen,
        label: 'Oxygen',
        tension: 0.5,
        backgroundColor: '#4346A1',
        borderColor: '#4346A1',
        pointBackgroundColor: '#4346A1',
        pointBorderColor: '#4346A1',
      },
    ]
  };
  public lineChartDataBloodRate: ChartConfiguration<'line'>['data'] = {
    labels: this.dateTime,
    datasets: [
      {
        data: this.bloodRate,
        label: 'Blood Rate',
        tension: 0.5,
        backgroundColor: '#4346A1',
        borderColor: '#4346A1',
        pointBackgroundColor: '#4346A1',
        pointBorderColor: '#4346A1',
      },
    ]
  };
  public lineChartDataBloodPressure: ChartConfiguration<'line'>['data'] = {
    labels: this.dateTime,
    datasets: [
      {
        data: this.bloodPressure,
        label: 'Blood Pressure',
        tension: 0.5,
        backgroundColor: '#4346A1',
        borderColor: '#4346A1',
        pointBackgroundColor: '#4346A1',
        pointBorderColor: '#4346A1',
      },
    ]
  };
  public lineChartDataBPM: ChartConfiguration<'line'>['data'] = {
    labels: this.dateTime,
    datasets: [
      {
        data: this.bpm,
        label: 'BPM',
        tension: 0.5,
        backgroundColor: '#4346A1',
        borderColor: '#4346A1',
        pointBackgroundColor: '#4346A1',
        pointBorderColor: '#4346A1',
      },
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    maintainAspectRatio: true,
    responsive: false,
    scales: { //you're missing this
      y : {
        min:60,
        ticks: {
          stepSize: 10
        }
      },

      x : {
        ticks : {
          display : false,
        }
      }
   }//END scales    
  };

  public lineChartOptionsBP: ChartOptions<'line'> = {
    maintainAspectRatio: true,
    responsive: false,
    scales: { //you're missing this
      y : {
        max: 110,
        min:90,
        ticks: {
          stepSize: 10
        }
      },

      x : {
        ticks : {
          display : false,
        }
      }
   }//END scales
  }

  public lineChartOptionsBPM: ChartOptions<'line'> = {
    maintainAspectRatio: true,
    responsive: false,
    scales: { //you're missing this
      y : {
        min:75,
        ticks: {
          stepSize: 10
        }
      },

      x : {
        ticks : {
          display : false,
        }
      }
   }//END scales
  }
  public lineChartLegend = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
  }

  ngOnInit() {
    console.log('Initializing modalpopupcomponent')
    console.log(this.data);
    console.log(this.data.length);
    console.log(this.dateTime);
    for(let i=0; i<this.data.length; i++){
      //this.oxygen.push(this.data[i].oxygen);
      this.oxygen.push(this.data[i].oxygen);
      this.bloodRate.push(this.data[i].moisture);
      this.bloodPressure.push(this.data[i].blood_pressure);
      this.bpm.push(this.data[i].beats_per_minute);
      this.dateTime.push(this.data[i].created_at)
    }
  }
}
