import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
/**
 * Generated class for the KeyboardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

  layout: any;
  currentMap: any;


  @Output()
  keyPressed: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  bkspPressed: EventEmitter<null> = new EventEmitter<null>();

  @Output()
  searchPressed: EventEmitter<null> = new EventEmitter<null>();



  constructor(private http: HttpClient) {
    console.log('keyboard component constructor');
    this.http.get('/src/assets/keyboard/layouts.json').subscribe(
      (res) => {
        this.layout = res['es'];
        this.currentMap = this.layout.base;
      },
      (err) => console.log(err)
    );
  }
  toggleShift() {
    if (this.currentMap === this.layout.base) {
      this.currentMap = this.layout.shift;
    } else {
      this.currentMap = this.layout.base;
    }
  }
  toggleNumeric() {
    if (this.currentMap === this.layout.numeric) {
      this.currentMap = this.layout.symbols;
    } else {
      this.currentMap = this.layout.numeric;
    }
  }

  buttonClicked(key) {
    if (this.isKey(key)) {
      this.keyPressed.emit(key);
    } else {
      console.log(key);
      switch (key) {
        case '{shift}':
        case '{ABC}':
          this.toggleShift();
          break;
        case '{123}':
        case '{#+=}':
          this.toggleNumeric();
          break;
        case '{bksp}':
          this.bkspPressed.emit();
          break;
        case '{enter}':
          this.searchPressed.emit();
          break;
        case '{space}':
          this.keyPressed.emit(' ');
          break;
      }
    }
  }
  isTextButton(key) {
    return key === '{space}' ||
      key === '{ABC}' ||
      key === '{123}' ||
      key === '{#+=}' ||
      this.isKey(key);
  }
  isKey(key) {
    return !(key.startsWith('{') && key.endsWith('}'));
  }
  getSpecialButtonIcon(key) {
    switch (key) {
      case '{bksp}':
        return 'backspace';
      case '{tab}':
        return 'ios-arrow-round-forward-outline';
      case '{enter}':
        return 'search';
      case '{shift}':
        return 'arrow-up';
      case '{alt}':
        return 'ios-arrow-dropup-outline';
      default:
        return 'globe';
    }
  }
  getButtonClass(key) {
    switch (key) {
      case '{space}':
        return 'mop-btn-special-xlarge';
      case '{bksp}':
      case '{enter}':
        return 'mop-btn-special-large';
      case '{shift}':
      case '{ABC}':
      case '{123}':
      case '{#+=}':
        return 'mop-btn-special';
      default:
        return 'mop-btn-std';
    }
  }
}
