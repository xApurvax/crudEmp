import React, { useState, useEffect } from 'react'
import {useParams ,Link } from 'react-router-dom'
import axios from "axios";
import Slider from "react-slick";

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
        {apiMovMlData?.map((more) => {
                    if(more.poster_path){
                    return <> <Link to={`/movie/${more.id}`}> 
                            <img className='ml-card-img' src={`https://image.tmdb.org/t/p/original/${more?.backdrop_path}`} /> </Link> 
                                </>
                            }})
        }
        </Slider>
        </div>
        </section>
    </div>
  )
}

export default Mlslidebar