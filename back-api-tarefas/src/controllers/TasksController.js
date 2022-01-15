const api = require('../services/api');

class TasksController {
    async listAll(req, res) {
        try {
          const response = await api.get('/tasks');
    
          return res.status(200).json(response.data);
    
        } catch (error) {
          return res.status(400).json("Falha ao listar as tarefas.");
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

      async delete(req, res) {
        try {
          const { id } = req.params;
    
          const response = await api.delete(`/tasks/${id}`);
    
          return res.status(200).json(response.data);
        } catch (error) {
          return res.status(400).json("Falha ao deletar a tarefa");
        }
      }

      async update(req, res) {
        try {
          const { id } = req.params;
          const { body } = req;
    
          const response = await api.put(`/tasks/${id}`, {
            ...body
          });
    
          return res.status(200).json(response.data);
        } catch (error) {
          return res.status(400).json("Falha ao atualizar a tarefa");
        }
      }

      async updateOnePropertie(req, res) {
        try {
          const { id } = req.params;
          const { body } = req;
    
          const response = await api.patch(`/tasks/${id}`, {
            ...body
          });
    
          return res.status(200).json(response.data);
        } catch (error) {
          return res.status(400).json("Falha ao atualizar a tarefa");
        }
      }

      async detailOne(req, res) {
        try {
          const { id } = req.params;
    
          const response = await api.get(`/tasks/${id}`);
    
          return res.status(200).json(response.data);
        } catch (error) {
          return res.status(400).json("Falha ao detalhar a tarefa");
        }
      }
}

module.exports = new TasksController();