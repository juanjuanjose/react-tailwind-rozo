import React from 'react'
import { Navbar } from '../Layouts/Navbar/Navbar';
import { ItemNavbar } from '../UI/ItemNavbar/ItemNavbar';



export const Header = () => {
  return (
    <header className="flex justify-around items-center  h-40 border-whiteh-24 bg-green-400" >
      <Navbar>
        <ItemNavbar style_a=" text-white text-base font-bold  " content="Inicio" />
        <ItemNavbar style_a=" text-white text-base font-bold  " content="Acerca De Mi" />
        <ItemNavbar style_a=" text-white text-base font-bold  " content="Portafolio" />
        <ItemNavbar style_a=" text-white text-base font-bold  " content="Contact Me" />
      </Navbar>
    </header>
  );
};