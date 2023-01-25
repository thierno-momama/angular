import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';

const routes: Routes = [
  { path: '', component: FormTwoComponent},
  { path: 'ngForm', component: FormOneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
