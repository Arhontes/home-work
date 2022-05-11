import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";


// types
export type UserType = {
    _id:string // need to fix any
    name:string// need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const newVisitor:UserType = {name:name, _id: v1()}
        setUsers([newVisitor, ...users]) // need to fix
        alert(`Welcome ${name}!`)
    }
    const divStyle={
        display:'flex',
        'justify-content': 'center'
    }
    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <div style={divStyle}>
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>


            </div>
            <div>

                {users.map(user=><div key={user._id}>{user.name}</div>)}

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
