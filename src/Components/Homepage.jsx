import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsPlayFill,BsDownload } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { FaImdb } from "react-icons/fa";

const Homepage = ({id , movieId}) => {
  // let {id} = useParams();
  const [movie_id, setmovie_id] = useState('284052');
  const [apiMovData, setMovApiData] = useState([]);
  const [apiImgData, setImgApiData] = useState([]);
  
  // console.log(id,"movie id")

  useEffect(() => {
    if(movieId) {
      setmovie_id(movieId);
    }else{
      setmovie_id('284052');
    }

    // console.log({movie_id});

    const base_url= "https://api.themoviedb.org/3/movie/";

    const fetchMovieData = async () => {
      let url = base_url+movie_id+"?api_key=7a6e110a340d0908688b03ce0569944f";
      const { data ,status } = await axios.get(url);
      // console.log(data);
      if(status === 200){
        setMovApiData(data);
      }
      // console.log(apiMovData, "m data");
    };
    
    const fetchImageData = async () => {
      let url =
      base_url+movie_id+"/images?api_key=7a6e110a340d0908688b03ce0569944f";
      const { data ,status } = await axios.get(url);
      // console.log(data);
      if(status === 200){
        setImgApiData(data);
      }
      console.log(apiImgData, "images");
    };

    fetchMovieData();
    fetchImageData();
  // }, []);
  }, [movie_id,apiMovData,apiImgData]);

  if (apiImgData.length === 0 || apiMovData.length === 0) {
    return <p>loading...</p>;
  }

  return (
    <div>
      {/* <div>
            <p>{apiMovData?.overview}</p>
            <img src={`https://image.tmdb.org/t/p/original/${apiImgData.logos[4].file_path}`} alt='' />
            <img className='posterImg' src={`https://image.tmdb.org/t/p/original/${apiImgData.posters[1].file_path}`} alt='' /> 

        </div> */}
      <div id="main-homepage">
      <section >
        <div id="main-homepage-bg">
          <img
            className="poster-hp"
            src={`https://image.tmdb.org/t/p/original/${apiImgData.backdrops[0].file_path}`}
            alt=""
          />
        </div>

        <div id="main-homepage-cont">
          <div className="logo-hp">
            <img
              className="logoImg"
              src={`https://image.tmdb.org/t/p/original/${apiImgData.logos[0].file_path}`}
              alt=""
            />
          </div>
          <div className="overview-hp">
            <p>{apiMovData?.overview}</p>
          </div>
          <div className="genres-hp">
            <div className="genres-hp-head">
              <p>GENRES</p>
            </div>
            <div className="genres-hp-cont">
              <p>
                {apiMovData?.genres[0].name}
              </p>
            </div>
          </div>
          <div className="watchlist-hp">
            <button className="watch">
              WATCH <BsPlayFill size={28} id="wl-icons" />
            </button>
            <button className="list">
              MY LIST <MdAdd size={28} id="wl-icons" />
            </button>
            {movie_id == id && 
            <button className="download">
              <BsDownload size={28} id="wl-icons" />
            </button>}

          </div>
          <div className="ratings-hp">
            <FaImdb className="idbm" color={"#FFC907"} size={40}/>
            <p className="rating">{apiMovData?.vote_average}</p>
            <p className="ua">U/A</p>
            <p className="restype">4K</p>
            <p className="relesedate">
              {new Date(apiMovData?.release_date).getFullYear()}
            </p>
          </div>

          {movie_id == id &&     
          <>
          <div className="genres-hp">
            <div className="genres-hp-head">
              <p>AUDIO</p>
            </div>
            <div className="genres-hp-cont">
              <p>
                {apiMovData?.spoken_languages[0].english_name}
              </p>
            </div>
          </div>
          <div className="genres-hp">
            <div className="genres-hp-head">
              <p>SUBTITLES</p>
            </div>
            <div className="genres-hp-cont">
              <p>
              {apiMovData?.spoken_languages[0].english_name}
              </p>
            </div>
          </div>
          </>
        }
        </div>
      </section>
      </div>
    </div>
  );
};

export default Homepage;
