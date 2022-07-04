import React from 'react'
import errorImg from "./error.jpg"

const ErrorPage = () => {
  return (
    <div style={{backgroundColor:"#f8f8f8"}}>
        <div id="pageNotFound" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" ,gap:"15px"}}>
            <img src={errorImg} style={{height:"300px"}} />
            <h1 style={{fontSize:"140px" ,color:"#767676"}}>404</h1>
            <h3 style={{fontSize:"40px",color:"#767676"}}>Page Not Found</h3>
            <p style={{fontSize:"20px",fontWeight:600,color:"#767676",textAlign:"center"}}>This Page You Are Looking For Doesn't Exist or an other error occured.</p>
            <p style={{fontSize:"20px",fontWeight:600,color:"#767676",textAlign:"center"}}>Go Back, or head over to Emplist.com to Choose a new direction.</p>
        </div>
    </div>
  )
}

export default ErrorPage