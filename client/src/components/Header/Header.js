import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className='row'>
        <div><a className='logo' href='#'>MOMFEKS</a></div>
        <div>
            <a href='#'>cart</a>
            <a href='#'> Sign in</a>
        </div>
      </header>
  )
}
