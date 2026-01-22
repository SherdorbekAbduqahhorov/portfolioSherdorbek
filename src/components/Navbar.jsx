import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiReactos } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";



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
            </div>
          </div>

          <div className='iconsline'>
  <FaHtml5 className='iconChisiq html5'/>
  <IoBookSharp className='iconChisiq book'/>
  <FaReact className='iconChisiq react'/>
  <SiReactos className='iconChisiq reactos'/>
  <SiVite className='iconChisiq vite'/>
  <FaCss3Alt className='iconChisiq css3'/>
  <IoLogoGithub className='iconChisiq github'/>
  <SiTailwindcss className='iconChisiq tailwind'/>
          </div>
        </div>


{/* mainPart================================================ */}


    <main>
        <section className='container sec1'>
            <h1 id="about">About me</h1>
            <p>
            I am Sherdorbek Abduqahhorov, an 18-year-old Frontend Developer based in Fergana, Uzbekistan.My IELTS Band 7, I enjoy coding, watching anime, and playing video games, and my perfect day is coffee, coding, music, and anime. I aspire to work in Japan, inspired by its discipline, advanced technology, and clean design philosophy. My goal is to become a world-class Frontend Engineer, build impactful global products, and achieve professional excellence before the age of 25.
            </p>
        </section>
        
        <section className='container sec2'>
            <h1 id="skills" className='h11'>Skills</h1>
            <div className='div5'>
            <div><FaHtml5 className='skillIcons'/><p>HTML</p></div>
            <div><FaCss3Alt className='skillIcons'/><p>CSS</p></div>
            <div><SiTailwindcss className='skillIcons'/><p>Tailwind CSS</p></div>
            <div><FaJsSquare className='skillIcons'/><p>JavaSkript</p></div>
            <div><FaReact className='skillIcons'/>React</div>
            </div>
        </section>
        <section className='container sec3'>
  <h1 id="projects">Projects</h1>
  <div className='projectsGrid'>
    {/* Project 1 */}
    <a href="https://github.com/SherdorbekAbduqahhorov/blogify" target="_blank" rel="noopener noreferrer" className='projectCard'>
      <div className='projectContent'>
        <h2>Blogify</h2>
        <p>Modern blog platform built with React, TailwindCSS & Vite</p>
      </div>
    </a>

    {/* Project 2 */}
    <div className='projectCard comingSoon'>
      <div className='projectContent'>
        <h2>Coming Soon</h2>
        <p>Placeholder for future project</p>
      </div>
    </div>

    {/* Project 3 */}
    <div className='projectCard comingSoon bgimg1'>
      <div className='projectContent'>
        <h2>Coming Soon</h2>
        <p>Placeholder for future project</p>
      </div>
    </div>

    {/* Project 4 */}
    <div className='projectCard comingSoon'>
      <div className='projectContent'>
        <h2>Coming Soon</h2>
        <p>Placeholder for future project</p>
      </div>
    </div>
  </div>
</section>

<section className="container sec4">
      <h1 id='contact'>Contact Me</h1>
      <div className="contactGrid">
        <a href="tel:+998903686757" className="contactCard">
          <FaPhoneAlt className="contactIcon" />
          <p>Phone</p>
        </a>

        <a href="https://t.me/Andrew77_77" target="_blank" rel="noopener noreferrer" className="contactCard">
          <BiLogoTelegram className="contactIcon" />
          <p>Telegram</p>
        </a>

        <a href="https://www.instagram.com/sherdorbek_770_" target="_blank" rel="noopener noreferrer" className="contactCard">
          <FaInstagram className="contactIcon" />
          <p>Instagram</p>
        </a>

        <a href="https://github.com/SherdorbekAbduqahhorov" target="_blank" rel="noopener noreferrer" className="contactCard">
          <FaGithub className="contactIcon" />
          <p>GitHub</p>
        </a>

        <a href="mailto:abduqahhorovsherdorbek770@gmail.com" className="contactCard">
          <IoMail className="contactIcon" />
          <p>Email</p>
        </a>
      </div>
    </section>

    </main>
    </header>
  )
}

export default Navbar