import knexInstance, { ITimestamps } from './db';
import * as uuid from 'uuid';

export const CategoryTable = 'category';

export interface ICategory extends ITimestamps {
	id: string;
	title: string;
	icon: string;
}

export class Category {
	public static async getCategories(): Promise<ICategory[]> {
		return knexInstance(CategoryTable);
	}

	public static async addCategory(
		title: string,
		icon: string
	): Promise<string[]> {
		return knexInstance(CategoryTable).insert({ id: uuid.v4(), title, icon }, ['id']);
	}
}
