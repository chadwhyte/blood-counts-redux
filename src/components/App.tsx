import React, { FC } from 'react';
import './App.css';
import Dashboard from './dashboard/dashboard';

const App : FC<{}> = () => {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
