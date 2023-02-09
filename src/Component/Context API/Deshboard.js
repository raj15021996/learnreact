import React, { useState } from 'react'
import { createContext } from 'react'
import About from './About';
const username=createContext();

export default function Deshboard() {
    const [user,setUser]=useState("Raj")

  return (
    <username.Provider value={user}>
        <h1>`Welcome to ${user} Deshboard`</h1>
        <About/>
    </username.Provider>
  )
}
