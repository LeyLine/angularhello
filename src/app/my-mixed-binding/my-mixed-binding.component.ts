import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-mixed-binding',
  template:

  `<input type="text" [disabled] = "isInputDisabled" >
   <button (click)="toggleInput()"> Toggle input </button>`,
  styleUrls: ['./my-mixed-binding.component.css']
})
export class MyMixedBindingComponent {
isInputDisabled: boolean = false;

toggleInput() {
  this.isInputDisabled = !this.isInputDisabled;
}

  constructor() { }

  ngOnInit() {
  }



}
