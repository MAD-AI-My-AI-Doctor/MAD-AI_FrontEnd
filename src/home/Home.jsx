import React, { useEffect } from 'react';
import Button from '../components/button/Button';
import Card from '../components/card/Card';
import Cards from '../components/cards/Cards';
import DataCards from '../components/dataCards/DataCards';
import './HomeStyle.css'
import { Link, NavLink } from 'react-router';
import { ROUTE } from '../routes/ReactLinks';

const Home = () => {
 useEffect(() => {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".nav-bar");

  if (hamburger && navBar) {
    hamburger.onclick = function () {
      navBar.classList.toggle("active");
    };
  }
}, []);

  return (
    <div>
    <div className='main-div'>
      
      <header>
       <div className='main-navbars-div'>
        <div className="logo">
          <img id='logoOne' src={'/logoOne.png'} />
        </div>
        <nav className="nav-bar">
          <ul>
            <li>
              <a href="#" className="active">AI Doctor</a>
            </li>
            <li>
              <a href="#">Lab Test</a>
            </li>
            <li>
              <a href="#">How it Works</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className='login-button-diver'>
          <NavLink className='login' to={ROUTE.Login}>
            <button>Login</button>
          </NavLink>
        </div>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        </div>
      </header>

      <div className='new-main-div'>
      <div className='grid sm:grid-cols-2 md:items-center flex md:justify-items-center sm:grid-cols-1'>
        <div className='new-first-div grid sm:order-2 order-1'>
          <p id='well-come'>WELL-COME TO DOCTOR ONLINE</p>
          <h1 id='expert'>Expert Care, Anytime, Anywhere</h1>
          <p>AI-Driven Diagnosis Beyond Symptoms-Uncovering Root Causes and Connecting You With Expert Care</p>
          <div className='new-buttons-div'>
            <Button button={'LABSTEST'}/>
            <Button button={'SYMPTOMS'}/>
          </div>
        </div>
        <figure className='new-second-div grid sm:order-2 order-1'>
          <img className='new-image' src={'/doctor.png'} />
        </figure>
      </div>
      </div>

      <div className='third-div'>
        <div>
          <Cards />
        </div>
        <div className='third-div-part-one'>
          <Card />
        </div>
      </div>

      <div className='fourth-div grid sm:grid-cols-2 mt-6 flex justify-items-center sm:grid-cols-1'>
        <div className='part-one-of-four grid sm:order-2 order-1'>
          <h1 id='lets-start'>Lets start with your <strong id='first-name'>first name.</strong></h1>
          <input className='inputbox' type='text' placeholder='Type your firstname here' />
          <button className='book'>Book Appointment</button>
        </div>
        <figure className='part-two-of-four grid sm:order-2 order-1'>
          <img className='one-image' src={'/doctors.png'} />
        </figure>
      </div>

      <div className='fifth-div'>
        <h1 id='recent-blog'>Recent Blogs</h1>
        <div className='data-carders mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-[20px]'>
          <DataCards />
          <DataCards />
          <DataCards />
          <DataCards />
        </div>
      </div>

      <div className='footer-div'>
        <div className='footer-first-div'>
        <i class="ri-twitter-line"></i>
        <i class="ri-facebook-box-line"></i>
        <i class="ri-swap-line"></i>
        <i class="ri-instagram-line"></i>
        </div>
        <div className='footer-second-div'>

          <div className='footer-second-div-part-one'>
            <h1>Our Services</h1>
            <p>AI Diagnostic</p>
            <p>AI Test Diagnostic</p>
            <p>Specilist Recomendation</p>
          </div>

          <div className='footer-second-div-part-two'>
            <h1>Quick Links</h1>
            <p>AI Doctor</p>
            <p>Lab Test Analyser</p>
            <p>Find Specilist</p>
            <p>Contact</p>
            <p>Media</p>
            <p>Blogs</p>
          </div>

          <div className='footer-second-div-part-three'>
            <h1>Contact Us</h1>
            <p>Timing 24 Hours</p>
            <p>Contact Information</p>
            <p><i class="ri-smartphone-line"></i>+45-77777777</p>
            <p><i class="ri-mail-line"></i>Decoders@gmail.com</p>
            <div className='footer-button-div'>
              <button className='call-button'>Call</button>
              <button className='call-contact-button'>Contact</button>
            </div>
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Home