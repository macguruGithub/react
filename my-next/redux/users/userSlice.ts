import { createSlice } from "@reduxjs/toolkit"

    export const userSlice = createSlice({
        name:'user-reducer',
        initialState:{
            users:[]
        },
        reducers:{
            addUser:(state,action)=>{
                console.log('reducer print ==>',action.payload)
                state.users=action.payload
            }
        }
    })

    export const {addUser} = userSlice.actions  
    export default userSlice.reducer

  
    


