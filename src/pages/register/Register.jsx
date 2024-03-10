import "./register.css"
import {Link} from "react-router-dom";
export default function Register() {
  return (
    <div className='register'>
      <span className="registertitle">Register</span>
       <form  className="registerform">
       <label>UserName</label>
        <input type="text" placeholder="enter username"/>
        <label>Contact no.</label>
        <input type="tel" placeholder="enter phone number"/>
        <label>Email</label>
        <input type="text" placeholder="enter email"/>
        <label>Password</label>
        <input type="password" placeholder="set a password" />
        <button className="registersubmit">Register</button>
       </form>
       <button className="registerlogin">
        <Link to="/login" className="link">Login</Link>
       </button>
       
    </div>
  )
}
