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

import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <header>

<div className="stars-container">
  {Array.from({ length: 50 }).map((_, i) => (
    <div className="star" key={i}></div>
  ))}
</div>


        <nav>
            <p><img className='imgPortifolio' src="./img/me.jpg" alt="" /> Portfolio</p>
            <div className='divHome'>
                <a href="#about">AboutMe</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
          <Link to={'crut'}> <button className='but3 text-white'>Hire Me</button></Link>
        </nav>


        {/* intraduction================ */}


        <div className='divIntraduction'>
          <div className='divimg'>
            <img src="./img/me.jpg" alt="" />
              <div className='divMatnInto'>
                <p>Hi, welcome to my portfolio</p>
                <h1>I'm <span>Sherdorbek</span> Abduqahhorov</h1>
                <p>Frontend Developer | Passionate about creating modern, responsive websites | IELTS7</p>
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