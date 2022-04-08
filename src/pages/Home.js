import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home/Home.scss";

export default function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer' >
                <h1>The Den Gaming</h1>
                <p>Gamer's Empowered</p>
            </div>
        </div>
    )
}
