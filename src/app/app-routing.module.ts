import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: '', 
    title: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard', 
    title: 'Dashboard',
    component: DashboardComponent
  },
  { 
    path: '**', 
    title: '404',
    component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
