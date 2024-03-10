import "./login.css"
import {Link} from "react-router-dom";
export default function Login() {
  return (
    <div className='login'>
      <span className="logintitle">Login</span>
       <form  className="loginform">
        <label>Email</label>
        <input type="text" placeholder="shuklamridul1729@gmail.com"/>
        <label>Password</label>
        <input type="password" placeholder="***" />
        <button className="loginsubmit">Login</button>
       </form>
       <label className="registerlabel">If not registered</label>
       <button className="registerbutton">
        <Link to="/register" className="link">Register</Link>
       </button>
    </div>
  )
}
