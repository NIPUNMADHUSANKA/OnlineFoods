import React,{useState} from 'react';
import Logo from '../assets/pizzaLogo.png'
import {Link} from 'react-router-dom';
import {Menu} from '@material-ui/icons';
import '../styles/Navbar.css'

function Navbar() {
  
  const [open, setopen] = useState(false)

  const toggleNavbar = () =>{
      setopen(!open)
  }

  return (
    <div className='navbar'>
        <div className='leftSide' id={open ? "open" : "close"}>
            <img src={Logo} />

            <div className='hiddenLinks'>
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>

        </div>

        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

            <button onClick={toggleNavbar}>
              <Menu />
            </button>

        </div>
    </div>
  )
}

export default Navbar;