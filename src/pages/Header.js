import React, { useState } from 'react';
import './header.css';
import NavListitem from '../components/NavListitem';
import navListData from '../data/navListData';
import Search from '../components/Search';
import Button from '../components/Button';

function Header({ scroll }) {
  const [navList, setNavList] = useState(navListData);

  const handleNavOnClick = id => {
    const newNavList = navList.map(nav => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });

    setNavList(newNavList);
  };

  return (
    <header className={`${scroll > 100 ? 'scrolled' : ''}`}>
      <a href="/" className="logo">Cinema</a>
      <ul className="nav">
        {navList.map(nav => (
          <NavListitem key={ nav._id } nav={ nav } navOnClick={ handleNavOnClick } />
        ))}
      </ul>
      <Search />
      <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name='SIGN IN' />
    </header>
  );
}

export default Header;
