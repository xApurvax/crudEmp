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

  const fetchData = async() => {
    const {data,status} =  await axios.get(base_url+"/"+id+api_token+end_url)
    // console.log(data.data.splice(2,10))
    console.log(status)
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

    const visitorTeamBat = data.data?.batting?.filter((batting) => { 
      if (data.data?.visitorteam.id === batting?.team_id)
       { 
        return batting 
      } 
    })
    setVisitorTeamBatting(visitorTeamBat)
    
        
  };

  useEffect(() => {
    // console.log(localScore,"score ");
      fetchData();        
  }, [])

  // console.log(localScore,"score ");
  return (
    <div>
        <Navbar />
        <ScoreBoard score={scoreApi} localScore={localScore} visitorScore={visitorScore} localTeamBatting={localTeamBatting} visitorTeamBatting={visitorTeamBatting} />
        <Footer />
    </div>
  )
}

export default ScorePage