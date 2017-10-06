import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'frequentContacts',
  pure: false
})

export class ContactFrequentPipe implements PipeTransform {
  transform(value: any): any {
    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'name');
    }
    return value;
  }
}
