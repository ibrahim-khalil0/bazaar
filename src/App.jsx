import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-[#2C3E50]'>hello world</h1>
      <h1 className='text-[#FDFEFE]'>hello world</h1>
      <h1 className='text-[#333333]'>hello world</h1>
      <h1 className='text-[#FF6B6B]'>hello world</h1>
      <h1 className='text-[#FCB543]'>hello world</h1>
    </>
  )
}

export default App
