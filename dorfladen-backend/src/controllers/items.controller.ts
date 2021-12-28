import { Request, Response } from 'express';
import { check } from 'express-validator';
import { Category } from "../models/category.model";
import { Item } from "../models/item.model";
import { CategoryView, ICategoryView } from "../views/items.view";

export class ItemsController {
	static getItems = [
		async (req: Request, res: Response) => {
			const result: ICategoryView[] = [];
			const categories = await Category.getCategories();
			for (const category of categories) {
				const items = await Item.getItems(category);
				result.push(CategoryView.fromModle(category, items));
			}
			res.json(result);
		}
	];

	static addCategory = [
		check('title').isString().trim().stripLow().escape(),
		check('icon').isString().trim().stripLow().escape(),
		async (req: Request, res: Response) => {
			res.json(await Category.addCategory(req.body.title, req.body.icon));
		}
	]

	static addItem = [
		check('description').isString().trim().stripLow().escape(),
		check('category').isString().trim().stripLow().escape(),
		check('price').isInt({allow_leading_zeroes: false, min: 0}),
		async (req: Request, res: Response) => {
			res.json(await Item.addItem(req.body.description, req.body.price, req.body.category));
		}
	]

}
