const api = require('../services/api');

class TasksController {
    async listAll(req, res) {
        try {
          const response = await api.get('/tasks');
    
          return res.status(200).json(response.data);
    
        } catch (error) {
          return res.status(400).json("Falha ao listar as tarefa.");
        }
      }

      async create(req, res) {
        try {
          const { body } = req;
    
          const response = await api.post('/tasks', {
            ...body
          });
    
          return res.status(200).json(response.data);
        } catch (error) {
          return res.status(400).json("Falha ao criar uma tarefa");
        }
      }
}

module.exports = new TasksController();