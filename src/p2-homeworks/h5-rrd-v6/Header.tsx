import React from 'react'
import { NavLink } from 'react-router-dom';
import {PATH} from "./Pages";
import s from '../../NavLink.module.css'


function Header() {
    return (
        <div className={s.menu}>

                <div className={s.label}>Level</div>
                <span className={s.item}><NavLink  to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink></span>
                <span className={s.item}><NavLink to={PATH.JUNIOR}>Junior</NavLink></span>
                <span className={s.item}><NavLink  to={PATH["JUNIOR+"]}>Junior+</NavLink></span>

        </div>
    )
}
export default Header
