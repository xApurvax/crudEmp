import React, { useState, useEffect } from 'react'
import {useParams ,Link } from 'react-router-dom'
import axios from "axios";
import Slider from "react-slick";
import { FaImdb } from "react-icons/fa";

const Mlslidebar = (props) => {

    let {id} = useParams();
    const [apiMovMlData, setMovMlApiData] = useState([]);

    useEffect(() => {
      const fetchMovieMlData = async () => {
        const url =
          `https://api.themoviedb.org/3/movie/${props.m_Id}/${props.type}?api_key=7a6e110a340d0908688b03ce0569944f`;
        const { data } = await axios.get(url);
        
        setMovMlApiData(data.results);
      };

      fetchMovieMlData();
    }, [id]);

    if (apiMovMlData.length === 0 ) {
      return <p>loading...</p>;
    }

    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: true,
      easse: "linear",
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };

  return (
    <div>
        <section id="main-ml">
        <div className='sb-haed'>
                <p>{props.for}</p>
        </div>
        <div className='ml-card'>
        <Slider {...settings} >
        {apiMovMlData?.map((more,index) => {
                    if(more.poster_path){
                    return (<div className='ml-card-cont' key={index}> 
                            <Link  to={`/movie/${more.id}`}> 
                            <img  className='ml-card-img' src={`https://image.tmdb.org/t/p/original/${more?.backdrop_path}`} />
                            <div className='ml-info'>
                              <div className='ml-info-head'>
                                  <p className='ml-info-title'>{more?.title}</p>
                                  <p className='ml-info-desc'>{more?.overview}</p>
                              </div>
                              <div className='ml-info-rm'>
                              <div className='ml-info-rating'>
                                  <FaImdb className="idbm" color={"#FFC907"} size={28}/> 
                                  <p className='rating-ml'>{(more?.vote_average).toFixed(1)}</p>
                              </div>
                                  {/* <p style={{color:""}}>View Now</p> */}
                              </div>
                            </div>
                            </Link> 
                            </div>)
                            }})
        }
        </Slider>
        </div>
        </section>
    </div>
  )
}

export default Mlslidebar