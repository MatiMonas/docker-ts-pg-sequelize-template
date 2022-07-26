import { Router } from 'express';
import helloWorldRouter from './helloWorld'

const router = Router()

.use('/', helloWorldRouter);

export default router;
