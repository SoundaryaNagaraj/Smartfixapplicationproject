import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './smartfix.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import login from './login.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();


  const handleLogin = () => {
    if (!username || !password) {
      toast.error('Please fill in all the required fields.', { position: toast.POSITION.TOP_CENTER });
      return;
    }

    const userData = {
      username: username,
      password: password,
    };

    axios
      .post('http://localhost:3000/persons/login', userData)
      .then((response) => {
        const success = response.data.success;

        if (success) {
          toast.success('Login successful!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 500,
            onClose: () => {
              navigate('/home', { state: { loginSuccess: true } });
            }
          });
        } else {
          toast.error('Invalid username or password', { position: toast.POSITION.TOP_CENTER });
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error('Invalid username or password', { position: toast.POSITION.TOP_CENTER });
      });
  };



  return (
    <div>

      <div>


        <section class="vh-100">
          <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  class="img-fluid" alt="Sample image" />
              </div>
              <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                 
                  <div class="divider d-flex align-items-center my-4">
                  <label class="form-label" for="form3Example3">LOGIN</label>
                  </div>


                  <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3">Username</label>
                    <input type="email" id="form3Example3" class="form-control form-control-lg"
                      onChange={(e) => setUsername(e.target.value.trim())}
                      placeholder="Enter a User name" />


                  </div>


                  <div class="form-outline mb-3">
                  <label class="form-label" for="form3Example3">password</label>

                    <input type="password" id="form3Example4" class="form-control form-control-lg"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password" />
                      
                  </div>

                  <div class="text-center text-lg-start mt-4 pt-2">
                    <button type="button" class="btn btn-primary btn-lg"
                      onClick={handleLogin}
                    >Login</button>

                    <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?</p>
                    <Link className='text' to='/signup'>
                      <a href="#!"
                        class="link-danger">Register</a></Link>
                  </div>

                </form>
              </div>
            </div>
          </div>
          <div
            class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            Smartfix 4.0
            <div class="text-white mb-3 mb-md-0">
              Copyright © 2023. All rights reserved.

            </div>

          </div>
        </section>
      </div>
      <ToastContainer />
    </div>


  );
}

export default Login;