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

    const visitorTeamScore = data.data?.runs?.filter((mScore) => { 
      if (data.data?.visitorteam_id === mScore?.team_id)
       { 
        return mScore 
      } 
    })
        // const localScore = localTeamScore;
        // const visitorScore = visitorTeamScore;
        setLocalScore(localTeamScore[0])
        setVisitorScore(visitorTeamScore[0])
        // console.log(visitorTeamScore,"score ");
  };

  useEffect(() => {
    // console.log(localScore,"score ");
      fetchData();        
  }, [])

  // console.log(localScore,"score ");
  return (
    <div>
        <Navbar />
        <ScoreBoard score={scoreApi} localScore={localScore} visitorScore={visitorScore} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
    </div>
  )
}

export default ScorePage