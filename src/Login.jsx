import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, removeUser } from './redux/slices/user-slice'

const Login = () => {
  const dispatcher = useDispatch()
  const { userSlice } = useSelector((allData) => allData)
  const [user, setUser] = useState({
    email: userSlice ? userSlice.email : '',
    password: userSlice ? userSlice.password : '',
  })

  const login = (e) => {
    try {
      e.preventDefault()
      //write login for login
      alert('Login success')
    } catch (error) {
      alert(error.message)
    }
  }

  console.log(user)

  const handleChange = (e) => {
    const input = e.target
    const name = input.name
    const value = input.value
    setUser({
      ...user,
      [name]: value,
    })
  }

  const rememberMe = (e) => {
    e.preventDefault()
    const input = e.target
    if (input.checked) {
      dispatcher(loginUser(user))
    } else {
      dispatcher(removeUser())
    }
  }

  return (
    <div className='bg-gray-200 min-h-screen items-center justify-center flex'>
      <div className='w-3/12 bg-white mx-auto p-6 shadow-lg rounded'>
        <h1 className='text-center text-2xl py-6'>Login User</h1>
        <form onSubmit={login} className='flex flex-col gap-4'>
          <input
            type='text'
            value={user.email}
            name='email'
            className='border border-gray-300 rounded p-2'
            placeholder='Email'
            onChange={handleChange}
          />
          <input
            type='password'
            value={user.password}
            name='password'
            className='border border-gray-300 rounded p-2'
            placeholder='Password'
            onChange={handleChange}
          />
          <div className='flex gap-1'>
            <label className='text-sm font-semibold '>Remember Me?</label>
            <input
              type='checkbox'
              checked={userSlice ? true : false}
              onChange={rememberMe}
              className='border border-gray-300 rounded px-2'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 px-4 py-2 rounded font-semibold text-lg'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
