import React from 'react';

function Footer() {

    const currentYear = new Date().getFullYear();
    
  return (
    <footer className="">
      <p className="footer-text">Copyrights &copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;