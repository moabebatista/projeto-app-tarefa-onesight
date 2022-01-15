const { Router } = require("express");
const TasksController = require("./controllers/TasksController");

const routes = Router();

routes.get('/tasks', TasksController.listAll);
routes.post('/tasks', TasksController.create);
routes.delete('/tasks/:id', TasksController.delete);
routes.put('/tasks/:id', TasksController.update);

module.exports = routes;