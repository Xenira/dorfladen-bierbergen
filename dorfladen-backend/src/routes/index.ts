import { Request, Response, Router } from 'express';
import { check } from 'express-validator';
import { authorize } from 'passport';
import Authorization from '../config/passport';

// Import used controllers
import * as userCtrl from '../controllers/user.controller';
import { categoryRouter } from './category';
import { itemsRouter } from './items';

const router: Router = Router();

router.get('/login', userCtrl.getCurrentUser);
router.post(
	'/login',
	check('email').isString().trim().isEmail().normalizeEmail(),
	// authorize('local', { failWithError: true }),
	Authorization.login
);
router.post('/logout', (req: Request, res: Response) => {
	req.logout();
	res.sendStatus(204);
});
router.post('/register', userCtrl.register);
router.use('/item', itemsRouter);
router.use('/category', categoryRouter);

export default router;
