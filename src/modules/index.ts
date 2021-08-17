import { Router } from 'express';

import articleRoutes from './article';

const router = Router();

router.use(articleRoutes);

export default router;
