const { Router } = require("express");
const TasksController = require("./controllers/TasksController");

const routes = Router();

routes.get('/tasks', TasksController.listAll);

module.exports = routes;