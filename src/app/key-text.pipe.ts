import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyText'
})
export class KeyTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case '{space}':
        return '';
      case '{123}':
        return '123';
      case '{ABC}':
        return 'ABC';
      case '{#+=}':
        return '#+=';
      default:
        return value;
    }
  }
}
