import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Items from './Items';
// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

const Pagination = ({ itemsPerPage }) => {

    const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      {/* <Items currentItems={currentItems} /> */}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={"flex py-[64px] justify-center  gap-x-[27px]"}
        pageClassName={"flex items-center justify-center w-[36px] bg-[#FFFFFF] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB]"}
        pageLinkClassName= {"font-[500] text-[14px] text-[#555770] flex items-center justify-center h-full w-full "}
        previousClassName={"bg-[#8F90A6] hover:bg-blue flex items-center justify-center w-[36px]  rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB]"}
        previousLinkClassName={"flex items-center justify-center h-full w-full"}
        nextClassName={"bg-black flex items-center justify-center w-[36px]  rounded-[6px] h-[36px] border-[1px] border-solid text-[white] border-[#E4E4EB]"}
        nextLinkClassName={"flex items-center justify-center h-full w-full"}
        breakClassName={"flex items-center justify-center w-[36px] bg-[#FFFFFF] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB]"}
        activeLinkClassName	={"text-blue"}
        activeClassName="border-[#FF8800] border-[2px] bg-[#FFFFFF] text-[#FF8800]"

      />
    </div>
  )
}

export default Pagination