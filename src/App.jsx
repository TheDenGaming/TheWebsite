import {Routes, Route } from 'react-router-dom';
import Header from "./Compoment/Header";
import Footer from "./Compoment/Footer";
import Landing from "./Pages/Landing";
import Product_Page from './Pages/Product_page';
import Team_Page from './Pages/Team_page';
import PageNotFound from './Pages/PageNotFound';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './index.css';

function App(){
    
    return(
        <>   
            <div className="main_wrap">        
                <Header />
                <Routes>
                    <Route path="/" element={<Landing/>} />
                    {/* <Route exact path="/home" element={<Landing/>} /> */}
                    <Route exact path="/product" element={<Product_Page/>} />
                    <Route exact path="/team" element={<Team_Page/>} />
                    {/* <Route path="*" element={<PageNotFound/>} /> */}
                </Routes>
                <Footer />
            </div>
        </>
    );
}


export default App;