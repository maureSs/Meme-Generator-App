import React from 'react';
import '../style.css';
import trollface from '../image/trollface.png';

function Header() {
  return (
    <header className='header'>
      <img src={trollface} alt='Problem?' />
      <p>Meme Generator</p>
    </header>
  );
}

export default Header;
