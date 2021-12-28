import * as crypto from 'crypto';
import { Knex } from 'knex';
import { ICategory } from './category.model';
import knexInstance, { ITimestamps } from './db';
import * as uuid from 'uuid';


export const ItemTable = 'item';

export interface IItem extends ITimestamps {
	id: string;
	description: string;
	category: string;
	price: number;
}

export class Item {
	public static async getItems(category: ICategory): Promise<IItem[]> {
		return knexInstance(ItemTable).where('category', category.id);
	}

	public static async addItem(description: string, price: number, category: string): Promise<string[]> {
		return knexInstance(ItemTable).insert({id: uuid.v4(), description, price, category}, ['id']);
	}
}
