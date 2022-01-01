import { Injectable } from '@angular/core';

export interface IItem {
  id: number;
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
          { id: 1, description: 'Backhaus', price: 40 },
          { id: 2, description: 'Kracher', price: 50 },
          { id: 3, description: 'Mehrkorn', price: 70 },
          { id: 4, description: 'Roggen', price: 80 },
          { id: 5, description: 'Dinkel-Joghurt', price: 75 },
          { id: 6, description: 'Dinkel-VK', price: 75 },
          { id: 7, description: 'Mohn', price: 60 },
          { id: 8, description: 'Sesam', price: 60 },
          { id: 9, description: 'Käse', price: 95 },
          { id: 10, description: 'Hafer-Quark', price: 75 },
          { id: 11, description: 'Dänische', price: 85 },
          { id: 12, description: 'Landbrötchen', price: 80 },
          { id: 13, description: 'Schokobrötchen', price: 85 },
          { id: 14, description: 'Schoko Coissant', price: 160 },
          { id: 15, description: 'Hörnchen', price: 96 },
        ],
      },
      {
        title: 'Brot',
        categoryIcon: 'bread-slice',
        items: [
          { id: 16, description: 'Mini Gerster 750g', price: 285 },
          { id: 17, description: 'Korbbrot 1250g', price: 445 },
          { id: 18, description: 'Dinkel VK 1000g', price: 620 },
          { id: 19, description: 'Kastenweißbrot 500g', price: 250 },
          { id: 20, description: 'Semmel 300g', price: 275 },
          { id: 21, description: 'Rosinensemmel 300g', price: 295 },
        ],
      },
      {
        title: 'Baguette',
        categoryIcon: 'hotdog',
        items: [
          { id: 22, description: 'Baguette natur 350g', price: 245 },
          { id: 23, description: 'Kaviar 350g', price: 245 },
          { id: 24, description: 'Mehrkorn Baguette 350g', price: 275 },
          { id: 25, description: 'Roggen Baguette 350g', price: 275 },
          { id: 26, description: 'Zwiebel Baguette 350g', price: 275 },
          { id: 27, description: 'Pfeffer-Salz Baguette 350g', price: 275 },
        ],
      },
      {
        title: 'Süßes',
        categoryIcon: 'cookie',
        items: [
          { id: 28, description: 'Hedwig', price: 75 },
          { id: 29, description: 'Rosinen', price: 80 },
          { id: 30, description: 'Croissants', price: 135 },
          { id: 31, description: 'Laugenstangen', price: 135 },
          { id: 32, description: 'Laugenecken', price: 155 },
        ],
      },
      {
        title: 'Kuchen',
        categoryIcon: 'cheese',
        items: [
          { id: 33, description: 'Butterkuchen', price: 380 },
          { id: 34, description: 'Streuselkuchen', price: 395 },
          { id: 35, description: 'Mandelkuchen', price: 395 },
        ],
      },
      {
        title: 'Familienstücke 10x20',
        categoryIcon: 'users',
        items: [
          { id: 36, description: 'Apfelkuchen mit Guss', price: 550 },
          { id: 37, description: 'Frankfurter Schnitte', price: 550 },
          { id: 38, description: 'Schmand - Mandarine', price: 550 },
          { id: 39, description: 'Mohn-Marzipanschnitte', price: 565 },
          { id: 40, description: 'Bienenstich', price: 565 },
        ],
      },
    ];
  }
}
