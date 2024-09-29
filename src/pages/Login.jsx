import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'


import UserAuthUI from '../components/UserAuthUI'
import './LoginRegister.css'
import icon_email from '../Assests/icon_email.png'
import lock from '../Assests/lock.png'
import view from '../Assests/view.png'

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const onLogin = (e) => {
    e.preventDefault()
    // const loggedUser = JSON.parse(localStorage.getItem("user"))
    // if (input.email === loggedUser.email &&
    //   input.password === loggedUser.password) {
    //     localStorage.setItem('loggedin',true)
    //   navigate('/')


    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the input matches any user's credentials
    const loggedUser = users.find(user =>
      user.email === input.email && user.password === input.password
    );

    if (loggedUser) {
      localStorage.setItem('loggedin', true);
      localStorage.setItem('loggedinEmail', loggedUser.email);
      localStorage.setItem('loggedinUsername', loggedUser.name);
      navigate('/');
    } else {
      alert("Wrong Email or Password")
    }
  }
  return (
    <>
      <UserAuthUI>
        <div className='loginRegister'>
          <h2 className=''>Welcome</h2>
          <form onSubmit={onLogin}>
            <div className='input-div'>
              <img src={icon_email} alt="Email" />
              <input
                type="Email"
                placeholder='Email'
                name="email"
                value={input.email}
                onChange={e => setInput({ ...input, email: e.target.value })}
                required
              />
            </div>
            <div className='input-div'>
              <img src={lock} alt="Lock" />
              <input
                type="password"
                placeholder='Password'
                name="password"
                value={input.password}
                onChange={e => setInput({ ...input, password: e.target.value })}
                required
              />
              <img src={view} alt="view" />
            </div>
            <a href="#" className='forgotpassword'>Forgot password ?</a>
            <button type='submit' className='login'>Login</button>
            <p className='noaccount'>Have no Account Yet?</p>
            <NavLink to="/register" className='accountOrNoAccount'>
              <button >
                Regitration
              </button>
            </NavLink>

          </form>
        </div>
      </UserAuthUI>
    </>

  )
}

export default Login