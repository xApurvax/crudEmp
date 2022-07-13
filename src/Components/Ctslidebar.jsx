import React, { useState, useEffect } from 'react'
import axios from "axios";
import { IoIosArrowDown,IoIosPlay } from "react-icons/io";
// import { IoPlaySharp } from "react-icons/io";
import Card from "./Card.jsx";
import Slider from "react-slick";
import Ctcard from './Ctcard.jsx';
import ReactPlayer from 'react-player/youtube'

const Ctslidebar = (props) => {
 
    const [apiMovCcData, setMovCcApiData] = useState([]);
    const [apiMovVidCcData, setMovVidCcApiData] = useState([]);

    useEffect(() => {
      const fetchMovieCcData = async () => {
        const url =
        //   `https://api.themoviedb.org/3/movie/?api_key=7a6e110a340d0908688b03ce0569944f`;
          `https://api.themoviedb.org/3/movie/${props.m_Id}/credits?api_key=7a6e110a340d0908688b03ce0569944f`;
        const { data } = await axios.get(url);
        setMovCcApiData(data.cast);
        console.log(apiMovCcData,"Movieeeee castttttt");
      };

      const fetchMovieVidCcData = async () => {
        const url =
        //   `https://api.themoviedb.org/3/movie/?api_key=7a6e110a340d0908688b03ce0569944f`;
          `https://api.themoviedb.org/3/movie/${props.m_Id}/videos?api_key=7a6e110a340d0908688b03ce0569944f`;
        const { data } = await axios.get(url);
        setMovVidCcApiData(data.results[0]);
        console.log(data.results[0],"Movieeeee");
      };
      
      fetchMovieCcData();
      fetchMovieVidCcData();
    }, []);
//   if(apiMovCcData.length === 0){
//     return(
//         <p>Loading......</p>
//     )
//   }
    
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      swipeToSlide: true,
    //   autoplay: true,
    //   autoplaySpeed: 1500,
    //   pauseOnHover: true,
    //   easse: "linear",
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };

  return (
    <div>
        <section id="main-ct">
            <div id='ct-haed'>
                <div>
                    <p>{props.title}</p>
                </div>
                <section id="ct-trail">
                  <ReactPlayer id="ct-trailer" light controls config playing
                  playIcon={<div className='play-icon' ><IoIosPlay color={"#5436A9"} size={56} /></div>} 
                  width={"307px"} height={"170px"} url={`https://www.youtube.com/watch?v=${apiMovVidCcData.key}`} />
                </section>
                
            </div>
            
            <div id='ct-cont'>
                <div>
                    <p className='ct-cont-head'>{props.for}</p>
                </div>
                <div className='ct-cards'>
                {/* <Slider {...settings} > */}
                {apiMovCcData?.map((cast) => {
                    if(cast.profile_path){
                    return <>    
                            <Ctcard casts={cast} />
                                </>
                            }})
                }
                {/* </Slider>   */}
                </div>
                <section id="showmoresl-ct">
                {props.type === "credits"  && (
                <>
                    <button className="watch-sl-ct">
                    Show More <IoIosArrowDown size={20} id="wl-icons" />
                    </button>
                </>
                ) }
            </section>
            </div>
        {/* {props.type === "popular" && (
            <>
            <div id='ct-haed'>
                <p>{props.title}</p>
                <p>{props.for}</p>
            </div>
            </>
        ) }

        <section id='main-trailer'>
        </section>    
        <Slider {...settings} >
        {apiMovCcData.map((movie) => {
            return <>    
                    <Card movies={movie} />
                        </>
                    })
        }
        </Slider> */}
           
        </section>
            {/* <section id="showmoresl-ct">
                {props.type === "credits"  && (
                <>
                    <button className="watch-sl-ct">
                    Show More <IoIosArrowDown size={20} id="wl-icons" />
                    </button>
                </>
                ) }
            </section> */}
    </div>
  )
}

export default Ctslidebar