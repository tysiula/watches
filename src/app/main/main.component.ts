import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import {tsCreateElement} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";

@Component({
  selector: 'app-root',
//  imports: [CommonModule, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class  MainComponent implements OnInit{
  title = 'watch';

  hourHand= 0;
  minutesHand =0;
  secondsHand = 0;

  dayName: string[] = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek','Piątek','Sobota', 'Niedziela'];
  day='';
  number=[1,2,3,4,5,6,7,8,9,10,11,12];
  hour: any ='00';
  minute: any='00';
  second: any='00';
  date: Date = new Date();

  constructor(){}

  ngOnInit(): void {
    setInterval(()=> {
      const dates = new Date();
      this.setTime(dates);
    },1000);
  }

numberChange(numberFormat: number){
return String(numberFormat).padStart(2,'0');
}

  setTime(date: any){
    this.second =  this.numberChange(date.getSeconds());
    this.hour = this.numberChange(date.getHours());
    this.minute= this.numberChange(date.getMinutes());
    this.secondsHand = this.second * 6;
    this.minutesHand = this.minute * 6;
    this.hourHand =(this.hour >11 ? this.hour - 12 : this.hour) *30 + Math.floor(this.minute/12)*6;

    this.day = this.dayName[this.date.getDay() -1];
  }
}
