import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

function Header(props) {
  return (
    <header>
      {props.favorites[0] &&
        <Link to="/favorites"><button className="favorites-button">Your Favorites</button></Link>
      }
      The Project Project
      {!props.isHome &&
        <Link to="/"><button className="home-button">Back to Home</button></Link>
      }
    </header>
  )
}
export default Header
