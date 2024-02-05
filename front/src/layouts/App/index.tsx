import React from 'react';
import loadable from '@loadable/component'
import { Routes, Route } from 'react-router-dom';
import Navbar from '@layouts/Navbar';
import Notification from '@layouts/Notification';


const Article = loadable(() => import('@layouts/Article'))

function App() {
  return (
    <div style={{width:'100%',display:'flex',justifyContent:'space-between',height:`20rem`}} >
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Article/>}></Route>
        </Routes>
     <Notification></Notification>
    </div>
  );
}

export default App;
