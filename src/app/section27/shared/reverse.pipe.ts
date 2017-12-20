import { Pipe } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class UnitTestReversePipe {
  transform(value: string) {
    return value.split('').reverse().join('');
  }
}
