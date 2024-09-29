import React, { useState } from 'react'
import UserAuthUI from '../components/UserAuthUI'
import { useNavigate, NavLink } from 'react-router-dom'
import './LoginRegister.css'
import icon_email from '../Assests/icon_email.png'
import lock from '../Assests/lock.png'
import view from '../Assests/view.png'
import user from '../Assests/user.png'

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    // localStorage.setItem("user",JSON.stringify(input))

    // // Get existing users from local storage, or initialize to an empty array
    // const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // // Add the new user to the array
    // existingUsers.push(input);

    // // Save the updated users array back to local storage
    // localStorage.setItem("users", JSON.stringify(existingUsers));

    // navigate('/login')


    // Get existing users from local storage or initialize to an empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists
    const emailExists = existingUsers.some(user => user.email === input.email);

    if (emailExists) {
      // Handle the case where the email is already taken
      alert("Email already registered. Please use a different email.");
      return;
    }

    // Add the new user to the array
    existingUsers.push(input);

    // Save the updated users array back to local storage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    navigate('/login');
  }
  console.log(input)
  return (
    <>
      <UserAuthUI>
        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Name'
            name="name"
            value={input.name}
            onChange={e => setInput({ ...input, name: e.target.value })}
          />
          <input
            type="email"
            placeholder='Email'
            name="email"
            value={input.email}
            onChange={e => setInput({ ...input, email: e.target.value })}
          />
          <input
            type="password"
            placeholder='Password'
            name="password"
            value={input.password}
            onChange={e => setInput({ ...input, password: e.target.value })}
          />

          <button type='submit'>Register</button>

        </form> */}



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
            <button type='submit' className='login'>Create Account</button>
            <p className='noaccount'>Already have an Account?</p>
            <NavLink to="/login" className='accountOrNoAccount'>
              <button >
                login
              </button>
            </NavLink>

          </form>
        </div>
      </UserAuthUI>
    </>
  )
}

export default Register