import React from "react";
import { FaImdb ,FaHeart } from "react-icons/fa";
import { BsEye } from "react-icons/bs";

const Card = ({movies}) => {

  return (
    <div id="main-card">
            <section id='card'>
                <div className='card-img'>
                    <img
                    className="card-poster"
                    src={`https://image.tmdb.org/t/p/w185/${movies?.poster_path}`}
                    alt="card"
                    />
                </div>
                <div className='card-head'>
                    <p>{movies?.original_title}</p>
                </div>
                <div className='card-date'>
                    <p className="card-rd">
                    {new Date(movies?.release_date).getFullYear()}
                    </p>
                </div>
                <div className="card-ra">
                    <div className='card-ratings'>
                        <FaImdb className="card-idbm" color={"#FFC907"} size={28}/>
                        <p className="card-rating">{movies?.vote_average}</p>
                    </div>
                    <div className='card-actions'>
                        <BsEye color={"#FAFAFA"} size={14} />
                        <FaHeart color={"#FAFAFA"} size={14} />
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Card