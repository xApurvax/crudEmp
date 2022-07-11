import React from 'react'
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Homepage from "./Homepage.jsx";
import Slidbar from "./Slidbar.jsx";
import Footer from "./Footer.jsx";
import './Comp.css';

const Home = () => {

  return (
    <div>
        <Navbar />
        <Sidebar />
        <Homepage />
        <Slidbar type={"popular"} title={"MOVIES YOU MUST WATCH"}/>
        <Slidbar type={"284052/similar"} title={"RECOMMENDED MOVIES FOR YOU"} />
        <Slidbar type={"top_rated"} title={"BOLLYWOOD CLASSIC"} />
        <Footer />
    </div>
  )
}

export default Home