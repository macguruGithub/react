import { configureStore } from "@reduxjs/toolkit";
import allUserReducer from './users'

export default configureStore({
    reducer:{
        user: allUserReducer
    }
})
