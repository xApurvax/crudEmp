
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

import React from 'react'

const Items = ({currentItems}) => {
  return (
    <div className='flex gap-2'>
        {currentItems &&
        currentItems.map((item) => (
        <div>
            <h3>{item}</h3>
        </div>
        ))}
    </div>
  )
}

export default Items