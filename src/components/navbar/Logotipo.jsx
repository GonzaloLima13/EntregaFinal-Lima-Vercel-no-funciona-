import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/palanca.png';

const Logotipo = () => {
  return (
    <NavLink to="/" className="my-auto mx-0">
      <img
        src={logo}
        alt="GLGames"
        className="w-[60px] h-[40px] md:w-[80px] md:h-[60px]"
      />
    </NavLink>
  );
};

export default Logotipo;