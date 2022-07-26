import { Router } from 'express';
import { helloWorld } from '../../controllers/helloWorld';

const router = Router()

.use('/test', helloWorld);

export default router;