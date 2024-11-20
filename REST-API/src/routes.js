import { Router } from 'express';
import userController from './controllers/userController.js';

const routes = Router();

routes.use(userController);

routes.get('/', (req, res) => {
    res.send('It works!');
})

export default routes;