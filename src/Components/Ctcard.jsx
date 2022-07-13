import React from "react";
import {Link } from 'react-router-dom'

const Ctcard = (casts) => {
    console.log(casts,"casts")
  return (
    <div id="main-card-ct">
            <section id='ct-card'>
                <div className='card-img'>
                {/* <Link to={`/movie/${movies.id}`}> */}
                    <img
                    id="card-pro"
                    src={`https://image.tmdb.org/t/p/w185/${casts?.casts.profile_path}`}
                    alt="card"
                    />
                {/* </Link> */}
                </div>
                <div className='card-head'>
                {/* <Link to={`/movie/${movies.id}`}> */}
                    <p>{casts?.casts.original_name}</p>
                {/* </Link> */}
                </div>
                <div className='card-date'>
                    <p className="card-rd">
                    {casts?.casts.character}
                    </p>
                </div>
            </section>
    </div>
  )
}

export default Ctcard