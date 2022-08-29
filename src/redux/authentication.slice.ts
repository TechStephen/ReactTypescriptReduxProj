import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store';

interface Authentication {
    isLoggedIn: boolean,
    Loading: boolean,
}

const initialState: Authentication = {
    isLoggedIn: false,
    Loading: false,
}

const authenticationSlice = createSlice({
    name: "AuthenticationSlice",
    initialState,
    reducers: {
        LoggingIn: (state) => {
            state.isLoggedIn = true;
            state.Loading = true;
        },
    }
})

export const { LoggingIn } = authenticationSlice.actions;
export const AuthenticationStatusLoggedIn = (state: RootState) => state.AuthenticationSlice.isLoggedIn;
export const authReducer = authenticationSlice.reducer;
