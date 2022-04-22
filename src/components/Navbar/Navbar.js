import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/TDG-Letters.PNG';
import { MenuItems } from "./MenuItems";
import '../../styles/NavBar/Navbar.css';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            < nav className="NavbarItems" >
                <NavLink to='/' className='navbar-logo'><img src={Logo} width={70} /></NavLink>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu '}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.url} className={item.cName} >{item.title}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar; 