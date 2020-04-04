import React from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';

function Header() {
  return (
    <header className="">

       <h1 className="logo-text"><MenuBookIcon className="icon"/>note<span>Book</span></h1>
    </header>
  );
}

export default Header;