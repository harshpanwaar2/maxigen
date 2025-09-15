import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'

import './index.css'
import { Shop } from './pages/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Shop/>} />
      </Routes>
    </div>
      
    </>
  )
}

export default App
