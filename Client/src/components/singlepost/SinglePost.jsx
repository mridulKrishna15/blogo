import "./singlepost.css"
import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import image from '../images/postImg.jpg'
import { Context } from "../../context/Context";
export default function SinglePost() {
  const PF= "http://localhost:5000/image/";
  const {user}=useContext(Context);
  const location= useLocation();
  console.log(location);
  const path= location.pathname.split("/")[2];
  const [post,setPost]=useState("");
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [updateMode,setUpdateMode]=useState(false);


  useEffect(()=>{
    const getPost=  async()=>{
      const res= await axios.get("/posts/"+path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  },[path]);

  const handleDelete=async()=>{
    try{
      await axios.delete(`/posts/${post._id}`,{data:{username:user.username} , });
      window.location.replace("/");
    }
     
  catch(err){

  }
}
const handleUpdate=async()=>{
  try{
    await axios.put(`/posts/${post._id}`,{username:user.username,
      title,
      desc 
    } );
    setUpdateMode(false);
  }
   
catch(err){

}
}


  return (
    <div className="singlepost">
       <div className="singlepostWrapper">
             {post.photo && (<img className="singlepostImage" src={PF+post.photo} alt="..loading" />)}
             {
               updateMode? <input type="text" value={title} className="singlepostTitleInput" onChange={(e)=>setTitle(e.target.value)}/> : (
                <h1 className="singlepostTitle">{title}
                {post.username===user?.username && (
                   <div className="singlepostEdit">
                   <i class="singlepostIcon fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
                   <i class="singlepostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                   </div>
                )}
               
             </h1>
               )
             }
           
            <div className="singlepostInfo">
                <span className="singlepostAuthor">
                    Author: <Link to={`/?user=${post.username}` } className="link" >{post.username}</Link>
                </span>
                <span className="singlepostDate">
                {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            {updateMode ? <textarea className="singlepostDescInput" autoFocus value={desc} onChange={(e)=>setDesc(e.target.value)}/> :
            (
              <div className="singlepostDesc">
              <p>{desc}
              </p>
          </div>
            )
            }
            {updateMode && (<button className="singlePostButton" onClick={handleUpdate}>Update</button>)}
            
           
       </div>
    </div>
  )
}
