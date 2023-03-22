import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
      </Router>
    </div>
  );
}

export default App;
