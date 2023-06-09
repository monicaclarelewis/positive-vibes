import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import News from './pages/News';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/news" element={<News /> }/>
        
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
