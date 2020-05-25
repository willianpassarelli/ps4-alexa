import { Router } from 'express';
import { Device } from 'ps4-waker';

const statusRouter = Router();

statusRouter.get('/', async (request, response) => {
  try {
    const ps4 = new Device();
    const status = await ps4.getDeviceStatus();
    console.log(status);

    return response.json(status);
  } catch (error) {
    return response.json({error: 'Não foi possível detectar nenhum dispositivo PS4 conectado!'})
  }
})

export default statusRouter;
