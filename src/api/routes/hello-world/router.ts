import { Router } from 'express';
import { helloWorld } from './controller';

const helloWorldRouter = Router()

.get('/', helloWorld);

export default helloWorldRouter;
