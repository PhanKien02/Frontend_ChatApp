import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../utils/httpRequest"
let sessionStore = JSON.parse(localStorage.getItem('auth'));
let initState  = sessionStore ? sessionStore : {user : null,isAuth: false,token : null,message : null};
export const userLogin = createAsyncThunk(
    "user/login",async (user, { rejectWithValue })=>{
        try {
            const result = await request.post("login",{
                email: user.email,password : user.password
            })
            return result.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)
export const AuthSlice = createSlice (
    {
        name : "authSlice",
        initialState:initState ,
        reducers:{
            LOG_OUT :(state)=>{
                state.user = null;
                state.token = null;
                state.isAuth = false;
                state.message= "logout success";
                localStorage.removeItem("auth")
            }
        },
        extraReducers:(builder)=>{
            builder
            .addCase(userLogin.fulfilled,(state,action)=>{
                const login = action.payload.data;
                state.user = login.user;
                state.token = login.token;
                state.isAuth = true;
                state.message = "login success";
                localStorage.setItem("auth",JSON.stringify(state));
            })
            .addCase(userLogin.rejected,(state,action)=>{
                state.user = null;
                state.token = null;
                state.isAuth = false
                state.message = action.payload.message;
            })
            
        }
    }
)
console.log(AuthSlice);
export const {LOG_OUT} = AuthSlice.actions;
export default AuthSlice.reducer;