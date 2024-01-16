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
  hour: any =0;
  minute: any=0;
  second: any=0;
  date: Date = new Date();

  constructor(){}

  ngOnInit(): void {
    setInterval(()=> {
      const dates = new Date();
      this.setTime(dates);
    },1000);
    //setInterval(() =>{this.click(this.num)},1000);
  }

  setTime(date: any){
    this.second = date.getSeconds();
    if(this.second < 10){ this.second = '0' + this.second}
    this.hour = date.getHours();
    if(this.hour < 10){ this.hour = '0' +  this.hour}
    this.minute= date.getMinutes();
    if(this.minute < 10){ this.minute = '0' +  this.minute}
    this.secondsHand = this.second * 6;
    this.minutesHand = this.minute * 6;
    this.hourHand =(this.hour >11 ? this.hour - 12 : this.hour) *30 + Math.floor(this.minute/12)*6;

    this.day = this.dayName[this.date.getDay() -1];
  }
  /*******************************************************/

  stopNumber=[5,10,15,20,25,30,35,40,45,50,55,60];
  msHand =0;
  secHand =0;
  minHand = 0;
  run:any;
  ms:any = '00';
  sec:any = '00';
  min:any = '00';
  h:any = '00';

  start(){
   this.run= setInterval(() =>{
     this.ms++;
     this.ms = this.ms < 10 ? '0' + this.ms : this.ms;

     if(this.ms === 100){
       this.ms= '00';
       this.sec++
       this.sec= this.sec < 10 ? '0' + this.sec: this.sec;}

       if(this.sec === 60){
         this.sec='00'
         this.min++;
       }
       this.msHand= this.ms * 3.6;
       this.secHand = this.sec * 6;
       this.minHand = this.min * 6;
   },10);
  }

  stop(){
    clearInterval(this.run);
  }

  reset(){
    this.ms = '00';
    this.sec= '00';
    this.min = '00';
    this.h= '00';
    this.msHand= this.ms * 3.6;
    this.secHand = this.sec * 6;
    this.minHand = this.min * 6;
  }
}






