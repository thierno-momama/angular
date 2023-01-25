import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent {
  onSubmit(f: NgForm){
    console.log(f.value);
  }

  getValue(f: any){
    console.log("==>",f);
  }

}
