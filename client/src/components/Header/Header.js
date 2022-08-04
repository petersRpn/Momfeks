import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className='row'>
        <div><Link className='logo' to='/'>MOMFEKS</Link></div>
        <div>
          <Link to='/cart'>cart</Link>
          <Link to='/signin'>sign in</Link>
        </div>
      </header>
  )
}
