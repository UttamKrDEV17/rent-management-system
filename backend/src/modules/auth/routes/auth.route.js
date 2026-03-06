import express from 'express';
import * as authController from '../controller/auth.controller.js';
import { loginSchema, ownerRegistrationSchema } from '../validation/auth.validation.js';
import { validateRequest } from '../../../middlewares/requestValidate.js';

const router = express.Router();

router.post('/register/owner',validateRequest(ownerRegistrationSchema), authController.ownerRegister);
router.post('/register/tenant', authController.tenantRegister);
router.post('/login', validateRequest(loginSchema), authController.login);
router.post('/refresh-token', authController.tokenAccessRefresh);
router.post('/logout', authController.logout);

export default router;