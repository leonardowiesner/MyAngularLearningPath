import { Component } from '@angular/core';
import { Product } from '../store-platzi/product.model';

@Component({
  selector: 'app-store-platzi',
  templateUrl: './store-platzi.component.html',
  styleUrls: ['./store-platzi.component.scss']
})
export class StorePlatziComponent {
  register ={
    name: '',
    email: '',
    password: '',
  }
  person ={
    name: 'leo',
    age: 18,
    avatar: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/avatar.png'
  }

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/toy.jpg',
      category: '',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/glasses.jpg'
    }
  ]

  onRegister(){
    console.log(this.register);
  }
}
