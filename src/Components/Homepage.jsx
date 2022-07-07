import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsPlayFill } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { FaImdb } from "react-icons/fa";

const Homepage = () => {
  const [apiMovData, setMovApiData] = useState([]);
  const [apiImgData, setImgApiData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/284052?api_key=7a6e110a340d0908688b03ce0569944f";
      const { data } = await axios.get(url);
      setMovApiData(data);
    };

    const fetchImageData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/284052/images?api_key=7a6e110a340d0908688b03ce0569944f";
      const { data } = await axios.get(url);
      console.log(data, "images");
      setImgApiData(data);
    };

    fetchMovieData();
    fetchImageData();
  }, []);

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
      <section>
        <div id="main-homepage-bg">
          <img
            className="poster-hp"
            src={`https://image.tmdb.org/t/p/original/${apiImgData.backdrops[13].file_path}`}
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
                {apiMovData?.genres[1].name}, {apiMovData?.genres[2].name},{" "}
                {apiMovData?.genres[3].name}
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
        </div>
      </section>
    </div>
  );
};

export default Homepage;
