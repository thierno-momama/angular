import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.css']
})
export class SummaryCardsComponent implements OnInit, OnChanges{

  @Input() covidData: any = {};
  summerData: any = {};

  constructor(){}

  ngOnInit(): void {
    
  }
  
  ngOnChanges(): void {
    this.summerData = this.covidData.Global;
  }
}
