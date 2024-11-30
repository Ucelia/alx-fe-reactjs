import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Routes, Route, Router, Navigate} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/blog/:id' element={<BlogPost />} />
        <Route path='/profile/*' element={isAuthenticated ? <Profile /> : <Navigate to="/profile" />} />
      </Routes>
    </Router>
  )
}

export default App
