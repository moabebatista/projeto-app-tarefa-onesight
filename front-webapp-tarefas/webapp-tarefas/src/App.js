import { useState } from 'react';
import Header from './Components/Header';
import TasksList from './Components/TasksList';
import UserContext from './Contexts/UserContext';
import ModalStorage from './Components/ModalStorage'

function App() {
  const [open, setOpen] = useState(false);

  const valuesProvider = {
    open, 
    setOpen
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
