import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  heroes: string[] = ['Spidermoon', 'Ironmud', 'Holk', 'Thir'];
  erasedHeroe: string = '';

  eraseHeroe(){
    this.erasedHeroe = this.heroes.shift() || '';
  }

  
}
