import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <nav className="ink-navigation">
      <ul className="menu horizontal black">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;