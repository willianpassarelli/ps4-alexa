import { Router } from 'express';
import { Device } from 'ps4-waker';

const offRouter = Router();

offRouter.get('/', async (request, response) => {
  try {
    const ps4 = new Device();
    const turnOn = await ps4.turnOff().then(() => ps4.close());

    return response.json(turnOn);
  } catch (error) {
    return response.json({error: 'Não foi possível detectar nenhum dispositivo PS4 conectado!'})
  }
})

export default offRouter;
