import { Router } from 'express';
import { getQueryNumeral } from '../handlers/queryHandler.mjs';

const router = Router();

router.get('/romannumeral', getQueryNumeral);

export default router;