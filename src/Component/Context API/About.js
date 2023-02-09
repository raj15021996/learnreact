import React, { useContext } from 'react'
export default function About() {
    const username=useContext(username)
  return (
    <div>
    <h1>About</h1>
    <h2>{`hello ${username}`}</h2>
    </div>
    
  )
}
