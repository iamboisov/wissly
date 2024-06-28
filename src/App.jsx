import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Home'
import Error from './Error'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
