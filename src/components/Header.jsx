import React, { useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className='flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10'>
      <a href='/' className='logo text-2xl font-bold text-accent'>
        Kushtarbek
      </a>

      <nav className='hidden md:block'>
        <ul className='flex'>
          <li>
            <a href='#about'>About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
