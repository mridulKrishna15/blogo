import "./topbarCss.css"
import {Link} from "react-router-dom";
import image from '../images/profile.jpg';
export default function TopBar() {
  const user=false;
  return (
    <div className="top">
      <div className="left">
      <i className=" topicon fa-brands fa-facebook"></i>
      <i className="topicon fa-brands fa-instagram"></i>
      <i className="topicon fa-brands fa-linkedin"></i>
      <i className="topicon fa-brands fa-twitter"></i>
      </div>


      <div className="centre">
        <ul className="toplist">
             <li className="toplistitem">
              <Link className="link" to="/" >HOME</Link>
             </li>
             <li className="toplistitem"><Link className="link" to="/" >ABOUT</Link></li>
             <li className="toplistitem"><Link className="link" to="/" >CONTACT</Link></li>
             <li className="toplistitem"><Link className="link" to="/write" >WRITE</Link></li>
             <li className="toplistitem">{user && "LOGOUT"}</li>
        </ul>
        </div>
      <div className="right">
        {
          user?(
            <img className="topimage" src={image} alt="loading..." />
          ):(
             <ul className="toplist">
            <li className="toplistitem"><Link className="link" to="/login" >LOGIN</Link></li>
            <li className="toplistitem"><Link className="link" to="/register" >REGISTER</Link></li>
            </ul>
          )
        }
      
      <i className="search fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
