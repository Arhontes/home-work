export type InitStateType = {
    isLoading:boolean
}
const initState = {
 isLoading:false
}

type LoadingReducerType =
    ReturnType<typeof toggleIsLoadingAC>
export const toggleIsLoadingAC = (isLoading:boolean)=>{
    return {
        type: "TOGGLE-IS-LOADING",
        payload:{
            isLoading
        }
    }as const
}

export const loadingReducer = (state = initState, action: LoadingReducerType): InitStateType => { // fix any
    switch (action.type) {
        case "TOGGLE-IS-LOADING": {
            return {...state,isLoading:action.payload.isLoading}
        }
        default: return state
    }
}

