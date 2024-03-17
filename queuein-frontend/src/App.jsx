import { useState } from 'react'
import Hero from './landing/user/hero.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
      <Hero />
      {/* Other components */}
    </div>
  
    </>
  )
}

export default App
