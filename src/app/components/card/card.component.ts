import { Component, Input, OnInit } from '@angular/core';
import { HealthService, Health } from 'src/app/services/health.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ModalpopupcomponentComponent } from '../modalpopupcomponent/modalpopupcomponent.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  
  health:any;
  lastElement:any;
  constructor(private HealthService:HealthService, private dialog:MatDialog, private toastr:ToastrService ) { }

  @Input() usersInput:any;

  ngOnInit() {
    console.log('card component initialized');
    this.getHealthData();
    setInterval(()=>{
      this.getHealthData();
      //console.log(this.lastElement.blood_pressure);
      if(this.lastElement.blood_pressure>120){
        console.log('if');
        this.toastr.warning('Click to send ' + this.usersInput.name + ' a message','Warning')
        const card = document.getElementById('card'+this.usersInput.id);
        if (card!==null){
          card.style.backgroundColor = '#972F2F';
        }
      } else {
        console.log('ifelse');
        const card = document.getElementById('card'+this.usersInput.id);
        if (card!==null){
          card.style.backgroundColor = '';
        }

      }
    },10000);
  }


  getHealthData(){
    this.HealthService.getHealth(this.usersInput.id)
    .subscribe(Response =>{
      this.health = Response;
      //console.log(Response)
      this.lastElement= Response[this.health.length-1]
      //console.log(this.lastElement);
      console.log(this.lastElement.blood_pressure);
    });
    
  
   }

   OpenPopUp():void{
    let array = this.health;
    this.dialog.open(ModalpopupcomponentComponent,{
      width: '100%',
      height: '90%',
      data: array
      
    })
   }

   

}
