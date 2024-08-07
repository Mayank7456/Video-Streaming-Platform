import React from 'react';
import './navlistitem.css';

function NavListitem({nav, navOnClick}) {
  return (
    <li>
    <a
      href={nav.link}
      className={nav.active ? 'active' : ''}
      onClick={() => navOnClick(nav._id)}
    >
      {nav.name}
    </a>
  </li>
  
  );
}

export default NavListitem;
