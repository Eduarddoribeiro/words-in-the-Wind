import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PoemPage from "./components/PoemPage";
import Layout from "./components/Layout"; 
import About from "./components/About";
import Poems from "./components/Poems";
function App() {
  return (
    
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Poems />} />
          <Route path="poem/:slug" element={<PoemPage/>} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
   
  );
}

export default App;
