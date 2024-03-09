import "./sidebar.css"
import image from '../images/sidebar.jpg';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src={image} alt="loading..." />
        <p className="sidebarp"> ad assumenda aliquid sed quia quisquam rem laboriosam reprehenderit eum? Dolor eius facilis obcaecati in laboriosam tenetur dolore doloremque delectus distinctio quidem enim, ducimus earum quam qui fuga aut saepe repellat! Dolorem excepturi magni eius quas doloremque!</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
           <li className="sidebarlistItem">MUSIC</li>
           <li className="sidebarlistItem">PHOTOGRAPHY</li>
           <li className="sidebarlistItem">MOVIES</li>
           <li className="sidebarlistItem">COOKING</li>
           <li className="sidebarlistItem">CARS</li>
           <li className="sidebarlistItem">EDUCATION</li>
           
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className=" sidebartopicon fa-brands fa-facebook"></i>
      <i className="sidebartopicon fa-brands fa-instagram"></i>
      <i className="sidebartopicon fa-brands fa-linkedin"></i>
      <i className="sidebartopicon fa-brands fa-twitter"></i>
      </div>
      </div>
    </div>
  )
}
