import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Routes, Route, Router} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/blog/:id' element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
