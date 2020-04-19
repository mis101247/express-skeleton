// src/routes/auth.route.ts

import Route from './route';
import AuthController from '../controllers/auth.controller';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { registerRequest } from '../requests/auth.request';

class AuthRoute extends Route {
    private authController = new AuthController();

    constructor() {
        super();
        this.prefix = '/auth';
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.post('/register', registerRequest, this.authController.register);
    }
}

export default AuthRoute;