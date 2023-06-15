import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPurePipe'
})
export class MyPurePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return 'Pure Pipe ' + new Date().toLocaleTimeString();
  }
}