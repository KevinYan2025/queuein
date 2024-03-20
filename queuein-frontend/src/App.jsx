import { useState } from 'react'
import Hero from './landing/user/hero.jsx'
import UserQueue from './landing/user/userQueue.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import CreateQueue from './landing/owner/CreateQueue.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
            <Route path="/hero" element={<Hero/>}/>
            <Route path="/createQueue" element={<CreateQueue/>}/>
            <Route path="/UserQueue/:queueID" element={<UserQueue/>}/>
      </Routes>
        </BrowserRouter>
  )
}

export default App