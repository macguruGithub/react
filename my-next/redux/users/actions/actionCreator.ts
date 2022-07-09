import { addUser } from "../userSlice"
export const addUsers = (mark)=>{
    return async (dispatch,getState)=>{
        const state = getState()
        console.log('current state (inside redux thunk function ) ==> ',JSON.stringify(state))
        const users = await (await fetch('https://62c6adb074e1381c0a65dc58.mockapi.io/api/v1/users')).json()
        dispatch(addUser(users))
    }
}