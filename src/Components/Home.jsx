import React, { useState, useEffect } from "react";
import {useParams } from 'react-router-dom'
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Homepage from "./Homepage.jsx";
import Slidbar from "./Slidbar.jsx";
import Footer from "./Footer.jsx";
import Ctslidebar from "./Ctslidebar.jsx";
import Mlslidebar from "./Mlslidebar.jsx";
import './Comp.css';

const Home = () => {
  let {id} = useParams();
  console.log(id,"movie id main...................................................");

  const [movieId, setMovieId] = useState('284052');

  useEffect(() => {
    if(id) {
      setMovieId(id); 
    }else {
      setMovieId('284052'); 
    }
    console.log({movieId},"hiiiiii");
  },[movieId, id]);

  return (
    <div>
        <Navbar />
        <Sidebar />
        <Homepage id={id} movieId={movieId} />
        {movieId === '284052' ?
          <>
            <Slidbar type={"284052/similar"} title={"RECOMMENDED MOVIES FOR YOU"} />
            <Slidbar type={"popular"} title={"MOVIES YOU MUST WATCH"}/> 
            <Slidbar type={"top_rated"} title={"BOLLYWOOD CLASSIC"} />
          </>
          :
          <>
            <Ctslidebar  type={"credits"}  for={"CAST AND CREW INFO"} m_Id={movieId} title={"TRAILER"}/>
            <Mlslidebar for={"MORE LIKE THIS"} m_Id={movieId} type={"similar"} play={"videos"} />
          </>
        }
        <Footer />
    </div>
  )
}

export default Home