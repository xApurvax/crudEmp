import React, { useState, useEffect } from 'react'
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import Card from "./Card.jsx";

const Slidbar = (props) => {
    const [apiMovUcData, setMovUcApiData] = useState([]);

    useEffect(() => {
      const fetchMovieUcData = async () => {
        const url =
          `https://api.themoviedb.org/3/movie/${props.type}?api_key=7a6e110a340d0908688b03ce0569944f`;
        const { data } = await axios.get(url);
        setMovUcApiData(data.results);
      };
  
      fetchMovieUcData();
    }, []);
  
    if (apiMovUcData?.length === 0 ) {
      return <p>loading...</p>;
    }
    
  return (
    <div>
        <section id={props.type === "popular" ? "main-sb" : "main-sbmv"}>

        {props.type === "popular" && (
            <>
            <div className='sb-haed'>
                <p>{props.title}</p>
                <div className='sb-button'>
                    <button>FILTER <IoIosArrowDown color='#FAFAFA' size={28}/></button>
                </div>
            </div>
            </>
        ) }

        {props.type === "284052/similar"  && (
            <>
            <div className='sb-haed'>
                <p>RECOMMENDED MOVIES FOR YOU</p>
            </div>
            <div className='sb-button'>
                    <button>Hindi</button>
                    <button>Bengali</button>
                    <button>Marathi</button>
                    <button>Assamese</button>
                    <button>Telugu</button>
                    <button>Malyalam</button>
            </div>
            </>
        ) }

        {props.type === "top_rated"  && (
            <>
            <div className='sb-haed'>
                <p>BOLLYWOOD CLASSIC</p>
            </div>
            </>
        ) }

        

            <div className='sb-card'>
            {apiMovUcData.map((movie) => {
                return <>    
                        <Card movies={movie} />
                         </>
                        })
            }
            </div>
        </section>
            <section id="showmoresl">
                {props.type === "top_rated"  && (
                <>
                    <button className="watch-sl">
                    Show More <IoIosArrowDown size={20} id="wl-icons" />
                    </button>
                </>
                ) }
            </section>
    </div>
  )
}

export default Slidbar