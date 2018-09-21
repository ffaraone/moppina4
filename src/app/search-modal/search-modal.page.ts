import { Component, OnInit, ViewChild } from '@angular/core';
import { Events, Input } from '@ionic/angular';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.page.html',
  styleUrls: ['./search-modal.page.scss'],
})
export class SearchModalPage {

  @ViewChild('queryInput') queryInput: Input;
  query = '';

  constructor(private events: Events) { }

  keyPressed(key) {
    this.query += key;
    this.queryInput.focus();
  }
  backspace() {
    this.query = this.query.slice(0, this.query.length - 1);
    this.queryInput.focus();
  }
  search() {
    this.events.publish('moppina:search', this.query);
  }
  keyUp(evt: KeyboardEvent) {
    if (evt.keyCode === 13) {
      this.events.publish('moppina:search', this.query);
    }
  }
}
