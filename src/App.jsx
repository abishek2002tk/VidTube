import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video';
import './App.css';

const App = () => {

  const [sidebar, setSidebar] = useState(true);

  const [darkmode, setDarkMode] = useState(false);


  return (
    <div className={`${darkmode ? 'Dark' : 'White'}`}>
      <Navbar setSidebar={setSidebar} setDarkMode={setDarkMode}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} darkmode={darkmode}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video darkmode={darkmode}/>} />
      </Routes>
    </div>
  )
}

export default App
