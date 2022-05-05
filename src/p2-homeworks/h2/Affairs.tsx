import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import aff from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (props:FilterType)=>void
    deleteAffairCallback: (props:number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div >
            <div className={aff.aff_wrapper}>
                <div className={aff.affairs_list}>
                    {mappedAffairs}
                </div>

                <div className={aff.button_console}>
                    <div className={aff.button_wrapper}>
                        <div className={aff.button}>
                            <button onClick={setAll}>All</button>
                        </div>
                        <div className={aff.button}>
                            <button onClick={setHigh}>High</button>
                        </div >
                        <div className={aff.button}>
                            <button onClick={setMiddle}>Middle</button>
                        </div>
                        <div className={aff.button}>
                            <button onClick={setLow}>Low</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Affairs
