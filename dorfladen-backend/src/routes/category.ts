import { Router } from "express";
import { ItemsController } from "../controllers/items.controller";

export const categoryRouter: Router = Router();

categoryRouter.get('', ItemsController.getItems);
categoryRouter.post('', ItemsController.addCategory);
