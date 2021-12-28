import { Knex } from "knex";
import { ICategory } from "./category.model";
import { IItem } from "./item.model";

type UpdatedAt = { updated_at: Date };

declare module 'knex/types/tables' {
	interface Tables {
		category: Knex.CompositeTableType<
			ICategory,
			Pick<ICategory, 'id' | 'title' | 'icon'>,
			Partial<Omit<ICategory, 'id'>> & UpdatedAt
		>;
		item: Knex.CompositeTableType<
			IItem,
			Pick<IItem, 'id' | 'category' | 'description' | 'price'>,
			Partial<Omit<IItem, 'id'>> & UpdatedAt
		>;
	}
}
