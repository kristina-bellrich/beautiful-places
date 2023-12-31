import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css";

 import Home from "./Home";
 import Contact from "./contact/Contact";
import About from "./about/About";


function App() {

  return( <Router >
  <nav>
    <Link className="link" to="/">Home </Link>
<Link className="link" to="/about">About </Link>
<Link className="link" to="/contact">Contact </Link>
  </nav>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
</Router>
)
}

export default App;
