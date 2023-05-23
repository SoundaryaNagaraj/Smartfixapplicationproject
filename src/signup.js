import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './smartfix.png';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!username || !email || !password) {
      toast.error('Please fill in all the required fields.', { position: toast.POSITION.TOP_CENTER });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.', { position: toast.POSITION.TOP_CENTER });
      return;
    }
    if (password.length < 6) {
      toast.error('Password should be at least 6 characters long.', { position: toast.POSITION.TOP_CENTER });
      return;
    }

    const userData = {
      username: username,
      email: email,
      password: password,
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    };

    fetch('https://646b0c027d3c1cae4ce31370.mockapi.io/new', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        toast.success('User registered successfully!', { position: toast.POSITION.TOP_CENTER });
      })
      .catch((error) => {
        toast.error('Error occurred while registering user!', { position: toast.POSITION.TOP_CENTER });
      });
  };

  const handleReset = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <header>
        <div>
          <img src={logo} alt='logo' className='image' />
        </div>
      </header>
      <body>
        <div className='container'>
          <h1>User Registration</h1>
          <div>
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value.trim())}
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='button-3' onClick={handleSignup}>
              Submit
            </button>
            <button className='button-3' onClick={handleReset}>
              Reset
            </button>
            <Link className='text' to='/login'>
              <h5>Back to Login</h5>
            </Link>
          </div>
        </div>
      </body>
      <ToastContainer />
    </div>
  );
}

export default Signup;