import { Router } from 'express';
import statusRouter from './status.routes';
import onRouter from './on.routes';
import startRouter from './start.routes';
import offRouter from './off.routes';

const routes = Router();

routes.use('/start', startRouter);
routes.use('/status', statusRouter);
routes.use('/turnOn', onRouter);
routes.use('/turnOff', offRouter);

export default routes;
