import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeView from './Views/Home/HomeView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeView />
    </>
  )
}

export default App
