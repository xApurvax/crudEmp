import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useParams } from 'react-router-dom'
import { base_url ,api_token,end_url } from '../Pages/Config'
import ScoreDropDown from './ScoreDropDown';
import { Audio } from  'react-loader-spinner'
// import { api_token } from '../Pages/Config'
// import { end_url } from '../Pages/Config'

const ScoreBoard = ({score,localScore,visitorScore,localTeamBatting,visitorTeamBatting,localTeamBowling,visitorTeamBowling,viExtras,loExtras,lineUpLocal,lineUpVisitor,dNBLocal,dNBVisitor}) => {

  // console.log(visitorScore ,"score !!!")
  // const [localScore, setLocalScore] = useState([]);
  // const [visitorScore, setVisitorScore] = useState([]);

  // let localTeamScore = score?.runs?.filter((sor) => { 
  //   if (sor.team_id == score.localteam_id)
  //    {
  //      return sor 
  //   } 
  // })

  // let visitorTeamScore = score?.runs?.filter((sor) => { 
  //   if (score.visitorteam_id == sor.team_id)
  //    { 
  //     return sor 
  //   } 
  // })
  //     // const localScore = localTeamScore;
  //     // const visitorScore = visitorTeamScore;
  //   if(score.status === 200){
  //     setLocalScore(localTeamScore)
  //     setVisitorScore(visitorTeamScore)
  //   }


  return (<>
    {(score && localScore && visitorScore && localTeamBatting && visitorTeamBatting && localTeamBowling && visitorTeamBowling && viExtras && loExtras && lineUpLocal && lineUpVisitor && dNBLocal && dNBVisitor) ? 
   ( <div>
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
              <div className='text-[14px] text-[#000] px-[33px] font-[600] '>
                  <p>Scorecard</p>
              </div>
              <div className='text-[14px] text-[#787878] px-[35px] '>
                  <p>Squad</p>
              </div>
            </section>

            {/* <section className='flex flex-col w-full'>
              <section className='flex justify-between px-[18px] py-[15px] bg-[#fafafa] border-b-[1px] border-solid border-[#e6e6e6] '>
                <div className='flex items-center text-[16px] text-[#141414] font-[600] leading-[1.25] tracking-[0.5px] '>
                    <p>{score?.localteam?.code}</p>
                </div>
                <div className='flex items-center gap-[25px] text-[14px] text-[#141414] font-[600] tracking-[0.25px] '>
                    <p>{localScore?.score}/{localScore?.wickets}</p>
                    <div><IoIosArrowDropdownCircle color="#ffb999" size={24} /></div>
                </div>
              </section>
              <section className='flex justify-between px-[18px] py-[15px] bg-[#fafafa] border-b-[1px] border-solid border-[#e6e6e6] '>
                <div className='flex items-center text-[16px] text-[#141414] font-[600] leading-[1.25] tracking-[0.5px] '>
                    <p>{score?.visitorteam?.code}</p>
                </div>
                <div className='flex items-center gap-[25px] text-[14px] text-[#141414] font-[600] tracking-[0.25px] '>
                    <p>{visitorScore?.score}/{visitorScore?.wickets}</p>
                    <div><IoIosArrowDropdownCircle color="#ffb999" size={24} /></div>
                </div>
              </section>
            </section> */} 
            <ScoreDropDown score={score} teamScore={localScore} teamCode={score?.localteam?.code} Batting={localTeamBatting} bowling={localTeamBowling} Extras={loExtras} donotbat={dNBLocal} lineup={lineUpLocal} />
            <ScoreDropDown score={score} teamScore={visitorScore} teamCode={score?.visitorteam?.code} Batting={visitorTeamBatting} bowling={visitorTeamBowling} Extras={viExtras} donotbat={dNBVisitor} lineup={lineUpVisitor} />
        </section>
      </section>
    </div>) :
    ( <div className='flex justify-center items-center min-h-[450px] '>	
          <Audio color="#ff5000"  height={150} width={150} />
    </div>) }
 </> )
}

export default ScoreBoard