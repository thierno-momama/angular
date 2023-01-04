import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  countries = new Subject();

  constructor() { }

  setCountries(country: string){
    this.countries.next(country);
  }

  getCountries(): Observable<any> {
    return this.countries.asObservable();
  }
  
}
