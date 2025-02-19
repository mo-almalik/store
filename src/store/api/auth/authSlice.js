import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authApi = axios.create({
    baseURL: `http://localhost:5000/api/v1`,
    withCredentials: true,
});

const initialState = {
    isAuthenticated: false,
    role: null,
    isInitialized: false,
    user: null,
    isLoading: false,
    isError: null,
};

export const userLogin = createAsyncThunk(
    "auth/userLogin",
    async (user, { rejectWithValue }) => {
        try {
            const response = await authApi.post('/auth/login', user);
            return response.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Failed to log in";
            return rejectWithValue(errorMessage);
        }
    }
);

export const userLogout = createAsyncThunk(
    "auth/userLogout",
    async (_, { rejectWithValue }) => {
        try {
            const response = await authApi.post('/auth/logout');
            return response.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Failed to log out";
            return rejectWithValue(errorMessage);
        }
    }
);

export const checkAuth = createAsyncThunk(
    "auth/checkAuth",
    async (_, { rejectWithValue }) => {
        try {
            const response = await authApi.get('/auth/check-auth-role');
            return response.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Failed to check auth";
            return rejectWithValue(errorMessage);
        }
    }
);


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoading = false;
            state.user = null;
            state.role = null;
            localStorage.removeItem('logged_in');
            state.isInitialized = true; 
        }
    },
    extraReducers: (builder) => {
        // login user 
        builder
            .addCase(userLogin.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
                state.isAuthenticated = false;
                state.user = null;
                state.role = null;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.data;
                state.role = action.payload.data.userRole;
                state.isInitialized = true; 
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            });

        // logout user
        builder
            .addCase(userLogout.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(userLogout.fulfilled, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
                state.role = null;
                state.isInitialized = true; 
            });

        // check if the user is authenticated
        builder
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.role = action.payload?.role || null;
                state.isInitialized = true; 
                state.isLoading = false;
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
                state.isAuthenticated = false;
                state.isInitialized = true; 
            });


        
    }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;