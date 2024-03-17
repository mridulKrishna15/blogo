import "./singlepost.css"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import image from '../images/postImg.jpg'
export default function SinglePost() {
  const PF= "http://localhost:5000/image/"
  const location= useLocation();
  console.log(location);
  const path= location.pathname.split("/")[2];
  const [post,setPost]=useState({});
  useEffect(()=>{
    const getPost=  async()=>{
      const res= await axios.get("/posts/"+path);
      setPost(res.data);
    };
    getPost();
  },[path]);

  return (
    <div className="singlepost">
       <div className="singlepostWrapper">
             {post.photo && (<img className="singlepostImage" src={PF+post.photo} alt="..loading" />)}
            
            <h1 className="singlepostTitle">{post.title}
              <div className="singlepostEdit">
              <i class="singlepostIcon fa-solid fa-pen-to-square"></i>
              <i class="singlepostIcon fa-solid fa-trash"></i>
              </div>
            </h1>
            <div className="singlepostInfo">
                <span className="singlepostAuthor">
                    Author: <Link to={`/?user=${post.username}` } className="link" >{post.username}</Link>
                </span>
                <span className="singlepostDate">
                {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <div className="singlepostDesc">
                <p>{post.desc}
                </p>
            </div>
       </div>
    </div>
  )
}
