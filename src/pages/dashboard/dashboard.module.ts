import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import {DashboardService} from '../../providers/dashboard-service'

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
  ],
  providers:[
     DashboardService 
  ]
})
export class DashboardPageModule {}
