import { Pipe, PipeTransform } from '@angular/core';

/**
 * sortArr - pipe для сортировки массива по заданному ключу
 * 1. Проверяет, является ли входное значение массивом и, если нет, то сразу его возвращает неизмененным
 * 2. Проверяет, тип данных в поле объектов
 * 3. В зависимости от того string или number в заданном поле выбирает один из методов сортивовки
 * 4. Если задано условие trend=down, то переворачиваем возвращаемый массив
 */
@Pipe({
  name: 'sortArr',
  pure: false // пришлось так сделать, чтобы иметь возможность переворачивать массив вверх/вниз, в зависимости от селекта
})
export class SortArrPipe implements PipeTransform {

  transform(arr: any, field: string = 'name', trend?: string): any {
    if (!Array.isArray(arr)) {
      return arr;
    } else if (typeof(arr[field]) === 'string') {
      arr.sort((prev: any, next: any) => {
        if (prev[field] < next[field]) {
          return -1;
        } else if (prev[field] > next[field]) {
          return 1;
        } else {
          return 0;
        }
      });
      return trend === 'down' ? arr.reverse() : arr;
    } else {
      arr.sort((prev, next) => {
        return prev[field] - next[field];
      });
      return trend === 'down' ? arr.reverse() : arr;
    }
  }
}
