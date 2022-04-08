import React from 'react'
import BannerImage from "../assets/pizza.jpeg";
import '../styles/Team/team.scss'

export default function Team() {
    return (
        <div className='team'>
            <div className='teamTop'
                style={{ backgroundImage: `url(${BannerImage})` }}>
            </div>
            <div className='teamBottom'>
                <h1>Excited to Work and Play!</h1>
                <p>Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.
                    Eget arcu dictum varius duis at consectetur lorem donec. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Montes nascetur ridiculus mus mauris vitae. Dignissim suspendisse in est ante in. Justo nec ultrices dui sapien eget mi proin sed. Mauris commodo quis imperdiet massa. Orci sagittis eu volutpat odio facilisis mauris sit. Arcu felis bibendum ut tristique. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Aenean et tortor at risus.
                    Ut consequat semper viverra nam libero justo laoreet. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Eget aliquet nibh praesent tristique.</p>
            </div>
        </div>
    )
}
