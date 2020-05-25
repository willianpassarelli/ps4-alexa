import { Router } from 'express';
import { Device } from 'ps4-waker';

const startRouter = Router();

startRouter.post('/', async (request, response) => {
  try {
    const { titleId } = request.body;

    const ps4 = new Device();
    const initApp = await ps4.startTitle(titleId);

    return response.json(initApp);
  } catch (error) {
    return response.json({error: "Não foi possivel inicializar o aplicativo informado!"});
  }
})

export default startRouter;
