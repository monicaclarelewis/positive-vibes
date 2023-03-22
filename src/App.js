import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Jokes from './pages/Jokes';
<<<<<<< HEAD
import News from  './pages/News';
=======
import InspirationalQuotes from './pages/Quotes';
>>>>>>> 5976d91be4ce09eab372040e3679b7e34b9aa6ac

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/jokes" element={<Jokes />}/>
<<<<<<< HEAD
            <Route path="/news" element={<News />}/>
=======
            <Route path="quotes" element={<InspirationalQuotes />}/>
>>>>>>> 5976d91be4ce09eab372040e3679b7e34b9aa6ac
          </Routes>
      </Router>
    </div>
  );
}

export default App;
