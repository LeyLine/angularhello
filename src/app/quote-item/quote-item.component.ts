import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
 @Input() quote: any;
 @Output() onDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onQuoteDelete () {
    this.onDelete.emit(this.quote.id);
  }

}
