import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css']
})
export class FormTwoComponent implements OnInit{

  form: any;
  emailRegex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$';
  constructor(){}

  ngOnInit(): void {
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required])
    })
  }

  get FullName(){
    return this.form.get('fullName');
  }
  get Email(){
    return this.form.get('email');
  }
  get Address(){
    return this.form.get('address');
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
