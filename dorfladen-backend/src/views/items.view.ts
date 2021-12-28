import { Category, ICategory } from "../models/category.model";
import { ITimestamps } from "../models/db";
import { IItem } from "../models/item.model";
import { View } from "./view";

export interface ICategoryView extends Omit<ICategory, 'id' | 'created_at' | 'updated_at'> {
	items: IItemView[];
}

export interface IItemView extends Omit<IItem, 'created_at' | 'updated_at' | 'category'> {}

export class CategoryView implements ICategoryView {
	items!: IItemView[];
	title!: string;
	icon!: string;


	static fromModle(category: ICategory, items: IItem[]): CategoryView {
		const view = new CategoryView();
		view.title = category.title;
		view.icon = category.icon;

		view.items = items.map((i) => ({id: i.id, description: i.description, price: i.price}));
		return view;
	}
}
