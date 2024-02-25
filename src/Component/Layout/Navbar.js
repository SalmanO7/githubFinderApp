import React from "react";
import PropType from 'prop-types';
import './Navbar.css';


const Navbar = (props) => {



    return (
        <nav className="navbar">
            <div className="navbar">
                <h1> 
                    <i className={props.icon}></i>{props.title}
                </h1>
            </div>
        </nav>
    )
}

Navbar.propType = {
    title: PropType.string.isRequired,
    icon: PropType.string.isRequired,
};


export default Navbar