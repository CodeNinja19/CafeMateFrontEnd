import { configureStore } from '@reduxjs/toolkit';
import IsLoggedIn from "./Reducers/IsLoggedIn"
import ChangeUser from "./Reducers/User"

const store=configureStore({
    reducer:{
        IsLoggedIn,
        ChangeUser,
    }
})
export default store;