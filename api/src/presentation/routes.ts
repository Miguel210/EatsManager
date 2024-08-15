import { Router } from "express";




export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        router.get('/api/user', (req, res) => {
            res.send('Hello World!')
        }
        );

        return router;
    }
}