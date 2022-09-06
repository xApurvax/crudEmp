import React from 'react'
import ImageGallery from 'react-image-gallery';
import {Tempt1} from '../Images/Tempt1'

const GallarySlider = ({carByVin}) => {

    const images = carByVin?.photos ? carByVin?.photos?.map((data) => {
      return{  original : data ,
        thumbnail : data,
      }
    }) : [{original : "/defaultcar.svg" ,
           thumbnail : "/defaultcar.svg", }]

  return (
    <div className='bg-black py-[32px]'>
        <ImageGallery items={images} showPlayButton={false} />;
    </div>
  )
}

export default GallarySlider