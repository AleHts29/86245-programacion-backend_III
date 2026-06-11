import { Router } from 'express';
import { compressStr } from '../controllers/compressionController.js';

const router = Router();

router.get('/', compressStr);

export default router;