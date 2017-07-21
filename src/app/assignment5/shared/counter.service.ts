import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  activeCounter: number = 0;
  inactiveCounter: number = 0;

  constructor() { }

  logCounter(type: string) {
    if (type === 'active') {
      this.activeCounter++;
      console.log('Total times user moved to active: ' + this.activeCounter);
    } else {
      this.inactiveCounter++;
      console.log('Total times user moved to inactive: ' + this.inactiveCounter);
    }
  }

}
