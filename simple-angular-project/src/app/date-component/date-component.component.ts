import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-component',
  templateUrl: './date-component.component.html',
  styleUrls: ['./date-component.component.css']
})
export class DateComponentComponent implements OnInit {

  date:string;
  
  constructor() {
    setInterval(()=>{
      let currentDate=new Date();
      this.date=currentDate.toDateString()+' '+currentDate.toLocaleTimeString();
    },1000);
  }
  ngOnInit() {
  }

  addTwoNumbers(a:number,b:number){
      return a+b;
  }
}
