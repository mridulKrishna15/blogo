import "./topbarCss.css"
import image from '../images/profile.jpg';
export default function TopBar() {
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
             <li className="toplistitem">HOME</li>
             <li className="toplistitem">ABOUT</li>
             <li className="toplistitem">CONTACT</li>
             <li className="toplistitem">WRITE</li>
             <li className="toplistitem">LOGOUT</li>
        </ul>
        </div>
      <div className="right">
      <img className="topimage" src={image} alt="loading..." />
      <i className="search fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
