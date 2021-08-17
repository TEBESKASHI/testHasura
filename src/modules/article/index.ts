import { Router } from 'express';

import { ArticleController } from './controller';

import { attachControllers } from '@decorators/express';

const router = Router();

attachControllers(router, [ArticleController]);

export default router;
