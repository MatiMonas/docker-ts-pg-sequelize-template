import { Router } from 'express';
import helloWorldRouter from './hello-world/router';

const router = Router()

.use('/test', helloWorldRouter);

export default router;
