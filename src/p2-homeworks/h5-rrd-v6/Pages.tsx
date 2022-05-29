import React from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Routes, Route, Navigate} from 'react-router-dom'
export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    'JUNIOR+': '/junior+'
}

function Junior() {
    return <div>Junior</div>;
}
function JuniorPlus() {
    return <div>Junior+</div>;
}
function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>

                <Route path={PATH.JUNIOR} element={<Junior />}/>

                <Route path={PATH["JUNIOR+"]} element={<JuniorPlus/>}/>


                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
