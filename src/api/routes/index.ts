import { Router } from 'express';
import countryRouter from './countries';
import helloWorldRouter from './helloWorld'
import userRouter from './users';

const router = Router()

.use('/', helloWorldRouter)
.use('/countries', countryRouter)
.use('/users', userRouter)

export default router;
