import "./post.css"
import image from '../images/postImg.jpg';
import {Link} from "react-router-dom";
export default function Post({post}) {
  const PF= "http://localhost:5000/image/"
  return (
    <div className="post">
      {post.photo && (<img className="postImg" src={PF+post.photo} alt="loading..." />
      )}
         
         <div className="postInfo">
            <div className="postCats">
               {post.categories.map((c)=>(
                 <span className="postCat">{c.name}</span>
               ))}
            </div>
           <Link to={`/post/${post._id}`} className="link"> <span className="postTitle">{post.title}</span></Link> 
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
         </div>
         <div className="postDesc">
            <p>{post.desc}
            </p>
         </div>
    </div>
  )
}
