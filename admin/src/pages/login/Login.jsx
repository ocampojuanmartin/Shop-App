import React from 'react'
import "./login.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from "../../redux/apiCalls"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleClick = (e) =>{
        e.preventDefault()
        login(dispatch,{username, password})
    }
    
  return (
    <div className='login'>
        <input type="text" placeholder="username" className='input' onChange={e=>setUsername(e.target.value)}/>
        <input type="password" placeholder="password" className='input' onChange={e=>setPassword(e.target.value)}/>
        <button onClick={handleClick} className="button">Login</button>
    </div>
  )
}

export default Login