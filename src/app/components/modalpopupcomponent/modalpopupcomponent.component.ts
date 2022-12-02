import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
@Component({
  selector: 'app-modalpopupcomponent',
  templateUrl: './modalpopupcomponent.component.html',
  styleUrls: ['./modalpopupcomponent.component.css']
})
export class ModalpopupcomponentComponent implements OnInit{
  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        tension: 0.5,
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;

  constructor() {
  }

  ngOnInit() {
  }
}
