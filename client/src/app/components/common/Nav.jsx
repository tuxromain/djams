import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";

class Nav extends React.Component{

    showMenu(){
        const mobile = document.getElementsByClassName('nav-mobile-content');
        mobile[0].classList.add('show');
    }

    closeMenu(){
        const mobile = document.getElementsByClassName('nav-mobile-content');
        mobile[0].classList.remove('show');
    }

    render(){
        return(
            <div className="nav-container">
                <div className='nav-content'>
                    <div className="nav-content__logo-container">
                        <Logo/>
                    </div>
                    <div className="nav-content--laptop">
                        <div className="nav-content__links-container">
                            <NavLink className="navlink" activeClassName="navlink--active" to='/' exact>Create jam</NavLink>
                            <NavLink className="navlink" activeClassName="navlink--active" to='/myjams' exact>My jams</NavLink>
                        </div>
                    </div>
                    <div className="nav-content--mobile">
                        <div onClick={() => this.showMenu()}  className="menu-burger">
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="nav-mobile-content">
                    <NavLink onClick={() => this.closeMenu()} className="navlink navlink-white" activeClassName="navlink--active navlink-white" to='/' exact>Create jam</NavLink>
                    <NavLink onClick={() => this.closeMenu()} className="navlink navlink-white" activeClassName="navlink--active navlink-white" to='/myjams' exact>My jams</NavLink>
                    <p className="close-mobile-menu" onClick={() => this.closeMenu()}>Close</p>
                </div>
            </div>
        )
    }
}

export default Nav;