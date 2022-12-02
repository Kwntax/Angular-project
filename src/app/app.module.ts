import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from './services/user.service';
import { NgChartsModule } from 'ng2-charts';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
//import { NgxChartsModule } from '@swimlane/ngx-charts'
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { ModalpopupcomponentComponent } from './components/modalpopupcomponent/modalpopupcomponent.component';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CardComponent,
    ModalpopupcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgChartsModule,
    //NgxChartsModule
    NgChartsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
