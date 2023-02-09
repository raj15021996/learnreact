import { Routes, Route,Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Outer from "./Outer";

export default function Main() {
  return (
    <div className="App">
    <h1>website</h1>

    <nav>
      <ul>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about?type=college">About College</Link>
        <br/>
        <Link to="/about?type=school">About School</Link>
        <br />
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Outer />} />
    </Routes>

  </div>
    
  );
}


