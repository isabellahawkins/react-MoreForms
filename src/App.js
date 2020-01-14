import React, { useState } from 'react';
import './App.css';
import FormList from './components/FormList';
import Userform from './components/Userform';

function App() {
  const [ state, setState ] = useState({
    users: []
  });

  const userAdded = user => {
    console.log("User was created in the form", user);
    setState({users: [...state.users, user]});
  }

  return (
    <div className="container">
    <div>
      <h1>Register</h1>
    </div>
    <Userform addUser={userAdded}/>
    <hr />
    <FormList users={state.users} />
  </div>
  );
}

export default App;
