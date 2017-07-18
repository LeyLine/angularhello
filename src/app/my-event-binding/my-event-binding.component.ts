import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-event-binding',
  templateUrl: './my-event-binding.component.html',
  styleUrls: ['./my-event-binding.component.css']
})
export class MyEventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onKey(event) {
    console.log(`Key pressed: ${event.key}`);
  }

}
