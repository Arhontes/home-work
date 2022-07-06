import React, {useEffect} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {Dispatch} from "redux";
import {toggleIsLoadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector((state:AppStoreType)=>state.loading.isLoading)
    const dispatch = useDispatch()
    const setLoading = () => {
        dispatch(toggleIsLoadingAC(true))
        setTimeout(()=>{
            dispatch(toggleIsLoadingAC(false))
        }, 3000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>downloading...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
