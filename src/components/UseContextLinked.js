import React from 'react'
import { useContext } from 'react';
import { UserContext } from './UseContext';


function UseContextLinked() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Component 3</h1>
            <h2>Hello {user} Again!</h2>


        </div>
    )
}

export default UseContextLinked
