import { Request, Response } from 'express';

class AuthController {
    register(req: Request, res: Response) {
        res.send('register');
    }
}

export default AuthController;