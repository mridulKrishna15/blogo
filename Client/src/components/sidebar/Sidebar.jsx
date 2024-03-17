import "./sidebar.css"
import image from '../images/sidebar.jpg';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [cats,setCats]=useState([]);
  useEffect(()=>{
     const getCats=async()=>{
      const res=await axios.get("/categories");
      setCats(res.data);
     }
     getCats();
  },[]);
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
          {cats.map(c=>(
            <Link to={`/?cat=${c.name}`} className="link">
               <li className="sidebarlistItem">{c.name}</li>
            </Link>
            
          ))}
             
        
           
         
           
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
