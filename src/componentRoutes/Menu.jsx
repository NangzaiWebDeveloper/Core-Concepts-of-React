import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({isActive})=> isActive ? "active-item" : "not-active"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "active-item" : "not-active"} to="/about">About</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "active-item" : "not-active"} to="/document">Document</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? "active-item" : "not-active"} to="/product">Product</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;