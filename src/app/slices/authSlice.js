import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
    name: 'auth',
    initialState : {
        userInfo: null,
        token: null
    },
    reducers: {
        setUserInfo : (state,{payload}) => {
            state.userInfo = payload;
        },
        setCredentials: (state,{payload}) => {
            const {token} = payload;
            Cookies.set('token',token);
            state.token = token;
        },
        logout: (state) => {
            Cookies.remove('token');
            state.token = null;
        }
    }
})

export const { setUserInfo,setCredentials } = authSlice.actions;

export default authSlice.reducer;