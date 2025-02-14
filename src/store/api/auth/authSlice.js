import { createSlice } from "@reduxjs/toolkit";

const  initialState ={
    user: null,
    isAuthenticated: false,
    role: null,
}
const appSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials : (state,action)=>{
        //   console.log(action.payload.data);
          
            state.isAuthenticated = true
            state.user = action.payload.data
            state.role = action.payload.data.userRole
        },
        logout: (state)=>{
            state.isLoading = false
            state.error = null
            state.isAuthenticated = false
            state.user = null
            state.role = null
        }
    }
})

export const {setCredentials, logout} = appSlice.actions

export default appSlice.reducer