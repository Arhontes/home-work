import React, {useState} from 'react'
import {CheckAgeAC, homeWorkReducer, SortByNameAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople:Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p) => (
        <tr key={p._id}>
            <td>{p.name}</td> <td>age:{p.age}</td>
        </tr>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortByNameAC("UP")))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortByNameAC("DOWN")))
    const checkAge = ()=> setPeople(homeWorkReducer(initialPeople, CheckAgeAC(18)))
    return (
        <div>
            <hr/>
            <h2>homeworks 8</h2>

            {/*should work (должно работать)*/}
            <table>
                {finalPeople}
            </table>

            <SuperButton onClick={sortUp}>sort up</SuperButton>
            <SuperButton onClick={sortDown}>sort down</SuperButton>
            <SuperButton onClick={checkAge}> check 18</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
