import React, { useEffect, useState } from 'react';
import './LoginStyle.css';
import { Link, NavLink, useNavigate } from 'react-router';
import { ROUTE } from '../routes/ReactLinks';
import { Config } from '../constant';
import Navbar from '../components/layout/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

useEffect(() => {
  const user = localStorage.getItem(Config.userApiTokenName);
  if (user) {
    navigate('/'); // Redirect to home if user is already logged in
  }
}, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const res = await fetch(`${Config.serverUrl}/users?email=${email}`);
      const users = await res.json();

      if (users.length === 0) {
        alert("User not found.");
        return;
      }

      const user = users[0];
      const decodedPassword = atob(user.password); // decode from base64

      if (decodedPassword === password) {
        localStorage.setItem(Config.userApiTokenName, JSON.stringify(user));
        alert("Login successful!");
        navigate('/doctor');
      } else {
        alert("Invalid password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong.");
    }
  };
  return (
    <div>
<Navbar/>
      <section>
        <div className='miner-div'>
          <Link id='back' to="/">{"< Back"}</Link>
          <div className='main-div grid sm:grid-cols-2 items-center sm:grid-cols-1'>
            <div className='inputer-div  grid sm:order-2 order-1'>
              <div className='login-register'>
              
                <NavLink className="logina" to={ROUTE.Register}>
                  Register
                </NavLink>
              </div>
              <form onSubmit={handleSubmit}>

                

                <div className='three-main-or-div'>
                  
                  <div className='responsive-div' >
                    <label for="Email ID">Email ID <br />
                      <input
                        type="email"
                        id="input"
                        value={email}
                      
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </label> <br />
                    <label for="Password">Password <br />
                      <input
                        type="password"
                        id="input"
                        value={password}
                       
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      /><br />
                    </label><br />
                  </div>
                  <div className='buttoner-div'>
                    <button id='sign' type='submit'>Sign In</button>
                    <a className='forgot-a-password' href="#">Forgot Password?</a>
                  </div>
                </div>
              </form>
            </div>
            <figure className='mobile grid sm:order-2 order-1'>
              <img id='image-mobile' src={'./doctors.png'} alt="" />
            </figure>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Login