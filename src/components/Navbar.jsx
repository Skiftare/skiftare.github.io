import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Ваше Имя</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Главная</Link>
        <Link to="/about">Обо мне</Link>
        <Link to="/projects">Проекты</Link>
        <Link to="/contact">Контакты</Link>
      </div>
    </nav>
  );
};

export default Navbar; 