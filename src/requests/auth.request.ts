import { check } from 'express-validator';
import { showApiError } from '../middleware/auth.middleware';

export const registerRequest = [
    check('username').exists(),
    check('password').exists(),
    showApiError
];