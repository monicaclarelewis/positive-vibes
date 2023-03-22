import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Jokes from './pages/Jokes'
import News from  './pages/News';
import InspirationalQuotes from './pages/Quotes';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/jokes" element={<Jokes />}/>
            <Route path="quotes" element={<InspirationalQuotes />}/>
            <Route path="news" element={<news /> }/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
