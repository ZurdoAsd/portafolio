import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home.jsx";
import Detailes from "./home/Details.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>    
        <Route path="/" element={<Home />}  />
        <Route exact path="/home/:id" element={<Detailes/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
