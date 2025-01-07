import { Component } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  imports: [],
  templateUrl: './mobiles.component.html',
  styleUrl: './mobiles.component.css'
})
export class MobilesComponent {
  products = [
    {
      id: 1,
      name: 'Micromax A23',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis reprehenderit hic con.',
      price: 14777,
      imageUrl: 'mobile2.jpg',
      rating: 4,
    },
    {
      id: 2,
      name: 'Iphone 12Pro MAX',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis reprehenderit hic con.',
      price: 65000,
      imageUrl: 'mobile3.jpg',
      rating: 5,
    },
    {
      id: 3,
      name: 'Realme GT 12PRo',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis reprehenderit hic con.',
      price: 45999,
      imageUrl: 'mobile2.jpg',
      rating: 3,
    },
    {
      id: 3,
      name: 'LAVA Agni 18',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis reprehenderit hic con.',
      price: 24988,
      imageUrl: 'mobile3.jpg',
      rating: 4,
    },
  ];
}
