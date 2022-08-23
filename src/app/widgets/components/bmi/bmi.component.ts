import { Component, OnInit } from '@angular/core';



@Component({

  selector: 'bmi-output',

  templateUrl: './bmi.component.html',
})

export class BmiComponent implements OnInit {

  bmiRange: string;
  bmiStatus: string;

  constructor() {

    this.bmiRange = '??';

    this.bmiStatus = '??';

  }



  ngOnInit(): void {

  }



  getLean(): void {

    this.bmiRange = 'below 18.5';

    this.bmiStatus = 'underweight';

  }



  getNormal(): void {

    this.bmiRange = 'between 18.5 and 24.9';

    this.bmiStatus = 'healthy weight';

  }

  getOverweight(): void {

    this.bmiRange = 'between 25 and 29.9';

    this.bmiStatus = 'overweight';

  }



  getObese(): void {

    this.bmiRange = 'between 30 and 39.9';

    this.bmiStatus = 'obese';

  }



}