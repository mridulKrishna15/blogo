import "./write.css";
import image from '../../components/images/postImg.jpg'
export default function Write() {
  return (
    <div className="write">
        <div className="img">
        <img className="writeImage" src={image} alt="" />
        </div>
      <form  className="writeform">

        <div className="writeformgroup">
            <label htmlFor="fileinput">
            <i className="writeicon fa-regular fa-image"></i>
            </label>
            <input type="file" id="fileinput" style={{display:"none"}}/>
            <input type="text" placeholder="TITLE" className="writeinput" autoFocus={true}/>
        </div>
        <div className="writeformgroup">
            <textarea placeholder="Tell us what you are thinking!!" type="text" className="writeinput writetext"></textarea>

        </div>
        <button className="writesubmit" >Publish</button>
      </form>
    </div>
  )
}
