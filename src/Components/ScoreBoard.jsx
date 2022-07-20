import React from 'react'

const ScoreBoard = () => {
  return (
    <div>
      <section className='flex justify-center'>
        <section className='flex w-[672px] justify-center items-center flex-col'>
            <section className='mt-[20px] flex justify-center item-center '>
                <div className='flex gap-[200px] '>
                  <div className='flex flex-col '>
                      <div className='flex text-[11px] leading-[1.27] tracking-[0.3px]  '>
                          <p className='rounded-[2px] text-[#FAFAFA] bg-[#59bf96] px-[5px] py-[3px]'>IND</p>
                      </div>
                      <div className='flex gap-[5px]'>
                          <div className='font-[500] text-[28px] leading-[42px] tracking-[0.14px] text-[#000000] '>
                              <p className=''>359/9</p>
                          </div>
                          <div className='flex items-end font-[600] text-[12px] leading-[2] tracking-[0.4px] text-[#787878] '>
                              <p>(50)</p>
                          </div>
                      </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col justify-center items-center">
                      <div className="h-[15px] w-[1px] bg-[#e6e6e6] "></div>
                      <div className="text-[15px] text-[#787878] bg-[#e6e6e6] rounded-[50%]  text-center px-[7px] pt-[3px] ">
                        {/* p-[3px] rounded-[50%] border-solid border-[1px] border-[#ff5000]  */}
                        <p>V</p>
                      </div>
                      <div className="h-[15px] w-[1px] bg-[#e6e6e6] "></div>
                    </div>
                  </div>
                  <div className='flex flex-col '>
                      <div className='flex text-[11px] leading-[1.27] tracking-[0.3px] justify-end  '>
                          <p className='rounded-[2px] text-[#FAFAFA] bg-[#ce3c68] px-[5px] py-[3px]'>ENG</p>
                      </div>
                      <div className='flex flex-row-reverse gap-[5px]'>
                          <div className='font-[500] text-[28px] leading-[42px] tracking-[0.14px] text-[#000000] '>
                              <p className=''>359/9</p>
                          </div>
                          <div className='flex items-end font-[600] text-[12px] leading-[2] tracking-[0.4px] text-[#787878] '>
                              <p>(50)</p>
                          </div>
                      </div>
                  </div>
                </div>
            </section>

            <section className='flex justify-center '>
                <div className='text-[14px] text-[#001240] text-center font-[600] leading-[20px] tracking-[0.28px] pt-[10px] pb-[15px] '>
                  <p>New Zealand beat Irelandn by 1 run</p>
                </div>
            </section>

            <section className='flex gap-[30px]  border-t-[1px] border-b-[1px] border-solid border-[#e6e6e6] py-[14px] '>
              <div className='text-[14px] text-[#787878] px-[35px] '>
                  <p>Fantacy</p>
              </div>
              <div className='text-[14px] text-[#787878] px-[35px] '>
                  <p>Info</p>
              </div>
              <div className='text-[14px] text-[#787878] px-[35px] '>
                  <p>Live</p>
              </div>
              <div className='text-[14px] text-[#787878] px-[35px] '>
                  <p>Scorecard</p>
              </div>
              <div className='text-[14px] text-[#787878] px-[35px] '>
                  <p>Squad</p>
              </div>
            </section>

        </section>
      </section>
    </div>
  )
}

export default ScoreBoard