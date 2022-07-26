import { Router } from 'express';
import countryRouter from './countries';
import helloWorldRouter from './helloWorld'

const router = Router()

.use('/', helloWorldRouter)
.use('/countries', countryRouter)

export default router;
