import DetailsBar from "./DetailsBar"
import SideBar from "./SideBar"

const LandingDetails = ({count,allCars,carMake}) => {

    console.log(allCars)
  return (
    <div>
        <section className="bg-[#FAFAFC] px-[60px] py-[36px]">
            <section className="flex flex-col gap-[8px]">
                <div className="flex font-[600] text-[12px] leading-[16px] uppercase text-[#8F90A6]">
                    <p>used car for sale</p>
                </div>
                <div className="flex font-[700] text-[32px] leading-[44px] text-[#28293D]">
                    <p>Showing {count.count} cars</p>
                </div>
            </section>
            <section className="flex mt-[36px] gap-[24px] ">
                <section className="w-[30%]">
                    <SideBar carMake={carMake} />
                </section>
                <section className="w-[100%] flex flex-col gap-[24px]">
                {allCars && allCars.map((cars) => {
                    return (
                            <>
                                <DetailsBar car={cars} />
                            </>
                    )
                })
                }
                </section>
            </section>
        </section>
    </div>
  )
}

export default LandingDetails

// export const getStaticProps = async () => {
//     // export async function getStaticProps(){
//   const response = await fetch("https://autodigg.com/ad-api/cars/list?car_type=Used+car%2CNew+car%2CCertified+pre-owned&page=1&radius=100&year=2011%2C2021&return=count")
//   const data = await response.json()

//   return {
//     props:{
//       count : data,
//     },
//   } 
// }