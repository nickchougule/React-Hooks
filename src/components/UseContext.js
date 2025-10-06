import { useState, createContext, useContext } from 'react';
import UseContextLinked from './UseContextLinked';
import Components2 from './Components2';
 export const UserContext = createContext();

function UseContext() {
    const [user, setUser] = useState("Linus");

    return (
        <div>
            <UserContext.Provider value={user}>
                <h1>hello {user}</h1>
                <Components2/>
            </UserContext.Provider>


        </div>
    )
}

export default UseContext
