import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";

class Nav extends React.Component{
    render(){
        return(
            <div className="nav-container">
                <div className='nav-content'>
                    <div className="nav-content__logo-container">
                        <Logo/>
                    </div>
                    <div className="nav-content__links-container">
                        <NavLink className="navlink" activeClassName="navlink--active" to='/' exact>Create jam</NavLink>
                        <NavLink className="navlink" activeClassName="navlink--active" to='/myjams' exact>My jams</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;