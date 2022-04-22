import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Team from './pages/Team';
import Careers from './pages/Careers';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
