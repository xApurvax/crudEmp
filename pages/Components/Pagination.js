import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useSelector , useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate';
import { IoIosArrowForward,IoIosArrowBack } from 'react-icons/io';
import { fetchPage,pageValue } from '../Redux-store/homePageSlice';

const Pagination = () => {

  const {count} = useSelector((state) => state.homePageSlice);


  const dispatch = useDispatch()

  const handlePageClick = (event) => {
    dispatch(pageValue(event.selected + 1))
    dispatch(fetchPage(event.selected + 1))
  };

  return (
    <div>
    {Math.ceil(count/20) <= 1 ? null :
      <ReactPaginate
        breakLabel="..."
        nextLabel={<IoIosArrowForward size={18} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(count/20)}
        previousLabel={<IoIosArrowBack size={18} />}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
        containerClassName={"flex py-[64px] justify-center gap-x-[24px]"}
        pageClassName={"flex items-center justify-center w-[36px] bg-[#FFFFFF] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB]"}
        pageLinkClassName= {"font-[500] text-[14px] flex items-center justify-center h-full w-full "}
        previousClassName={"prev_btn hover:bg-blue flex items-center justify-center w-[36px]  rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB]"}
        previousLinkClassName={"flex items-center justify-center h-full w-full"}
        nextClassName={"nxt_btn hover:bg-blue flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid text-[white] border-[#E4E4EB]"}
        nextLinkClassName={"flex items-center justify-center h-full w-full"}
        breakClassName={"flex items-center justify-center w-[36px] bg-[#FFFFFF] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB]"}
        activeLinkClassName	={"text-blue"}
        activeClassName={"border-[#FF8800] border-[2px] bg-[#FFFFFF] text-[#FF8800]"}
      />}
    </div>
  )
}

export default Pagination