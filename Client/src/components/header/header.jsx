import "./Header.css"
import image from '../images/header.png'
export default function Header() {
  return (
    <div className="header">
          <div className="headerTitles">
             <div className="headertitleSm">WELCOME TO YOURS</div>
             <div className="headertitlelg">BLOGO</div>
          </div>
          <img className="headerImage" src={image} alt="" />
    </div>
  )
}
