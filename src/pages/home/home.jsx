import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import "./Home.css";
export default function Home() {
  return (
    <div className="homepage">
        <Header/>
        <div className="home">
           <Posts/>
           <Sidebar/>
        </div>
    </div>
  )
}
