import React, { useEffect, useState } from 'react'
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import ScoreBoard from '../Components/ScoreBoard'
import axios from "axios";
import {useParams } from 'react-router-dom'
import { base_url ,api_token,api_token1,end_url } from './Config'

const ScorePage = () => {

  let {id} = useParams();

  const [scoreApi, setScoreApi] = useState(null);
  const [localScore, setLocalScore] = useState([]);
  const [visitorScore, setVisitorScore] = useState([]);
  const [localTeamBatting , setLocalTeamBatting] = useState([]);
  const [visitorTeamBatting , setVisitorTeamBatting] = useState([]);
  const [localTeamBowling , setLocalTeamBowling] = useState([]);
  const [visitorTeamBowling , setVisitorTeamBowling] = useState([]);
  const [viExtras , setViExtras] = useState([]);
  const [loExtras , setLoExtras] = useState([]);
  const [lineUpLocal , setLineUpLocal] = useState([]);
  const [lineUpVisitor , setLineUpVisior] = useState([]);
  const [dNBLocal , setDNBLocal] = useState([]);
  const [dNBVisitor , setDNBVisior] = useState([]);
 
  const fetchData = async() => {
    const {data,status} =  await axios.get(base_url+"/"+id+api_token+end_url)
    // console.log(data.data.splice(2,10))
    // console.log(status)
    if(status === 200){
      setScoreApi(data.data)
    }  

    const localTeamScore = data.data?.runs?.filter((mScore) => { 
      if (data.data?.localteam_id === mScore?.team_id)
       {
         return mScore 
      } 
    })
    setLocalScore(localTeamScore[0])

    const visitorTeamScore = data.data?.runs?.filter((mScore) => { 
      if (data.data?.visitorteam_id === mScore?.team_id)
       { 
        return mScore 
      } 
    })
    setVisitorScore(visitorTeamScore[0])

     const localTeamBat = data.data?.batting?.filter((batting) => { 
      if (data.data?.localteam.id === batting?.team_id)
       { 
        return batting 
      } 
    })
    setLocalTeamBatting(localTeamBat)

     const localTeamBall = data.data?.bowling?.filter((ball) => { 
      if (data.data?.localteam.id === ball?.team_id)
       { 
        return ball 
      } 
    })
    setLocalTeamBowling(localTeamBall)

    const visitorTeamBat = data.data?.batting?.filter((batting) => { 
      if (data.data?.visitorteam.id === batting?.team_id)
       { 
        return batting 
      } 
    })
    setVisitorTeamBatting(visitorTeamBat)

    const visitorTeamBall = data.data?.bowling?.filter((ball) => { 
      if (data.data?.visitorteam.id === ball?.team_id)
       { 
        return ball 
      } 
    })
    setVisitorTeamBowling(visitorTeamBall)

    const extrasVi = data.data?.scoreboards?.filter((ext) => { 
      if ((data.data?.visitorteam.id === ext?.team_id)  && (ext?.type == "extra" ) )
       { 
        return ext 
      } 
    })
    setViExtras(extrasVi[0])

    const extrasLo = data.data?.scoreboards?.filter((ext) => { 
      if ((data.data?.localteam.id === ext?.team_id )  && (ext?.type == "extra" ) )
       { 
        return ext 
      } 
    })
    setLoExtras(extrasLo[0])

    const localTeamLu = data.data?.lineup?.filter((lu) => { 
      if (data.data?.localteam.id === lu?.lineup.team_id )
       { 
        return lu 
      } 
    })
    setLineUpLocal(localTeamLu)

    const visitorTeamLu = data.data?.lineup?.filter((lu) => { 
      if (data.data?.visitorteam.id === lu?.lineup.team_id)
       { 
        return lu 
      } 
    })
    setLineUpVisior(visitorTeamLu)

    const localTeamDnb = localTeamLu.filter((batsman)=> {
      if(data.data?.localteam.id === batsman?.lineup.team_id)
                  {return localTeamBat.every((notbated)=> 
                          notbated.batsman.id !== batsman.id
                          )
    }})

    setDNBLocal(localTeamDnb);

    const visitorTeamDnb = data.data?.lineup?.filter((batsman)=> {
    if(data.data?.visitorteam.id === batsman?.lineup.team_id)
                  {return visitorTeamBat.every((notbated)=> 
                          notbated.batsman.id !== batsman.id
                          )
    }})

    setDNBVisior(visitorTeamDnb);

    // console.log(dNBLocal,"hiii")

    // const visitorTeamDnb = visitorTeamLu.filter((batsman)=> 
    //                        visitorTeamBat.every((notbated)=> 
    //                       notbated.batsman.id !== batsman.id
    //                       )
    //                     )

    // setDNBVisior(visitorTeamDnb);


    
    // console.log('localTeamLu',localTeamLu.filter((batsman)=> localTeamBat.every((notbated)=> notbated.batsman.id !== batsman.id)),'localTeamBat',localTeamBat,)
    
    
    
    // let localTeamDnb = localTeamLu.filter((el)=> {
      //   return !localTeamBatting.find((f)=> {
        //     return item.id === itemP.id;
        //   })
        // })

    // const localTeamDnb = localTeamLu.filter((dnb) => { 
    //   if (localTeamBat.batsman.id === dnb?.id )
    //    { 
    //     return dnb 
    //   } 
    // })
    // setDNBLocal(localTeamDnb)
    
    // const visitorTeamDnb = data.data?.filter((dnb) => { 
      //   if (data.data?.visitorteam.id === dnb?.lineup.team_id)
      //    { 
        //     return dnb 
        //   } 
        // })
        // setDNBVisior(visitorTeamDnb)
        
        
  };

  useEffect(() => {
    // console.log(lineUpLocal,"local Team line up ");
    // console.log(localTeamBatting,"local Team batting");
    // console.log(dNBLocal,"local Team DNB batting");
    // console.log(dNBVisitor,"visitor Team DNB batting");
    // console.log( scoreApi?.lineup?.id,"id");
      fetchData();        
  }, [])

  // console.log(localScore,"score ");
  return (
    <div>
        <Navbar />
            <ScoreBoard score={scoreApi} localScore={localScore} visitorScore={visitorScore} localTeamBatting={localTeamBatting} visitorTeamBatting={visitorTeamBatting} localTeamBowling={localTeamBowling} visitorTeamBowling={visitorTeamBowling} viExtras={viExtras} loExtras={loExtras} lineUpLocal={lineUpLocal} lineUpVisitor={lineUpVisitor} dNBLocal={dNBLocal} dNBVisitor={dNBVisitor}  />
        <Footer />
    </div>
  )
}

export default ScorePage