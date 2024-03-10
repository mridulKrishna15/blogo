import TopBar from "./components/topbar/topbar";
import Home from "./pages/home/home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import{
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const user=false;
  return (
    <Router>
      
      
     <TopBar/>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={user? <Home/>:<Register/>}/>
      <Route path="/login" element={user?<Home/>:<Login/>}/>
      <Route path="/write" element={user?<Write/>:<Register/>}/>
      <Route path="/settings" element={user?<Settings/>:<Register/>}/>
      <Route path="/post" element={<Single/>}/>
     </Routes>

      
    </Router>
  );
}

export default App;
