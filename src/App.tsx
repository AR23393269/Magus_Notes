import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { DarkModeProvider } from './interfaces/DarkMode'
import Home from './pages/Home'
import Notas from './pages/Notas'

function App() {
  


  return (
    <>
   <DarkModeProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notas" element={<Notas />} />
      </Routes>
    </DarkModeProvider>
      
    </>
  )
}

export default App
