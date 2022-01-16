import { useEffect, useState } from 'react';
import Header from './Components/Header';
import TasksList from './Components/TasksList';
import UserContext from './Contexts/UserContext';
import ModalStorage from './Components/ModalStorage'

function App() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const valuesProvider = {
    open, 
    setOpen,
    tasks, 
    setTasks
  }

  useEffect(() => {
    handleLoadTasks();
  },[])

  async function handleLoadTasks () {
    const response = await fetch('http://localhost:3334/tasks', {
      method: 'GET'
    });

    const data = await response.json();
    setTasks(data);
  }

  return (
    <div className="App">
      <Header />
      <UserContext.Provider value={valuesProvider}>
        <main className="container--main">
        <button 
          className="btn-insert-task"
          onClick={() => setOpen(true)}
        >
          Adicionar Tarefa
        </button>
          <TasksList />
        </main>
        {open && <ModalStorage />}
      </UserContext.Provider>
    </div>
  );
}

export default App;
