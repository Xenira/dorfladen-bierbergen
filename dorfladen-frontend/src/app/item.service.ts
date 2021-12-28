import { Injectable } from '@angular/core';

export interface IItem {
  description: string;
  price: number;
  count?: number;
}

export interface ICategory {
  title: string;
  categoryIcon: string;
  items: IItem[];
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  public getItems(): ICategory[] {
    return [
      {
        title: 'Brötchen',
        categoryIcon: 'hamburger',
        items: [
          { description: 'Backhaus', price: 40 },
          { description: 'Kracher', price: 50 },
          { description: 'Mehrkorn', price: 70 },
          { description: 'Roggen', price: 80 },
        ],
      },
      {
        title: 'Brot',
        categoryIcon: 'bread-slice',
        items: [
          { description: 'Mini Gerster 750gr.', price: 285 },
          { description: 'Korbbrot 1250gr.', price: 445 },
          { description: 'Kastenweißbrot 500g', price: 250 },
        ],
      },
      {
        title: 'Baguette',
        categoryIcon: 'hotdog',
        items: [
          { description: 'Baguette natur 350gr.', price: 245 },
          { description: 'Kaviar 350gr.', price: 245 },
          { description: 'Mehrkorn Baguette 350gr.', price: 275 },
          { description: 'Roggen Baguette 350gr.', price: 275 },
        ],
      },
      {
        title: 'Süßes',
        categoryIcon: 'cookie',
        items: [
          { description: 'Hedwig', price: 75},
          { description: 'Rosinen', price: 80},
          { description: 'Croissants', price: 135},
        ],
      },
      {
        title: 'Kuchen',
        categoryIcon: 'cheese',
        items: [
          { description: 'Butterkuchen', price: 380 },
          { description: 'Streuselkuchen', price: 395 },
          { description: 'Mandelkuchen', price: 395 },
        ],
      },
      {
        title: 'Familienstücke 10x20',
        categoryIcon: 'users',
        items: [
          { description: 'Apfelkuchen mit Guss', price: 550 },
          { description: 'Frankfurter Schnitte', price: 550 },
          { description: 'Shmand - Mandarine', price: 550 },
        ],
      },
    ];
  }
}
