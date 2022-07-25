import { Router } from 'express';
import helloWorldRouter from './hello-world/router';

const router = Router();

router.get('/', helloWorldRouter);

export default router;
