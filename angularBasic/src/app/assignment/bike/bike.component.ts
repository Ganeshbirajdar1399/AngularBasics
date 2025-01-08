import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bike',
  imports: [CommonModule],
  templateUrl: './bike.component.html',
  styleUrl: './bike.component.css'
})
export class BikeComponent {
  products = [
    {
      id: 1,
      name: 'Audy M-3S',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis reprehenderit hic con.',
      price: 7222,
      imageUrl: 'mc1.jpg',
      rating: 4,
    },
    {
      id: 2,
      name: 'Range Rover 120S',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis reprehenderit hic con.',
      price: 4000,
      imageUrl: 'mc2.jpg',
      rating: 5,
    },
    {
      id: 3,
      name: 'Mercedes Maybach',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis reprehenderit hic con.',
      price: 5000,
      imageUrl: 'mc1.jpg',
      rating: 3,
    },
    {
      id: 3,
      name: 'Audy M-3S',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis reprehenderit hic con.',
      price: 4500,
      imageUrl: 'mc3.jpg',
      rating: 3,
    },
  ];
}
