import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivePageComponent } from './components/live-page/live-page.component';
import { LiveRoutingModule } from './country-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    LivePageComponent
  ],
  imports: [
    CommonModule,
    LiveRoutingModule,
    HighchartsChartModule
  ]
})
export class LiveModule { }
