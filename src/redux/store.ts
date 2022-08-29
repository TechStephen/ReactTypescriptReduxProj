import { configureStore } from "@reduxjs/toolkit";
import { personReducer } from './person.slice'
import { authReducer } from "./authentication.slice";

const store = configureStore({
    reducer: {
        persons: personReducer,
        AuthenticationSlice: authReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;