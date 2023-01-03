import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivePageComponent } from './components/live-page/live-page.component';
import { LiveRoutingModule } from './country-routing.module';



@NgModule({
  declarations: [
    LivePageComponent
  ],
  imports: [
    CommonModule,
    LiveRoutingModule
  ]
})
export class LiveModule { }
