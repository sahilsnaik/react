import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username :"hitesh",
    age:21
  }

  let newArr = [1,2,3,]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind test</h1>
    <Card username = "codewithsahil" />
    <Card username = "sahil"/>
    </>
  )
}

export default App
