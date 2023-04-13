import React from 'react'
import { Outlet } from 'react-router-dom';
import "./styles.scss"


function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
