import React, { useState, useEffect } from 'react'
import axios from "axios";
import Card from "./Card.jsx";

const Slidbar = () => {
    const [apiMovRfuData, setMovRfuApiData] = useState([]);

    useEffect(() => {
      const fetchMovieUcData = async () => {
        const url =
          "https://api.themoviedb.org/3/movie/top_rated?api_key=7a6e110a340d0908688b03ce0569944f";
        const { data } = await axios.get(url);
        setMovRfuApiData(data.results);
      };
  
      fetchMovieUcData();
    }, []);
  
    if (apiMovRfuData?.length === 0 ) {
      return <p>loading...</p>;
    }
  return (
    <div>
        <section id="main-sbmv">
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
            <div className='sb-card'>
            {apiMovRfuData.map((movie) => {
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

export default Slidbar