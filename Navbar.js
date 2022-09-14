import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from "react"
import React from 'react'
import "../main.css";

export default function Navbar() {
     const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  
    return (

    <header>
        <img src="./logo512.png"></img>
        <nav ref={navRef} >
            <a href='./#' >Home</a>
            <a href='./#' >Previous Work</a>
            <a href='./#' >Blogs</a>
            <a href='./#' >Social Links</a>
            <a href='./#' >Contact</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar} >
            <FaTimes />
            </button>
            
        </nav>
        <button className="nav-btn" onClick={showNavbar} >
            <FaBars />
        </button>
    </header>
  )
}


//ref={useRef}
//