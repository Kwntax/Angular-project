import { Component, Input, OnInit } from '@angular/core';
import { HealthService, Health } from 'src/app/services/health.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ModalpopupcomponentComponent } from '../modalpopupcomponent/modalpopupcomponent.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  
  health:any;
  lastElement:any;
  constructor(private HealthService:HealthService, private dialog:MatDialog ) { }

  @Input() usersInput:any;

  ngOnInit() {
    console.log('card component initialized')

    this.getHealthData();
    setInterval(()=>{
      this.getHealthData();
    },10000);
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

   OpenPopUp(){
    this.dialog.open(ModalpopupcomponentComponent)
   }

   

}
