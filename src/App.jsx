import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import About from './components/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <NavBar />
    <ItemListContainer />
    <About />
    </div>
  )
}

export default App
