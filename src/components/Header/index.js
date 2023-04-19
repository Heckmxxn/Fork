import React from 'react';
import { FaHome, FaHeart, FaSearch, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';
import { User } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={25} title="Home" />
      </Link>
      <Link to="/favourites">
        <FaHeart size={25} title="Favourites" />
      </Link>
      <Link to="/search">
        <FaSearch size={25} title="Search" />
      </Link>
      <Link to="/login">
        <FaUserAlt size={25} title="Login" />
      </Link>
    </Nav>
  );
}
