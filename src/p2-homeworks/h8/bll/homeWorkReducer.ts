import {UserType} from "../HW8";

export type ActionType =
    ReturnType<typeof SortByNameAC> |
    ReturnType<typeof CheckAgeAC>


export const CheckAgeAC = (age:number) => {
    return {
        type: "CHECK-AGE",
        payload:{
            age
        }
    } as const
}
export const SortUpAC = () => {
    return {
        type: "SORT-UP"
    } as const
}
export const SortDownAC = () => {
    return {type: "SORT-DOWN"} as const
}
export type SortMethod = "UP" | "DOWN"
export const SortByNameAC = (props:SortMethod) => {
    return {
        type: "SORT",
        payload: {
            method:props
        }
    } as const
}
export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT': {
            const sortedArr = [...state.sort((a,b)=>a.name.toLowerCase()<b.name.toLowerCase()?-1:1)]
            return action.payload.method==="UP"?sortedArr:sortedArr.reverse()
        }
        case 'CHECK-AGE': {
            return state.filter(el=>el.age>action.payload.age)
        }
        default:
            return state
    }
}