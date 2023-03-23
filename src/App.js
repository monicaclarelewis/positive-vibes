import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Jokes from './pages/Jokes';
import Test from './components/test'
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
            <Route path="/jokes" element={<Jokes />}/>
            <Route path="quotes" element={<Quote />}/>
            <Route path="/news" element={<News /> }/>
            <Route path="test" element={<test /> }/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
