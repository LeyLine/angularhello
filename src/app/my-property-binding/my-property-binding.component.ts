import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-property-binding',
  templateUrl: './my-property-binding.component.html',
  styleUrls: ['./my-property-binding.component.css']
})
export class MyPropertyBindingComponent implements OnInit {
  myImageSource: string = 'http://placekitten.com/g/300/300';

  constructor() { }

  ngOnInit() {
  }

}
