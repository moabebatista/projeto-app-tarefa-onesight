const { Router } = require("express");
const TasksController = require("./controllers/TasksController");

const routes = Router();

routes.get('/tasks', TasksController.listAll);
routes.post('/tasks', TasksController.create);

module.exports = routes;