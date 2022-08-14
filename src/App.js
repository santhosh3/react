/**
 * what is redux?
 * redux is used to declare usestate components globally in a store and you can use in components
 * It is all about Managing state values in multiple components at a time, using redux store.
 * by using providers we can use store values and manupulate them
 */

// useContext() In order to send data from one component to another directly we use useContext()
import React from "react";
import ComponentC from "./ComponentC";

 export const UserContext = React.createContext();

function App() {
    return (
        <div>
            <center>
                <UserContext.Provider value={"hello world"}>
                <ComponentC />
                </UserContext.Provider>
            </center>
        </div>
    )
}

export default App