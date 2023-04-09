import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  title :string = 'Counter App';
  number:number = 0;
  base  :number = 5;

  accumulate(value:number){
    this.number += value;
  }
}
