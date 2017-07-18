import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {
today = new Date();
  constructor() { }

  ngOnInit() {
  }

  increment() {
   // copy the date
   const changedDate = new Date(this.today);

   // increase the day of the month
   changedDate.setDate(this.today.getDate() + 1);

   // update our date
   this.today = changedDate;
 }

}
