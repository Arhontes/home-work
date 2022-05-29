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
                {/*<div className="item"><span>Behance</span></div>
                <div className="item"><span>MixCloud</span></div>
                <div><NavLink  to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink></div>
                <div><NavLink to={PATH.JUNIOR}>Junior</NavLink></div>
                <div><NavLink  to={PATH["JUNIOR+"]}>Junior+</NavLink></div>*/}
        </div>
    )
}
{/*className={navData => navData.isActive ? n.active : n.item}*/}
export default Header
