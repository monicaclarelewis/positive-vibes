import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Quote from './pages/Quotes';
import News from './pages/News';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="quotes" element={<Quote />}/>
            <Route path="/news" element={<News /> }/>
        
          </Routes>
      </Router>
    </div>
  );
}

export default App;
