import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Login } from './Login'
import { Template } from './Template'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <p className='font-adelia'>ABC</p>
      <p className='font'>ABC</p> */}
      {/* <Login/> */}
      <Template/>
    </>
  )
}

export default App

