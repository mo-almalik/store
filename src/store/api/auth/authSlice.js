import { createSlice } from "@reduxjs/toolkit";

const  initialState ={
    user: null,
    isAuthenticated: localStorage.getItem('logged_in') ? localStorage.getItem('logged_in') : null ,
    role: null,

}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials : (state,action)=>{
            state.isAuthenticated = true;
            state.user = action.payload.data;
            state.role = action.payload.data.userRole;
            localStorage.setItem('logged_in', true);
        },
        logout: (state)=>{
            state.isLoading = false
            state.error = null
            state.user = null
            state.role = null
            localStorage.removeItem('logged_in');
             
        }
    }
})

export const {setCredentials, logout} = authSlice.actions

export default authSlice.reducer