import React, { useState,useEffect } from 'react'

function UseEffect() {
    const[calculation,setCalculation]=useState(0)
    const[count,setcount]=useState(0)

    useEffect(()=>{
        setCalculation(()=>count*2)
    },[count])




    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setcount(count+1)
    //     },1000)
    // },[])
  return (
    <div>

        {/* <h1>i have rendered {count} times</h1> */}

        <p>count: {count}</p>
        <button onClick={()=>setcount((c)=>c+1)}>+</button>
        <p>calculations:{calculation}</p>
      
    </div>
  )
}

export default UseEffect
