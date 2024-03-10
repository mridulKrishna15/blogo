import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'
import image from "../../components/images/profile.jpg"
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingswrapper">
        <div className="settingsTitle">
            <span className="settingsupdate">Update your account</span>
            <span className="settingsdelete">Delete account</span>
        </div>
        <form  className="settingsForm">
            <label >Profile picture</label>
            <div className="settingsPP">
                <img src={image} alt="" />
                <label htmlFor="fileInput" >
                <i className="settingsPPicon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Mridul" />
            <label>Email</label>
            <input type="email" placeholder="shuklamridul1729@gmail.com" />
            <label>Password</label>
            <input type="password"  />
            <button className="settingsSubmit">Update</button>
            

        </form>
      </div>
       <Sidebar/>
    </div>
  )
}
