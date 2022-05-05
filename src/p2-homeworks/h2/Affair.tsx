import React from 'react'
import {AffairType} from "./HW2";
import aff from './Affairs.module.css'
type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (props:number)=>void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={aff.affair}>
            <div>
                {props.affair.name}
            </div>
            <div>
                <button onClick={deleteCallback}>X</button>
            </div>

        </div>
    )
}

export default Affair
