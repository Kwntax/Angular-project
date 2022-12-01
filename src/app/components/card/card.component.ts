import { Component, Input, OnInit } from '@angular/core';
import { HealthService, Health } from 'src/app/services/health.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  
  health:any;
  lastElement:any;
  constructor(private HealthService:HealthService) { }

  @Input() usersInput:any;

  ngOnInit() {
    console.log('card component initialized')

    this.getHealthData();
    setInterval(()=>{
      this.getHealthData();
    },5000);
  }


  getHealthData(){
    this.HealthService.getHealth(this.usersInput.id)
    .subscribe(Response =>{
      this.health = Response;
      //console.log(Response)
      this.lastElement= Response[this.health.length-1]
      console.log(this.lastElement);
    });
  
   }

}
