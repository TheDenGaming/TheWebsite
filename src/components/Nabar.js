import { React, useState } from 'react'
import Logo from '../assets/TDG.PNG'
import { Link } from 'react-router-dom'
import ReorderIcon from '@material-ui/icons/Reorder';
import '../styles/NavBar/navbar.scss'

export default function Nabar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <Link to='/'><img src={Logo} /></Link>
                <div className='hiddenLinks'>
                    <Link to="/products"> Products </Link>
                    <Link to="/Team"> Team </Link>
                    <Link to="/Blog"> Blog </Link>
                    <Link to="/Careers"> Careers </Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to="/products"> Products </Link>
                <Link to="/Team"> Team </Link>
                <Link to="/Blog"> Blog </Link>
                <Link to="/Careers"> Careers </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}
