import React, { useState } from 'react'
import ScoreDropDown from './ScoreDropDown';
import { Audio } from  'react-loader-spinner'

const ScoreBoard = ({score,localScore,visitorScore,localTeamBatting,visitorTeamBatting,localTeamBowling,visitorTeamBowling,viExtras,loExtras,lineUpLocal,lineUpVisitor,dNBLocal,dNBVisitor}) => {

  const [activeBorder, setActiveBorder] = useState("Scorecard");

  return (<>
    {(score && localScore && visitorScore && localTeamBatting && visitorTeamBatting && localTeamBowling && visitorTeamBowling && viExtras && loExtras && lineUpLocal && lineUpVisitor && dNBLocal && dNBVisitor) ? 
    (<div>
      <section className='flex justify-center mt-[65px] '>
        <section className='flex w-[672px] min-h-[700px] flex-col'>
            <section className='mt-[20px] flex justify-center items-center '>
                <div className='flex gap-[200px] '>
                  <div className='flex flex-col '>
                      <div className='flex text-[11px] leading-[1.27] tracking-[0.3px]  '>
                          <p className='rounded-[2px] text-[#FAFAFA] bg-[#59bf96] px-[5px] py-[3px]'>{score?.localteam?.code}</p>
                      </div>
                      <div className='flex gap-[5px]'>
                          <div className='font-[500] text-[28px] leading-[42px] tracking-[0.14px] text-[#000000] '>
                              <p className=''>{localScore?.score}/{localScore?.wickets}</p>
                          </div>
                          <div className='flex items-end font-[600] text-[12px] leading-[2] tracking-[0.4px] text-[#787878] '>
                              <p>({localScore?.overs})</p>
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
                          <p className='rounded-[2px] text-[#FAFAFA] bg-[#ce3c68] px-[5px] py-[3px]'>{score?.visitorteam?.code}</p>
                      </div>
                      <div className='flex flex-row-reverse gap-[5px]'>
                          <div className='font-[500] text-[28px] leading-[42px] tracking-[0.14px] text-[#000000] '>
                              <p className=''>{visitorScore?.score}/{visitorScore?.wickets}</p>
                          </div>
                          <div className='flex items-end font-[600] text-[12px] leading-[2] tracking-[0.4px] text-[#787878] '>
                              <p>({visitorScore?.overs})</p>
                          </div>
                      </div>
                  </div>
                </div>
            </section>

            <section className='flex justify-center '>
                <div className='text-[14px] text-[#001240] text-center font-[600] leading-[20px] tracking-[0.28px] pt-[10px] pb-[15px] '>
                  <p>{score?.note}</p>
                </div>
            </section>

            <section className='flex   border-t-[1px] border-b-[1px] border-solid border-[#e6e6e6] pt-[14px] '>
              <div className={' flex flex-col gap-[8px] text-[14px] text-center  w-[210px] '} onClick={()=>setActiveBorder("Fantacy")} >
                  <p className={`${activeBorder == "Fantacy" ?  " text-[#000]  font-[600] " : "text-[#787878]  " }`}>Fantacy</p>
                  <div className={` ${activeBorder == "Fantacy" ? " h-[6px] boreder-t-xl border-[1px] border-[solid] border-[#ff5000] bg-[#ff5000] rounded-tr-xl  rounded-tl-xl  " : " "}`}></div>
              </div>
              <div className='flex flex-col gap-[8px] text-[14px]   text-center   w-[210px]  ' onClick={()=>setActiveBorder("Info")} >
                  <p className={`${activeBorder == "Info" ?  " text-[#000]  font-[600] " : "text-[#787878]  " }`}>Info</p>
                  <div className={` ${activeBorder == "Info" ? "h-[6px] boreder-t-xl  border-[1px] border-[solid] border-[#ff5000] bg-[#ff5000] rounded-tr-xl  rounded-tl-xl " : " "}`}></div>
              </div>
              <div className='flex flex-col gap-[8px] text-[14px]  text-center  w-[210px]  ' onClick={()=>setActiveBorder("Live")} >
                  <p className={`${activeBorder == "Live" ?  " text-[#000]  font-[600] " : "text-[#787878]  " }`}>Live</p>
                  <div className={` ${activeBorder == "Live" ? " h-[6px] boreder-t-xl  border-[1px] border-[solid] border-[#ff5000] bg-[#ff5000] rounded-tr-xl  rounded-tl-xl" : " "}`}></div>
              </div>
              <div className='flex flex-col gap-[8px] text-[14px] text-center  w-[210px]  ' onClick={()=>setActiveBorder("Scorecard")} >
                  <p className={`${activeBorder == "Scorecard" ?  " text-[#000]  font-[600] " : "text-[#787878]  " }`}>Scorecard</p>
                  <div className={` ${activeBorder == "Scorecard" ? "h-[6px] boreder-t-xl  border-[1px] border-[solid] border-[#ff5000] bg-[#ff5000] rounded-tr-xl  rounded-tl-xl " : " "}`}></div>
              </div>
              <div className='flex flex-col gap-[8px] text-[14px]  text-center  w-[210px]  ' onClick={()=>setActiveBorder("Squad")} >
                  <p className={`${activeBorder == "Squad" ?  " text-[#000]  font-[600] " : "text-[#787878]  " }`}>Squad</p>
                  <div className={` ${activeBorder == "Squad" ? "h-[6px] boreder-t-xl  border-[1px] border-[solid] border-[#ff5000] bg-[#ff5000] rounded-tr-xl  rounded-tl-xl " : " "}`}></div>
              </div>
            </section>
            
            {activeBorder == "Scorecard" ? (<>
            <ScoreDropDown score={score} teamScore={localScore} teamCode={score?.localteam?.code} Batting={localTeamBatting.length>0 && localTeamBatting} bowling={localTeamBowling} Extras={loExtras} donotbat={dNBLocal} lineup={lineUpLocal} />
            <ScoreDropDown score={score} teamScore={visitorScore} teamCode={score?.visitorteam?.code} Batting={visitorTeamBatting.length>0 && visitorTeamBatting} bowling={visitorTeamBowling} Extras={viExtras} donotbat={dNBVisitor} lineup={lineUpVisitor} />
            </>):
               <></> }
        </section>
      </section>
    </div>) :
    ( <div className='flex justify-center items-center min-h-[450px] '>	
          <Audio color="#ff5000"  height={150} width={150} />
    </div>) }
 </> )
}

export default ScoreBoard