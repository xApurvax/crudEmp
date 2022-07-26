import React,{useRef} from 'react';
import Card from './Card';
import Slider from "react-slick";
import "./Comp.css"
import { HiArrowLeft,HiArrowRight } from 'react-icons/hi';
// import {Swiper,SwiperSlide } from 'swiper/react';
// import { Mousewheel, Pagination , Navigation } from "swiper";
// import 'swiper/css';
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const SampleNextArrow =(props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#FAFAFA" ,borderRadius:"50%",width:"48px",height:"48px" ,overflow:"hidden"}}
      onClick={onClick}
    > 
    <HiArrowRight fill='#ff5000' size={24} className='relative top-[-8px] left-[12px] '/>
    </div>
  );
}

const SamplePrevArrow =(props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#FAFAFA" ,width:"48px",height:"48px",top:"" ,borderRadius:"50%",overflow:"hidden",zIndex:"2" }}
      onClick={onClick}
    >
    <HiArrowLeft fill='#ff5000' size={24} className='relative top-[-8px] left-[12px]' />
    </div>
  );
}


const Sliderbar = ({cardDataApi}) => {
  
  // console.log(cardDataApi,"cardsss");
  // console.log(matchStatusData,"MatchStatus");

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots: dots => (
        <div
          style={{
            borderRadius: "5px",
            fontSize:"20px",
            color: "white",
            // border: "1px blue solid",
            height:"45px ",
            top:"-50px" ,
            bottom:"215px",
            // width:"0",
            // height:"0"
          }}
        >
          <ul style={{float:"right",position:"relative",left:"0",right:"0",maxHeight: "15px"}}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "white",
            // border: "1px blue solid",
            position: 'relative',
          }}
        >
          {"•"}
        </div>
      )
    };

  return (
    <div>
        <div className= "bg-[#001240]  h-[168px] pt-[20px] flex justify-center mt-[59px] mb-[150px]">
            <div className='flex flex-col w-[1024px] gap-[16px] ' > 
              <div className ='text-[#FAFAFA] font-[600] leading-[1.6] tracking-[0.2px] text-[20px] '>
                <p>Featured Matches</p>
              </div>
              <div className=''>
                   
                {/* <Swiper
                direction={"horizontal"}
                slidesPerView={3}
                spaceBetween={9}
                loop={true}
                mousewheel={true}
                navigation={{
                  clickable: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Mousewheel, Pagination,Navigation]}
                className="mySwiper"
              >
                <SwiperSlide> <Card /></SwiperSlide>
                <SwiperSlide> <Card /></SwiperSlide>
                <SwiperSlide> <Card /></SwiperSlide>
                <SwiperSlide> <Card /></SwiperSlide>
                <SwiperSlide> <Card /></SwiperSlide>
                <SwiperSlide> <Card /></SwiperSlide>
                <SwiperSlide> <Card /></SwiperSlide>
                <SwiperSlide> <Card /></SwiperSlide>
                <SwiperSlide> <Card /></SwiperSlide>
              </Swiper> */}

              <Slider {...settings} className=" h-[210px] ">   
              {cardDataApi?.map((match) => {
                return <>    
                        <Card matches={match} />
                         </>
                        })
              }
              </Slider>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Sliderbar