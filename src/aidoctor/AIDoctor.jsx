import React, { useEffect, useState, useRef } from 'react';
import './AIDoctorStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE } from '../routes/ReactLinks';
import { LuLogIn } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import Navbar from '../components/layout/Navbar';
import { Config } from '../constant';

const AIDoctor = () => {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [age, setAge] = useState('');
   const [lastCheckup, setLastCheckup] = useState('');
   const [symptoms, setSymptoms] = useState('');
   const navigate = useNavigate();

   useEffect(() => {
      const hamburger = document.querySelector(".hamburger");
      const navBar = document.querySelector(".nav-bar");

      if (hamburger && navBar) {
         hamburger.onclick = function () {
            navBar.classList.toggle("active");
         };
      }
   }, []);
useEffect(() => {
  const user = localStorage.getItem(Config.userApiTokenName);
  if (!user) {
    navigate('/login'); // Redirect to home if user is already logged in
  }
}, []);
   //    useEffect(() => {
   //    const hamburgerers = document.querySelector(".hamburgerers");
   //       const navBarers = document.querySelector(".nav-barers");
   // 
   //       if (hamburgerers && navBarers) {
   //          hamburgerers.onclick = function () {
   //             navBarers.classList.toggle("active");
   //          };
   //       }
   //    }, []);

   // 

   const handleLogOut = () => {
      localStorage.removeItem('names');
      localStorage.removeItem('namers');
      localStorage.removeItem('email');
      localStorage.removeItem('passwords');
      localStorage.removeItem('firstName');
      localStorage.removeItem('lastName');
      localStorage.removeItem('age');
      localStorage.removeItem('lastCheckup');
      localStorage.removeItem('symptoms');
   };

   const addPatient = () => {
      if (!firstName || !lastName || !age || !lastCheckup || !symptoms) {
         alert('Please fill in all fields.');
         return;
      }

      const patient = {
         firstName,
         lastName,
         age,
         date: lastCheckup,
         symptoms,
      };

      const existingPatients = JSON.parse(localStorage.getItem('patients')) || [];
      const updatedPatients = [...existingPatients, patient];

      localStorage.setItem('patients', JSON.stringify(updatedPatients));

      alert('If the record was added!');
   };

   const [isOpen, setIsOpen] = useState(false);
   const dropdownRef = useRef(null);

   useClickOutside(dropdownRef, () => setIsOpen(false));



   function useClickOutside(ref, callback) {
      useEffect(() => {
         function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
               callback();
            }
         }
         document.addEventListener('mousedown', handleClickOutside);
         return () => {
            document.removeEventListener('mousedown', handleClickOutside);
         };
      }, [ref, callback]);
   }

   return (
      <div>

         <div className="main-color-div">

           <Navbar />

            <section>
               <div className="ai-main-div">
                  <div className="diagnory-one">
                     <div id="back">
                        <a href="/">{'< Back'}</a>
                     </div>
                  </div>
               </div>
            </section>

            <section>
               <div className="main-informative-input-box">
                  <div className="patient-div">
                     <h1>PATIENT INFORMATION</h1>
                  </div>
                  <div className="second-patient-input">
                     <div className="patient-input-div">
                        <input
                           type="text"
                           id="firstName"
                           value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}
                           placeholder="First Name *"
                        />
                        <input
                           type="text"
                           id="lastName"
                           value={lastName}
                           onChange={(e) => setLastName(e.target.value)}
                           placeholder="Last Name"
                        />
                        <input
                           type="number"
                           id="age"
                           value={age}
                           onChange={(e) => setAge(e.target.value)}
                           placeholder="Age *"
                        />
                        <input
                           type="date"
                           id="lastCheckup"
                           value={lastCheckup}
                           onChange={(e) => setLastCheckup(e.target.value)}
                           placeholder="Last Checkup"
                        />
                     </div>
                  </div>
                  <div className="patients-text-area">
                     <textarea
                        className="patient-text-area"
                        id="symptoms"
                        placeholder="Note: Symptoms"
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                     ></textarea>
                  </div>
                  <div className="patient-analyze cursor-pointer">
                     <button type="button" onClick={addPatient} className="cursor-pointer">
                        ANALYZER
                     </button>
                  </div>
               </div>
            </section>

         </div>
      </div>
   );
};

export default AIDoctor;