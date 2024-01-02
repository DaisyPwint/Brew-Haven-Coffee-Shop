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
            Cookies.set('token',token,{expires: 1,sameSite: 'None',secure: true});
            state.token = token;
        },
        logout: (state) => {
            Cookies.remove('token');
            state.token = null;
        }
    }
})

export const { setUserInfo,setCredentials,logout } = authSlice.actions;

export default authSlice.reducer;