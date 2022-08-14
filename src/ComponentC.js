import React from 'react'
import { UserContext } from './App'

const ComponentC = () => {
    return (
        <div>
            <UserContext.Consumer>
                {value => <div>{value}</div>}
            </UserContext.Consumer>
        </div>
    )
}
export default ComponentC