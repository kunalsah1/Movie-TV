import './App.css'
import MoviesSection from './components/MoviesSection'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tv from './components/Tv'
import TvSection from './components/TvSection'
import Home from './components/Home'

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<> <Home /></>} ></Route>
        </Routes>
        <Routes>
          <Route path='/movies' element={<> <MoviesSection /></>} ></Route>
        </Routes>
        <Routes>
          <Route path='/tv' element={<><TvSection /></>} ></Route>
        </Routes>
      </Router>


    </>
  )
}

export default App
