import "./login.css"
import { useRef } from "react";
import {Link} from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";
import axios from "axios";
export default function Login() {

  const userRef=useRef();
  const passwordRef=useRef();
  const {dispatch,isFetching}=useContext(Context)

  const handleSubmit=async(e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
       const res= await axios.post("/auth/login",{
            username:userRef.current.value,
            password:passwordRef.current.value,

       })
       dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
    }
  };
  
  return (
    <div className='login'>
      <span className="logintitle">Login</span>
       <form  className="loginform" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="enter your username" ref={userRef}/>
        <label>Password</label>
        <input type="password" placeholder="enter your password" ref={passwordRef}/>
        <button className="loginsubmit" type="submit" disabled={isFetching}>Login</button>
       </form>
       <label className="registerlabel">If not registered</label>
       <button className="registerbutton">
        <Link to="/register" className="link">Register</Link>
       </button>
    </div>
  )
}
