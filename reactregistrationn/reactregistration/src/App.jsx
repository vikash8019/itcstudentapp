import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './component/Registration'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={ <Login />} />
    <Route path='/register' element={<Registration />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
