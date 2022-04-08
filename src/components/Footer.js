import React from 'react';
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer/Footer.scss";

export default function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <TwitterIcon />
                <FacebookIcon />
                <LinkedInIcon />
            </div>
            <p> &copy; 2022 The Den Gaming</p>
        </div>
    )
}
