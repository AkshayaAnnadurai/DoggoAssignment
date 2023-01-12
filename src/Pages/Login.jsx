import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Styles from "../Styles/Login.module.css"
import axios from "axios"
const Login = () => {
   
    const navigate = useNavigate()
    const [token,setToken]=useState("")
    const [isLoading, setIsLoading] =useState(false);
    const [isError, setIsError] =useState(false);
    const [user, setUser] = useState()
    const[data,setData] =useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setData({
            ...data,
            [name]:value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);
      
       if(data.email==="")
       {
        alert("Email is required")
        setIsError(true)
       }
       if(data.password==="")
       {
        alert("Password is required")
        setIsError(true)
       }
       else
       {
        let reqres=await axios.post("https://reqres.in/api/login",{
          email:data.email,
          password:data.password,
          
        })
      setToken(reqres.data.token)
      setIsLoading(false);
      localStorage.setItem("user",JSON.stringify(data))
        alert("Login Successfully")
        navigate('/breed')
        }
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
         navigate('/breed')
        }
      }, [])
  return (
    <div>
      <h3>Loginform</h3>
        <form className={Styles.form}>
            <label>Email</label>
            <br/>
            <input type="email" placeholder='Enter email' name="email" onChange={handleChange} />
            <br/>
            <label>Password</label>
            <br/>
            <input type="password" placeholder='Enter password' name="password"  onChange={handleChange}/>
            <br/>
            <label>Login</label>
            <br/>
            <button onClick={handleSubmit}>Login</button>
            <br/>
        </form>
    </div>
  )
}

export default Login