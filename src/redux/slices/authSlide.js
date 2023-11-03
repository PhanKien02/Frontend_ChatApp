import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../../utils/httpRequest"
let sessionStore = JSON.parse(sessionStorage.getItem('auth'));
let initState  = sessionStore ? sessionStore : {user : null,isAuth: false,token : null,message : null};
export const userLogin = createAsyncThunk(
    "user/login",async (user, { rejectWithValue })=>{
        try {
            const result = await request.post("login",{
                email: user.email,password : user.password
            })
            return result;
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
            LOG_OUT :state=>{
                state.user = null;
                state.token = null;
                state.isAuth = false
                state.message = "logout success";
                sessionStorage.removeItem("auth")
            }
        },
        extraReducers:(builder)=>{
            builder
            .addCase(userLogin.fulfilled,(state,action)=>{
                const login = action.payload.data.data;
                state.user = login.user;
                state.token = login.token;
                if(login.user.active)
                    {
                        state.message = login.message;
                        state.isAuth = true;
                    }
                else
                    {
                        state.isAuth = false
                        state.message = login.message;
                    }
                sessionStorage.setItem("auth",JSON.stringify(state));
            })
            .addCase(userLogin.rejected,(state,action)=>{
                console.log(action.payload);
                state.user = null;
                state.token = null;
                state.isAuth = false;
                state.message = action.payload? action.payload.message : "login faild";
            })          
        }
    }
)
export const {LOG_OUT } = AuthSlice.actions;
export default AuthSlice.reducer;