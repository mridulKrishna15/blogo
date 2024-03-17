import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import "./Home.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Home() {
  const [posts,setPosts]=useState([]);
  const {search}= useLocation();
  useEffect(()=>{
      const fetchPosts=async()=>{
          const res=await axios.get("/posts/"+search);
          setPosts(res.data);
      }
      fetchPosts();
  },[search])
  return (
    <div className="homepage">
        <Header/>
        <div className="home">
           <Posts posts={posts}/>
           <Sidebar/>
        </div>
    </div>
  )
}
