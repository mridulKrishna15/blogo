import "./post.css"
import image from '../images/postImg.jpg';
import {Link} from "react-router-dom";
export default function Post() {
  return (
    <div className="post">
         <img className="postImg" src={image} alt="loading..." />
         <div className="postInfo">
            <div className="postCats">
                <span className="postCat">MUSIC</span>
            </div>
            <span className="postTitle"><Link to="/post" className="link">Lorem, ipsum dolor sit amet</Link> </span>
            <hr />
            <span className="postDate">1 hour ago</span>
         </div>
         <div className="postDesc">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni voluptates nulla suscipit dolorem quibusdam magnam at maxime sapiente iure minima sit, perferendis officia quam? Molestias itaque corrupti voluptatum eveniet veritatis aliquid dolor recusandae reiciendis sit? Nesciunt quas cumque amet quae.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita odio assumenda corrupti provident fuga minus architecto, inventore in nihil distinctio aspernatur vero quam tenetur ea quia praesentium officia quo, ut fugit amet deleniti numquam minima dolores. Unde porro iusto corporis.
            </p>
         </div>
    </div>
  )
}
