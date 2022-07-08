import React, { useState, useEffect } from 'react'
import axios from "axios";
import Card from "./Card.jsx";

const Classic = () => {
    const [apiMovCuData, setMovCApiData] = useState([]);

    useEffect(() => {
      const fetchMovieUcData = async () => {
        const url =
          "https://api.themoviedb.org/3/movie/now_playing?api_key=7a6e110a340d0908688b03ce0569944f&language=US";
        const { data } = await axios.get(url);
        setMovCApiData(data.results);
      };
  
      fetchMovieUcData();
    }, []);
  
    if (apiMovCuData?.length === 0 ) {
      return <p>loading...</p>;
    }
  return (
    <div>
        <section id="main-sbmv">
            <div className='sb-haed'>
                <p>BOLLYWOOD CLASSIC</p>
            </div>
            <div className='sb-card'>
            {apiMovCuData.map((movie) => {
                return <>    
                            <Card movies={movie} />
                        </>
                        })
            }
            </div>
        </section>
    </div>
  )
}

export default Classic