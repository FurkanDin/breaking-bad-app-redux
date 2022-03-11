import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
//pages
import Home from "./pages/Home/";
import Detail from "./pages/Detail/";
import Quotes from './pages/Quotes/';
import QuoteDetail from './pages/QuoteDetail/';

function App() {
  return (
    <div className="App">
      
        <nav className="nav_items">
          <ul>
            <li>
              <Link to="/">Characters</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
           
          </ul>
        </nav>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/char/:char_id" element={<Detail />} />
       
        <Route exact path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:quote_id" element={<QuoteDetail />} />
      </Routes>
    </div>
  );
}

export default App;
