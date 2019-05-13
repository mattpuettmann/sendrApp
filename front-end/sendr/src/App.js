import React from 'react';
import './App.css';
import UserContainer from './UserContainer/UserContainer';

function App() {
  return (
    <div className="App">
      <h2>SENDR</h2>
        Username: <input type="text" name="username" />
        Password: <input type="password" name="password" />
        <input type="submit" />
        <UserContainer />
    </div>
  );
}

export default App;
