import DetailsBar from "./DetailsBar"
import SideBar from "./SideBar"

const LandingDetails = () => {
  return (
    <div>
        <section className="bg-[#FAFAFC] px-[60px] py-[36px]">
            <section className="flex flex-col gap-[8px]">
                <div className="flex font-[600] text-[12px] leading-[16px] uppercase text-[#8F90A6]">
                    <p>used car for sale</p>
                </div>
                <div className="flex font-[700] text-[32px] leading-[44px] text-[#28293D]">
                    <p>Showing 1,234 cars</p>
                </div>
            </section>
            <section className="flex mt-[36px] gap-[24px] ">
                <section className="w-[30%]">
                    <SideBar />
                </section>
                <section className="w-[100%]">
                    <DetailsBar />
                </section>
            </section>
        </section>
    </div>
  )
}

export default LandingDetails