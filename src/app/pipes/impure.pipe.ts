import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myImpurePipe',
  pure: false
})
export class MyImpurePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return 'Impure Pipe ' + new Date().toLocaleTimeString();
  }
}