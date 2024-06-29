import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Home'
import Articles from './Articles'
import Startups from './Startups'
import Business from './Business'
import About from './About'
import OnProgress from './OnProgress'
import Error from './Error'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/ideas" element={<OnProgress />} />
        <Route path="/about" element={<OnProgress />} />
        <Route path="/communication" element={<OnProgress />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
