import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'chileDate'
})
export class ChileDatePipe implements PipeTransform {

  transform(value: any, format: string = 'medium'): any {
    const date = new Date(value);

    if (isNaN(date.getTime())) {
      return value;
    }

    const formattedDate = formatDate(date, format, 'es-CL', 'America/Santiago');

    return formattedDate;
  }

}
