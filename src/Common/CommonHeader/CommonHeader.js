import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.scss'

const CommonHeader = () => (
            <nav id="demo-nav">
            <span>NJK</span>
                <div className="nav-link">
                <NavLink to="/DemoOne">Bootstrap</NavLink>
                <NavLink to="/DemoTwo">Material</NavLink>
                <NavLink to="/">Custom</NavLink>
                </div>
            </nav>
)

export default CommonHeader