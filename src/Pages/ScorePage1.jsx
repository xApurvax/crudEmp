import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux/es/exports'
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import ScoreBoard from '../Components/ScoreBoard'
import {useParams } from 'react-router-dom'
import { fetchscore, cleanData } from '../store/scoreBoardSlice'

const ScorePage = () => {

  let {id} = useParams();
  const dispatch = useDispatch();
  const {scoreApi ,localScore ,visitorScore ,localTeamBatting , visitorTeamBatting ,localTeamBowling,visitorTeamBowling, viExtras, loExtras,lineUpLocal,lineUpVisitor,dNBLocal,dNBVisitor} = useSelector((state) => state.scoreBoardSlice);

  useEffect(() => {
    dispatch(fetchscore(id))
    return () => {
      dispatch(cleanData())
    };
  }, [])

  
  return (
    <div>
        <Navbar />
            <ScoreBoard score={scoreApi} localScore={localScore} visitorScore={visitorScore} localTeamBatting={localTeamBatting} visitorTeamBatting={visitorTeamBatting} localTeamBowling={localTeamBowling} visitorTeamBowling={visitorTeamBowling} viExtras={viExtras} loExtras={loExtras} lineUpLocal={lineUpLocal} lineUpVisitor={lineUpVisitor} dNBLocal={dNBLocal} dNBVisitor={dNBVisitor}  />
        <Footer />
    </div>
  )
}

export default ScorePage