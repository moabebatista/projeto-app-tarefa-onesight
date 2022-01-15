import React from 'react';
import Header from './Components/Header';
import UserContext from './Contexts/UserContext';

function App() {

  const valuesProvider = {}

  return (
    <div className="App">
      <Header></Header>
      <UserContext.Provider value={valuesProvider}>
      </UserContext.Provider>
    </div>
  );
}

export default App;
