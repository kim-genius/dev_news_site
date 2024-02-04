import React from 'react';
import loadable from '@loadable/component'
import { Routes, Route } from 'react-router-dom';
import Navbar from '@layouts/Navbar';
import Notification from '@layouts/Notification';


const Home = loadable(() => import('@pages/Home'))

function App() {
  return (
    <div style={{width:'100%',display:'flex',justifyContent:'space-between'}} >
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
     <Notification></Notification>
    </div>
  );
}

export default App;
