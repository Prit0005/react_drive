import React from 'react';
import { Provider } from 'react-redux';
import store from './components/reducer/store';
import Login from './components/login/Login';
import Register from './components/register/Register';
import List from './components/List';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Authentication & CRUD</h1>
        <Login />
        <Register />
        <List />
      </div>
    </Provider>
  );
}

export default App;
