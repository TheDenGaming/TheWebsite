import './App.css';
import Nabar from './components/Nabar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Team from './pages/Team';
import Careers from './pages/Careers';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Nabar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Team' element={<Team />} />
          <Route path='/Careers' element={<Careers />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
