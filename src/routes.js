import Router from 'express';
const routes = Router();

routes.get('/hello', (req, res) => {
  return res.json({ message: 'Hello World!' });
})

export default routes;