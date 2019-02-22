import { Pipe, PipeTransform } from '@angular/core';

/**
 * myDatePipe  - pipe для преобразования вывода разницы времени в зависимости от ее величины
 */
@Pipe({
  name: 'myDatePipe'
})
export class MyDatePipePipe implements PipeTransform {

  transform(timeStamp: number): string {
    const timeStampDate = new Date(timeStamp);
    const realTime = Date.now();
    const difference = realTime - timeStamp;
    if (difference <= 60000) {
      return 'now';
    } else if (difference <= 60000 * 60) {
      return `${Math.floor(difference / 60000)} minutes ago`;
    } else if (difference <= 60000 * 60 * 24) {
      return `${Math.floor(difference / 60000 / 60)} hours ago`;
    } else {
      const day = timeStampDate.getDate() > 9 ? timeStampDate.getDate() : '0' + timeStampDate.getDate();
      const month = timeStampDate.getMonth() > 8 ? timeStampDate.getMonth() + 1 : '0' + (timeStampDate.getMonth() + 1);
      const year = timeStampDate.getFullYear();
      const hours = timeStampDate.getHours() > 9 ? timeStampDate.getHours() : '0' + timeStampDate.getHours();
      const minutes = timeStampDate.getMinutes() > 9 ? timeStampDate.getMinutes() : '0' + timeStampDate.getMinutes();
      return `${day}.${month}.${year} at ${hours}:${minutes}`;
    }
  }
}
