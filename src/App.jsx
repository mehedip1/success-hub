import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <nav  >
       <div className="text-5xl text-white text-center md-12 w-5/6 h-96 mx-auto p-10  lg:mt-40 h-50% bg-gradient-to-r from-sky-300 to-indigo-700	font-bold ">
             <h1 className='my-5 mb-5 mt-10	'>
               Job Landing Page
            </h1>
            <p>Design</p> 
       </div>
    </nav>
  )
}

export default App
