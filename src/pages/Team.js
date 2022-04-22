import React from 'react'
import BannerImage from "../assets/pizza.jpeg";
import '../styles/Team/team.scss'

export default function Team() {
    return (
        <div className='team'>
            <div className='teamTop'
                style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className='teamBottom'>
                    <h1>Excited to Work and Play!</h1>
                    <p>Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.

                    </p>
                </div>
            </div>

        </div>
    )
}
