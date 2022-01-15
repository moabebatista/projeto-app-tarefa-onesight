import React from 'react';
import Header from './Components/Header';
import TasksList from './Components/TasksList';
import UserContext from './Contexts/UserContext';

function App() {

  const valuesProvider = {}

  return (
    <div className="App">
      <Header />
      <UserContext.Provider value={valuesProvider}>
        <main className="container--main">
          <TasksList />
        </main>
      </UserContext.Provider>
    </div>
  );
}

export default App;
