import React, { useState } from 'react'

export default function UseState() {

    const[color, setColor]=useState("red")

    

  return (
    <div>
        <h1>My Favourite color is {color}</h1>
        <button onClick={()=>{
            setColor("blue")
        }}>blue</button>

        <button onClick={()=>{
            setColor("Pink")
        }}>pink</button>
        


      
    </div>
  )
}
