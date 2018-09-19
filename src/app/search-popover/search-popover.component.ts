import { Component, OnInit, ViewChild } from '@angular/core';
import { Input } from '@ionic/angular';

@Component({
  selector: 'app-search-popover',
  templateUrl: './search-popover.component.html',
  styleUrls: ['./search-popover.component.scss']
})
export class SearchPopoverComponent implements OnInit {

  @ViewChild('queryInput') queryInput: Input;
  query = '';

  constructor() { }

  ngOnInit() {
  }
  keyPressed(key) {
    this.query += key;
    this.queryInput.focus();
  }
  backspace() {
    this.query = this.query.slice(0, this.query.length - 1);
    this.queryInput.focus();
  }
  search() {
  }
  keyUp(evt: KeyboardEvent) {
    if (evt.keyCode === 13) {
    }
  }
}
