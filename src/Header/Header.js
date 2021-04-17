import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import PropTypes from "prop-types"

function Header(props) {
  return (
    <header>
      {props.favorites[0] &&
        <Link to="/favorites" className="favorites-link">
          <button className="favorites-button">
            Your Favorites
          </button>
        </Link>
      }
      <h1>Projenerator!</h1>
      {!props.isHome &&
        <Link to="/" className="home-link">
          <button className="home-button" onClick={props.backHome}>
            Back to Home
          </button>
        </Link>
      }
    </header>
  )
}

Header.propTypes = {
  isHome: PropTypes.bool,
  favorites: PropTypes.array,
  backHome: PropTypes.func
}

export default Header
