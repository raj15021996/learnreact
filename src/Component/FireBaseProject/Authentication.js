import React, { useState } from 'react';
import {auth} from "./Firebase";
import { createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut,sighInWithEmailAndPassword, signInWithEmailAndPassword }
     from "firebase/auth"; 

const Authentication=()=>{
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [user,setUser]=useState({});
    
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })

    const register=async(e)=>{
     e.preventDefault();
   try{
    const user=createUserWithEmailAndPassword(auth,email,pass);
    console.log(user);
   }catch(error){
    alert(error.message)
   }
}

const login=async(e)=>{
    e.preventDefault();
  try{
   const user=signInWithEmailAndPassword(auth,email,pass);
   console.log(user);
  }catch(error){
   alert(error.message)
  }
   }
   const logout=async(e)=>{
    e.preventDefault();
    await signOut(auth);
   }
    
    return(
     <div className='login-container'>
     <h4>User logged In</h4>
     {user?.email}
     <h2>Login</h2>  
     <form>
        <input type='text' placeholder='Email'
            value={email} onChange={(e)=>setEmail(e.target.value)}
        /><br/>
        <input type='password' placeholder='Password'
             value={pass} onChange={(e)=>setPass(e.target.value)}
        /><br/>
        <button onChange={login}>Sign in</button><br/>
        <button onClick={register}>Create new Account</button><br/>
        <button onClick={logout}>Log out</button>
     </form> 
     
     </div>
    )
}
export default Authentication;