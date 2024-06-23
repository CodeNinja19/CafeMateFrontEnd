import { configureStore } from '@reduxjs/toolkit';
import IsLoggedIn from "./Reducers/IsLoggedIn"


const store=configureStore({
    reducer:{
        IsLoggedIn,
    }
})
export default store;