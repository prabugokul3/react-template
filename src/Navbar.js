import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
// import logo from './images/logo.png'
import './Navbar.css';
import './App.css';
import { Link } from 'react-scroll';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Magazine from './Magazine';

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)


    return (

        <div className='header'>
            <img src="https://www.wallpapertip.com/wmimgs/4-48324_bmw-m4-2019-4k-4k-wallpaper-car-bmw.jpg" className="background" ></img>

            <nav className='navbar'>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff', position: 'relative' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff', position: 'relative' }} />)}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link className="metro" to="/" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="metro" to={"magazine"} onClick={closeMenu}>Magazine</Link>
                    </li>
                    <li className='nav-item'>
                            <Link className="metro" >Events</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="metro">Podcasts</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="metro">ES sports</Link>
                        </li>
                    <img src="https://www.bmw.com/etc.clientlibs/settings/wcm/designs/bmwcom/base/resources/ci2020/img/logo-light.svg" width="50px"  ></img>
                </ul>
               
            </nav>
        </div >




    )
}

export default Navbar