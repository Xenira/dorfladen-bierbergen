import { Router } from "express";
import { ItemsController } from "../controllers/items.controller";

export const itemsRouter: Router = Router();

itemsRouter.get('', ItemsController.getItems);
itemsRouter.post('', ItemsController.addItem);
