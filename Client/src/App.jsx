import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Enquire from './Component/Enquire'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Enquire />
     </div>
        
    </>
  )
}

export default App
