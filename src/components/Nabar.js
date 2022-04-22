import { React, useState } from 'react'
import Logo from '../assets/TDG-Letters.PNG'
import { Link, NavLink } from 'react-router-dom'
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
                <NavLink to='/'><img src={Logo} /></NavLink>
                <div className='hiddenLinks'>
                    <NavLink to="/products"> Products </NavLink>
                    <NavLink to="/Team"> Team </NavLink>
                    <NavLink to="/Blog"> Blog </NavLink>
                    <NavLink to="/Careers"> Careers </NavLink>
                </div>
            </div>
            <div className='rightSide'>
                <NavLink to="/products"> Products </NavLink>
                <NavLink to="/Team"> Team </NavLink>
                <NavLink to="/Blog"> Blog </NavLink>
                <NavLink to="/Careers"> Careers </NavLink>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>

    )
}
