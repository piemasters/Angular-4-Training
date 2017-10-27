import { Component, OnInit } from '@angular/core';
import {state, style, trigger} from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      }))
    ])
  ]
})
export class AnimationsComponent implements OnInit {
  state = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  constructor() { }

  ngOnInit() {
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    console.log('test');
  }

  onShrink() {
    console.log('test');
  }

}
