import Hero from "../Compoment/Hero";
import Message from "../Compoment/Message";
import Products from "../Compoment/Products";


function Landing() {   
    return (
        <>
            <div className="main-content">
                
                <Hero />               

                <Message />

                <Products />

            </div>
            
        </>
    );
}

export default Landing;