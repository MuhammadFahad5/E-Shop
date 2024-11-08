import React, { useState } from 'react'
import UserWelcome from '../components/UserWelcome'
import { useNavigate, NavLink } from 'react-router-dom'
import './LoginRegister.css'
import icon_email from '../Assests/icon_email.png'
import lock from '../Assests/lock.png'
import view from '../Assests/view.png'
import user from '../Assests/user.png'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    reEnterPassword:'',
  })
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.password !== input.reEnterPassword) {
      alert("Passwords do not match. Please re-enter the same password.");
      return;
    }
    
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = existingUsers.some(user => user.email === input.email);

    if (emailExists) {
      alert("Email already registered. Please use a different email.");
      return;
    }

    existingUsers.push(input);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    navigate('/login');
  }
  return (
    <>
      <UserWelcome>
        <div className='loginRegister'>
          <h2 className=''>Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className='input-div'>
              <img src={user} alt="user" />
              <input
                type="text"
                placeholder='Name'
                name="name"
                value={input.name}
                onChange={e => setInput({ ...input, name: e.target.value })}
                required
              />
            </div>
            <div className='input-div'>
              <img src={icon_email} alt="Email" />
              <input
                type="email"
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
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                name="password"
                value={input.password}
                onChange={e => setInput({ ...input, password: e.target.value })}
                required
              />
              <img src={view} alt="view" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}/>
            </div>
            <div className='input-div'>
              <img src={lock} alt="Lock" />
              <input
                type={showRePassword ? 'text' : 'password'}
                placeholder='Re-enter password'
                name="re-enter-password"
                value={input.reEnterPassword}
                onChange={e => setInput({ ...input, reEnterPassword: e.target.value })}
                required
              />
              <img src={view} alt="view" onClick={() => setShowRePassword(!showRePassword)} style={{ cursor: 'pointer' }}/>
            </div>
            <button type='submit' className='login'>Create Account</button>
            <p className='noaccount'>Already have an Account?</p>
            <NavLink to="/login" className='accountOrNoAccount'>
              <button >
                login
              </button>
            </NavLink>

          </form>
        </div>
      </UserWelcome>
    </>
  )
}

export default Register