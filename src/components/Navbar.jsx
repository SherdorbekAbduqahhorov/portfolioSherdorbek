import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaXmark } from "react-icons/fa6";
import { GiSharpCrown } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { GoFileDirectoryFill } from "react-icons/go";
import { GrServices } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";

function Navbar() {
   const [menu, setMenu] = useState(false);
  return (
    <header>

<div className="stars-container">
  {Array.from({ length: 50 }).map((_, i) => (
    <div className="star" key={i}></div>
  ))}
</div>
    <nav className="w-full top-0 left-0 px-[25px] py-[15px] flex justify-between items-center z-[9999] relative">

      <p className="flex items-center gap-2">
        <img className="imgPortifolio w-[35px] rounded-full" src="./img/me.jpg" alt="" />
        Portfolio
      </p>

      <div className="divHome hidden md:flex gap-[30px]">
        <div className='Homediv flex items-center gap-[5px]'><IoIosContact className='w-[22px] h-[22px]'/><a href="#about">About</a></div>
        <div className='Homediv flex items-center gap-[5px]'><GoFileDirectoryFill className='w-[22px] h-[22px]'/><a href="#about">Projects</a></div>
        <div className='Homediv flex items-center gap-[5px]'><GrServices className='w-[22px] h-[22px]'/><a href="#about">Services</a></div>
        <div className='Homediv flex items-center gap-[5px]'><MdContactPhone className='w-[22px] h-[22px]'/><a href="#about">Contact</a></div>
      </div>

      <Link to={"crut"} className="hidden md:block">
        <button className="but3 text-white">Hire Me</button>
      </Link>

   
      <div className="md:hidden text-2xl cursor-pointer">
        {menu ? (
          <div className='flex gap-[15px]'><GiSharpCrown className='xikin' /><FaXmark className='xikin' onClick={() => setMenu(false)} /></div>
        ) : (
          <div className='flex gap-[15px]'><GiSharpCrown className='xikin'/><FaBars className='xikin' onClick={() => setMenu(true)} /></div>
        )}
      </div>

      
      {menu && (
        <div className="absolute top-[70px] text-white flex flex-col gap-[12px] py-8 px-6 md:hidden shadow-xl rounded-l-xl">
        <div className='Homediv flex items-center gap-[5px]'><IoIosContact className='w-[22px] h-[22px]'/><a href="#about">About</a></div>
        <div className='Homediv flex items-center gap-[5px]'><GoFileDirectoryFill className='w-[22px] h-[22px]'/><a href="#about">Projects</a></div>
        <div className='Homediv flex items-center gap-[5px]'><GrServices className='w-[22px] h-[22px]'/><a href="#about">Services</a></div>
        <div className='Homediv flex items-center gap-[5px]'><MdContactPhone className='w-[22px] h-[22px]'/><a href="#about">Contact</a></div>
</div>
      )}
    </nav>


        {/* intraduction================ */}


        <div className='divIntraduction'>
          <div className='divimg'>
            <img src="./img/me.jpg" alt="" />
              <div className='divMatnInto'>
                <p>Hi, welcome to my portfolio</p>
                <h1>I'm <span>Sherdorbek</span> Abduqahhorov</h1>
                <h2>Frontend Developer</h2>
                <div className='buttonlar'>
                    <button className='but1'><a className='abutt' href="#projects">View Projects</a></button>
                    <button className='but2'><a className='abutt' href="#contact">Contact Me</a></button>
                </div>
                 <div className='iconsDiv'>
                <a href="https://www.instagram.com/sherdorbek_770_" target="_blank" rel="noopener noreferrer">
  <FaInstagram className='icon'/>
</a>

<a href="https://t.me/Andrew77_77" target="_blank" rel="noopener noreferrer">
  <BiLogoTelegram className='icon'/>
</a>

<a href="https://github.com/SherdorbekAbduqahhorov" target="_blank" rel="noopener noreferrer">
  <IoLogoGithub className='icon'/>
</a>

            </div>
            </div>
          </div>

          <div className='iconsline'>
  <FaHtml5 className='iconChisiq html5'/>
  <FaJsSquare className='iconChisiq book'/>
  <FaReact className='iconChisiq react'/>
  <FaNode className='iconChisiq reactos'/>
  <SiNextdotjs className='iconChisiq vite'/>
  <FaCss3Alt className='iconChisiq css3'/>
  <IoLogoGithub className='iconChisiq github'/>
  <SiTailwindcss className='iconChisiq tailwind'/>
          </div>
        </div>
    </header>
  )
}

export default Navbar