import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (name:string) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({
                                                   name,
                                                   setNameCallback,
                                                   addUser,
                                                   error,
                                                   totalUsers
                                               } // деструктуризация пропсов
) => {

    const onChangeInputHandler=(props:ChangeEvent<HTMLInputElement>)=>{
        setNameCallback(props.currentTarget.value)
    }
    return (
        <div>
            <input value={name} onChange={onChangeInputHandler} className={name===''?s.error:s.someClass}/>
            <span>{error}</span>
            <button onClick={()=>addUser(name)}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
