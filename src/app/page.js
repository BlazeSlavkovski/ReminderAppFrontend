"use client" 
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import axios from 'axios'
import { Button } from "react-bootstrap";
import LoginForm from "./components/loginForm/loginForm";
import RegisterForm from "./components/registerForm/registerForm";
import NavBar from "./components/Navbar/navBar";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import TaskPage from "./components/TaskPage/taskPage";

const client = axios.create({
  baseURL:'http://127.0.0.1:8000',
  withCredentials:true
})


export default function Home() {

  const[loggedIn,setLoggedIn] = useState()
  const[toggleRegisterPage,setToggleRegisterPage] = useState(false)
  const[email,setEmail] = useState('')
  const[username,setUsername] = useState('')
  const[password,setPassword] = useState('')
  const[userDetails, setUserDetails] = useState()

  useEffect(()=> {
    async function fetchMyAPI() {
      try{
        let response = await client.get('api/user')
        setUserDetails(response.data)
        setLoggedIn(true)
      }catch(error){
        console.log(error)
        setUserDetails()
      }
    }

    fetchMyAPI()
  },[loggedIn])

  const toggleRegister = () => {
    setToggleRegisterPage(!toggleRegisterPage)
  }

  const handleRegistration = async(e) => {
    e.preventDefault()
    try{
      await client.post(
        'api/register',{
          email:email,
          name:username,
          password:password
        }
      )
      await client.post(
        'api/login',{
          email:email,
          password:password
        }
      )
      setLoggedIn(true)
    }catch(error){
      console.log(error)
    }
  } 

  const handleLogin = async(e) => {
    e.preventDefault()
    try{
      await client.post(
        'api/login',{
          email:email,
          password:password
        },{withCredentials:true}
      )
      setLoggedIn(true)
    }catch(error){
      console.log(error)
    }
  }

  const handleLogout = async(e) => {
    e.preventDefault()
    try{
     await client.post('api/logout')
      setLoggedIn(false)
    }catch(error){
      console.log(error)
    }
  }

  return (
  <div>
    <NavBar handleLogout={handleLogout} userDetails={userDetails}/>
    <main className={styles.main}>
    
      {loggedIn 
      ? <TaskPage/>
      : (toggleRegisterPage
          ? <RegisterForm 
              email={email} 
              setEmail={setEmail} 
              username={username} 
              setUsername={setUsername} 
              password={password} 
              setPassword={setPassword} 
              handleRegistration={handleRegistration}
            />
          : <LoginForm 
              email={email} 
              setEmail={setEmail} 
              password={password} 
              setPassword={setPassword} 
              handleLogin={handleLogin}
            />
        )
      }
          {!userDetails && 
            <div className="justify-content-between my-4">
              <p>{toggleRegisterPage ? 'Already have an account?' : "Don't have an account?"}</p>
              <Button onClick={toggleRegister} variant="link" className="mx-4">
                {toggleRegisterPage ? 'Login' : 'Register'}
              </Button>
              </div>
          }
    </main>
  </div>
    
  );
}
