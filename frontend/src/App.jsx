import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import About from "./components/About"
import Idols from "./components/Idols"
import GiftItems from "./components/GiftItems";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="/idols"  element={<Idols/>}/>
      <Route path="/giftItems"  element={<GiftItems/>}/>
    </Routes>
    
    </BrowserRouter>

  )
}

export default App
