import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { doLogin } from "../../store/login/loginSlice";
import {  useNavigate } from "react-router-dom";
const Login =()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate();
    

    const dispatch = useDispatch()
    const {loginData,loadingStatus,token}=useSelector((state)=>state.login)

    async function login(){
        await dispatch(doLogin({username:username,password:password}))
        navigate('/dashboard')
    }
    return <div>
    <h3>Login Page</h3>
    <div><input type='text' onChange={(e)=>setUsername(e.target.value)}  placeholder='username'/></div>        
    <div><input type='password' onChange={(e)=>setPassword(e.target.value)}  placeholder='password'/></div>        
        <div><button onClick={login}>Login</button></div>
    </div>

}
export default Login;