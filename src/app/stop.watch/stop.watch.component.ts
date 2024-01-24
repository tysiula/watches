import {Component} from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  // imports: [],
  templateUrl: './stop.watch.component.html',
  styleUrl: './stop.watch.component.css'
})
export class StopWatchComponent {

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
  if(this.run != undefined ){
    clearInterval(this.run);
  }
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
